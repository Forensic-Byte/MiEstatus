import type { ReactNode } from 'react';

const LINKIFY_TERMS: { term: string; url: string }[] = [
  { term: 'uscis.gov/tps', url: 'https://www.uscis.gov/tps' },
  { term: 'uscis.gov/casestatus', url: 'https://egov.uscis.gov/casestatus/landing.do' },
  { term: 'uscis.gov/processingtimes', url: 'https://www.uscis.gov/processingtimes' },
  { term: 'uscis.gov/i-821', url: 'https://www.uscis.gov/i-821' },
  { term: 'uscis.gov/i-131', url: 'https://www.uscis.gov/i-131' },
  { term: 'uscis.gov/i-765', url: 'https://www.uscis.gov/i-765' },
  { term: 'myaccount.uscis.gov', url: 'https://myaccount.uscis.gov' },
  { term: '1-800-375-5283', url: 'tel:1-800-375-5283' },
  { term: 'Form I-821', url: 'https://www.uscis.gov/i-821' },
  { term: 'Form I-765', url: 'https://www.uscis.gov/i-765' },
  { term: 'Form I-131', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-131.pdf' },
  { term: 'Form I-912', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-912.pdf' },
  { term: 'Form I-601', url: 'https://www.uscis.gov/i-601' },
  { term: 'Formulario I-821', url: 'https://www.uscis.gov/i-821' },
  { term: 'formulario I-821', url: 'https://www.uscis.gov/i-821' },
  { term: 'Formulario I-765', url: 'https://www.uscis.gov/i-765' },
  { term: 'Formulario I-131', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-131.pdf' },
  { term: 'Formulario I-912', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-912.pdf' },
  { term: 'Formulario I-601', url: 'https://www.uscis.gov/i-601' },
  { term: 'Tarjimly', url: 'https://www.tarjimly.org' },
  { term: 'UnidosUS', url: 'https://www.unidosus.org' },
];

export function linkify(text: string): ReactNode[] {
  const matches: { start: number; end: number; term: string; url: string }[] = [];
  for (const { term, url } of LINKIFY_TERMS) {
    let idx = 0;
    while ((idx = text.indexOf(term, idx)) !== -1) {
      matches.push({ start: idx, end: idx + term.length, term, url });
      idx += term.length;
    }
  }
  matches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  const filtered: typeof matches = [];
  let lastEnd = 0;
  for (const m of matches) {
    if (m.start >= lastEnd) {
      filtered.push(m);
      lastEnd = m.end;
    }
  }
  const result: ReactNode[] = [];
  let pos = 0;
  filtered.forEach((m, i) => {
    if (m.start > pos) result.push(text.slice(pos, m.start));
    const isTel = m.url.startsWith('tel:');
    result.push(
      <a
        key={`lf-${i}`}
        href={m.url}
        {...(isTel ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        className="font-bold underline"
        style={{ color: '#22C55E' }}
      >
        {m.term}
      </a>
    );
    pos = m.end;
  });
  if (pos < text.length) result.push(text.slice(pos));
  return result;
}

export function renderTextWithLink(
  text: string,
  linkText?: string,
  linkUrl?: string,
  linkDownload?: boolean,
  noLinkify?: boolean,
): ReactNode {
  const slice = (s: string) => (noLinkify ? s : linkify(s));
  if (!linkText || !linkUrl || !text.includes(linkText)) return slice(text);
  const idx = text.indexOf(linkText);
  const isTel = linkUrl.startsWith('tel:');
  return (
    <>
      {slice(text.slice(0, idx))}
      <a
        href={linkUrl}
        {...(isTel ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        {...(linkDownload ? { download: true } : {})}
        className="font-bold underline"
        style={{ color: '#22C55E' }}
      >
        {linkText}
      </a>
      {slice(text.slice(idx + linkText.length))}
    </>
  );
}

export function renderCardBody(
  body: string,
  link?: { text: string; url: string; download?: boolean },
  paragraphGap = false,
  noLinkify = false,
) {
  const render = (s: string) => (noLinkify ? [s] : linkify(s));
  const lines = body.split('\n');
  return lines.map((line, i) => {
    const parts = link && line.includes(link.text) ? line.split(link.text) : null;
    return (
      <span
        key={i}
        style={i > 0 && paragraphGap ? { display: 'block', marginTop: '0.6rem' } : undefined}
      >
        {i > 0 && !paragraphGap && <br />}
        {parts ? (
          <>
            {render(parts[0])}
            <a
              href={link!.url}
              target="_blank"
              rel="noopener noreferrer"
              {...(link!.download ? { download: true } : {})}
              className="font-bold underline"
              style={{ color: '#22C55E', fontSize: '1.08rem' }}
            >
              {link!.text}
            </a>
            {render(parts.slice(1).join(link!.text))}
          </>
        ) : (
          render(line)
        )}
      </span>
    );
  });
}

export function renderItemWithItemLinks(text: string, itemLinks?: { text: string; url: string; download?: boolean }[]) {
  if (!itemLinks || itemLinks.length === 0) return null;
  for (const il of itemLinks) {
    if (text.includes(il.text)) {
      const idx = text.indexOf(il.text);
      return (
        <>
          {linkify(text.slice(0, idx))}
          <a
            href={il.url}
            target="_blank"
            rel="noopener noreferrer"
            {...(il.download ? { download: true } : {})}
            className="font-bold underline"
            style={{ color: '#22C55E' }}
          >
            {il.text}
          </a>
          {linkify(text.slice(idx + il.text.length))}
        </>
      );
    }
  }
  return null;
}
