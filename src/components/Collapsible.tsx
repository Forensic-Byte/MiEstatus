import { useState, type ReactNode } from 'react';
import { ChevronUp, ChevronDown, CheckCircle } from 'lucide-react';
import { STRINGS, type Lang, type Subsection } from '@/content';
import {
  linkify,
  renderTextWithLink,
  renderItemWithItemLinks,
} from '@/lib/linkify';
import { TipBox } from '@/components/shared';

export function CollapsibleSubcard({
  sub,
  lang,
  onFindAsc,
  onFindPreparer,
  onFindAttorney,
  onFindTranslator,
}: {
  sub: Subsection;
  lang: Lang;
  onFindAsc?: () => void;
  onFindPreparer?: () => void;
  onFindAttorney?: () => void;
  onFindTranslator?: () => void;
}) {
  const s = STRINGS[lang];
  const [open, setOpen] = useState(false);
  const navHandler = (target?: string) =>
    target === 'attorney'
      ? onFindAttorney
      : target === 'translator'
        ? onFindTranslator
        : onFindPreparer;
  return (
    <div
      className="bg-card rounded-2xl overflow-hidden"
      style={{ border: open ? '2px solid #1E3A5F' : '2px solid #E5E7EB' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
        style={{ padding: '18px 20px' }}
      >
        <p className="font-bold text-foreground leading-snug" style={{ fontSize: '1.1rem' }}>
          {linkify(sub.title)}
        </p>
        {open ? (
          <ChevronUp size={26} className="text-foreground shrink-0" />
        ) : (
          <ChevronDown size={26} className="text-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div
          className="px-5 pb-5 space-y-4"
          style={{ borderTop: '2px solid #E5E7EB', paddingTop: '20px' }}
        >
          {sub.intro && (
            <p className="text-foreground leading-relaxed" style={{ fontSize: '1.05rem' }}>
              {linkify(sub.intro)}
            </p>
          )}
          {sub.text && (
            <p className="text-foreground leading-relaxed" style={{ fontSize: '1.05rem' }}>
              {(() => {
                const tn = sub.textNav;
                if (tn && sub.text.includes(tn.text)) {
                  const idx = sub.text.indexOf(tn.text);
                  return (
                    <>
                      {linkify(sub.text.slice(0, idx))}
                      <button
                        onClick={navHandler(tn.target)}
                        className="font-bold underline cursor-pointer"
                        style={{ color: '#22C55E' }}
                      >
                        {tn.text}
                      </button>
                      {linkify(sub.text.slice(idx + tn.text.length))}
                    </>
                  );
                }
                return renderTextWithLink(sub.text, sub.link?.text, sub.link?.url, sub.link?.download, sub.noLinkify);
              })()}
            </p>
          )}
          {sub.items && sub.items.length > 0 && (
            <ul className="space-y-3">
              {sub.items.map((n, ni) => {
                const lt = sub.link?.text;
                const parts = lt && n.includes(lt) ? n.split(lt) : null;
                const ascText = sub.ascLink
                  ? lang === 'es'
                    ? 'Centro de Soporte de Solicitudes (ASC)'
                    : 'Application Support Center (ASC)'
                  : null;
                const ascParts = ascText && n.includes(ascText) ? n.split(ascText) : null;
                const navText = sub.navLink?.text;
                const navParts = navText && n.includes(navText) ? n.split(navText) : null;
                return (
                  <li
                    key={ni}
                    className="flex items-start gap-3 text-foreground"
                    style={{ fontSize: '1.05rem' }}
                  >
                    <CheckCircle
                      size={22}
                      className="shrink-0 mt-0.5"
                      style={{ color: '#1E3A5F' }}
                    />
                    <span>
                      {(() => {
                        const ilRendered = renderItemWithItemLinks(n, sub.itemLinks);
                        if (ilRendered) return ilRendered;
                        if (ascParts) {
                          return (
                            <>
                              {ascParts[0]}
                              <button
                                onClick={onFindAsc}
                                className="font-bold underline cursor-pointer"
                                style={{ color: '#22C55E' }}
                              >
                                {ascText}
                              </button>
                              {ascParts.slice(1).join(ascText ?? '')}
                            </>
                          );
                        }
                        if (navParts) {
                          return (
                            <>
                              {linkify(navParts[0])}
                              <button
                                onClick={navHandler(sub.navLink?.target)}
                                className="font-bold underline cursor-pointer"
                                style={{ color: '#22C55E' }}
                              >
                                {navText}
                              </button>
                              {linkify(navParts.slice(1).join(navText ?? ''))}
                            </>
                          );
                        }
                        if (parts) {
                          return (
                            <>
                              {parts[0]}
                              <a
                                href={sub.link!.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                {...(sub.link!.download ? { download: true } : {})}
                                className="font-bold underline"
                                style={{ color: '#22C55E' }}
                              >
                                {lt}
                              </a>
                              {linkify(parts.slice(1).join(lt))}
                            </>
                          );
                        }
                        return linkify(n);
                      })()}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
          {sub.nested && (
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}
            >
              <p className="font-bold text-foreground mb-3" style={{ fontSize: '1.05rem' }}>
                {linkify(sub.nested.title)}
              </p>
              <ul className="space-y-3">
                {sub.nested.items.map((n, ni) => (
                  <li
                    key={ni}
                    className="flex items-start gap-3 text-foreground"
                    style={{ fontSize: '1.05rem' }}
                  >
                    <CheckCircle
                      size={22}
                      className="shrink-0 mt-0.5"
                      style={{ color: '#1E3A5F' }}
                    />
                    <span>{linkify(n)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {sub.addressBlocks && sub.addressBlocks.length > 0 && (
            <div className="space-y-4">
              {sub.addressBlocks.map((block, bi) => (
                <div
                  key={bi}
                  className="rounded-xl p-4"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid #1E3A5F' }}
                >
                  <p className="font-bold text-foreground mb-2" style={{ fontSize: '1rem' }}>
                    {block.title}
                  </p>
                  <div className="space-y-2">
                    {block.lines.map((line, li) => (
                      <p
                        key={li}
                        className="text-foreground leading-relaxed"
                        style={{ fontSize: '0.95rem' }}
                      >
                        {linkify(line)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {sub.tipBox && (
            <TipBox label={s.tip}>
              {linkify(sub.tipBox)}
            </TipBox>
          )}
          {sub.bottomNav && (
            <p className="text-foreground leading-relaxed">
              <button
                onClick={navHandler(sub.bottomNav.target)}
                className="font-bold underline cursor-pointer"
                style={{ color: '#22C55E', fontSize: '1.05rem' }}
              >
                {sub.bottomNav.text}
              </button>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function CollapsibleUpdateSubcard({
  sub,
}: {
  sub: { title: string; body: string; titleLink?: { url: string } };
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: isOpen ? '2px solid #1E3A5F' : '2px solid #E5E7EB' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
        style={{ padding: '18px 20px' }}
      >
        <p className="font-bold text-foreground" style={{ fontSize: '1.05rem' }}>
          {sub.titleLink ? (
            <a
              href={sub.titleLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: '#22C55E' }}
            >
              {sub.title}
            </a>
          ) : (
            linkify(sub.title)
          )}
        </p>
        {isOpen ? (
          <ChevronUp size={26} className="text-foreground shrink-0" />
        ) : (
          <ChevronDown size={26} className="text-foreground shrink-0" />
        )}
      </button>
      {isOpen && (
        <div
          className="px-5 pb-5"
          style={{ borderTop: '2px solid #E5E7EB', paddingTop: '20px' }}
        >
          <p className="text-foreground leading-relaxed" style={{ fontSize: '1rem' }}>
            {linkify(sub.body)}
          </p>
        </div>
      )}
    </div>
  );
}
