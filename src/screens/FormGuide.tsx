import { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';
import { STRINGS, STEPS, type Lang } from '@/content';
import { linkify, renderCardBody, renderTextWithLink } from '@/lib/linkify';
import {
  Logo,
  Disclaimer,
  LangToggle,
  NavBar,
  TipBox,
  ArrowLeftLocal,
} from '@/components/shared';
import { CollapsibleSubcard } from '@/components/Collapsible';

export function FormGuide({
  lang,
  setLang,
  onBack,
  onHome,
  onDashboard,
  onFindAsc,
  onFindPreparer,
  onFindAttorney,
  onFindTranslator,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  onBack: () => void;
  onHome: () => void;
  onDashboard: () => void;
  onFindAsc: () => void;
  onFindPreparer: () => void;
  onFindAttorney: () => void;
  onFindTranslator: () => void;
}) {
  const s = STRINGS[lang];
  const steps = STEPS[lang];
  const [open, setOpen] = useState<number | null>(0);
  const navHandler = (target?: string) => target === 'attorney' ? onFindAttorney : target === 'translator' ? onFindTranslator : onFindPreparer;
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="bg-primary text-primary-foreground sticky top-0 z-30 shadow-md">
        <div
          className="max-w-2xl mx-auto px-4 flex items-center justify-between"
          style={{ minHeight: '68px' }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-bold text-primary-foreground hover:opacity-80 transition-opacity"
            style={{ fontSize: '1.15rem' }}
          >
            <ArrowLeftLocal />
            {s.back.replace('← ', '')}
          </button>
          <div className="flex items-center gap-3">
            <NavBar
              lang={lang}
              current="form"
              onHome={onHome}
              onDashboard={onDashboard}
              onGuide={() => {}}
            />
            <Logo size={36} />
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-7">
        <div className="mb-7">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="font-bold rounded-xl px-3 py-1"
              style={{
                fontSize: '1rem',
                backgroundColor: '#FFF0F2',
                color: '#C41E3A',
                border: '2px solid #C41E3A',
              }}
            >
              I-821
            </span>
            <span className="font-bold text-foreground" style={{ fontSize: '1rem' }}>
              TPS
            </span>
          </div>
          <h1
            className="font-bold text-foreground mb-2"
            style={{ fontFamily: "'Source Serif 4', serif", fontSize: '2rem' }}
          >
            {s.formTitle}
          </h1>
          <p className="font-semibold text-foreground mb-4" style={{ fontSize: '1.15rem' }}>
            {s.formSubtitle}
          </p>
          <div
            className="rounded-2xl p-5"
            style={{ backgroundColor: '#FEF08A', border: '2px solid #FDE68A', borderLeft: '4px solid #F59E0B' }}
          >
            <div className="flex items-start gap-3">
              <Lightbulb size={28} className="shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
              <p className="text-foreground leading-relaxed" style={{ fontSize: '1.1rem' }}>
                {linkify(s.formIntro)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-7">
          {steps.map((_, p) => (
            <div
              key={p}
              className="flex-1 rounded-full transition-colors"
              style={{
                height: 8,
                backgroundColor: open !== null && p <= open ? '#1E3A5F' : '#E5E7EB',
              }}
            />
          ))}
        </div>
        <div className="space-y-4">
          {steps.map((step, p) => {
            const isOpen = open === p;
            const isDone = open !== null && p < open;
            return (
              <div
                key={p}
                className="bg-card rounded-2xl overflow-hidden"
                style={{ border: isOpen ? '2px solid #1E3A5F' : '2px solid #E5E7EB' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : p)}
                  className="w-full flex items-center gap-4 text-left"
                  style={{ padding: '18px 20px' }}
                >
                  <div
                    className="shrink-0 rounded-full flex items-center justify-center font-bold"
                    style={{
                      width: 40,
                      height: 40,
                      fontSize: '1.1rem',
                      backgroundColor: isDone ? '#DBEAFE' : isOpen ? '#1E3A5F' : '#F3F4F6',
                      color: isDone ? '#1E3A5F' : isOpen ? '#ffffff' : '#57606A',
                    }}
                  >
                    {isDone ? <CheckCircle size={22} /> : p + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium" style={{ fontSize: '0.9rem', color: '#57606A' }}>
                      {s.stepLabel} {p + 1}
                    </p>
                    <p className="font-bold text-foreground leading-snug" style={{ fontSize: '1.1rem' }}>
                      {step.title}
                    </p>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={26} className="text-foreground shrink-0" />
                  ) : (
                    <ChevronDown size={26} className="text-foreground shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div
                    className="px-5 pb-5 space-y-5"
                    style={{ borderTop: '2px solid #E5E7EB', paddingTop: '20px' }}
                  >
                    <p className="text-foreground leading-relaxed" style={{ fontSize: '1.1rem' }}>
                      {renderCardBody(step.body, step.link, true)}
                    </p>
                    {step.needs.length > 0 && (
                      <div
                        className="rounded-2xl p-5"
                        style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}
                      >
                        <p className="font-bold text-foreground mb-3" style={{ fontSize: '1.05rem' }}>
                          {s.whatYouNeed}
                        </p>
                        <ul className="space-y-3">
                          {step.needs.map((n, ni) => (
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
                    {step.subsections && step.subsections.length > 0 && (
                      <div className="space-y-4">
                        {step.subsections.map((sub, si) =>
                          sub.collapsible ? (
                            <CollapsibleSubcard key={si} sub={sub} lang={lang} onFindAsc={onFindAsc} onFindPreparer={onFindPreparer} onFindAttorney={onFindAttorney} onFindTranslator={onFindTranslator} />
                          ) : (
                            <div
                              key={si}
                              className="rounded-2xl p-5 relative"
                              style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}
                            >
                            {sub.comingSoon && (
                              <span
                                data-coming-soon="true"
                                className="absolute font-bold rounded-lg px-2 py-1 cursor-pointer"
                                style={{
                                  top: 12,
                                  right: 12,
                                  fontSize: '0.75rem',
                                  backgroundColor: '#1E3A5F',
                                  color: '#ffffff',
                                }}
                              >
                                {lang === 'es' ? 'Próximamente' : 'Coming Soon'}
                              </span>
                            )}
                            <p className="font-bold text-foreground mb-3 pr-24" style={{ fontSize: '1.05rem' }}>
                              {linkify(sub.title)}
                            </p>
                            {sub.intro && (
                              <p className="text-foreground leading-relaxed mb-3" style={{ fontSize: '1.05rem' }}>
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
                                    ? (lang === 'es' ? 'Centro de Soporte de Solicitudes (ASC)' : 'Application Support Center (ASC)')
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
                                          const ilRendered = renderItemWithItemLinksLocal(n, sub.itemLinks);
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
                                                {linkify(parts[0])}
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
                                                {linkify(parts.slice(1).join(sub.link!.text))}
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
                            {sub.addressBlocks && sub.addressBlocks.length > 0 && (
                              <div className="space-y-4">
                                {sub.addressBlocks.map((block, bi) => (
                                  <div
                                    key={bi}
                                    className="rounded-xl p-4"
                                    style={{ backgroundColor: '#FFFFFF', border: '2px solid #1E3A5F' }}
                                  >
                                    <p className="font-bold text-foreground mb-2" style={{ fontSize: '1rem' }}>
                                      {linkify(block.title)}
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
                          </div>
                        )
                      )}
                      </div>
                    )}
                    {step.note && (
                      <p className="text-center" style={{ fontSize: '1rem', color: '#1F2328' }}>
                        {renderTextWithLink(step.note!.text, step.note!.linkText, step.note!.url)}
                      </p>
                    )}
                    <TipBox label={s.tip}>
                      {(() => {
                        const t = step.tip;
                        const lt = step.tipLink?.text;
                        const lu = step.tipLink?.url;
                        const nav = step.tipNav?.text;
                        if (nav && t.includes(nav)) {
                          const idx = t.indexOf(nav);
                          return (
                            <>
                              {linkify(t.slice(0, idx))}
                              <button
                                onClick={onFindPreparer}
                                className="font-bold underline cursor-pointer"
                                style={{ color: '#22C55E' }}
                              >
                                {nav}
                              </button>
                              {linkify(t.slice(idx + nav.length))}
                            </>
                          );
                        }
                        if (!lt || !lu || !t.includes(lt)) return linkify(t);
                        return renderTextWithLink(t, lt, lu);
                      })()}
                    </TipBox>
                    {step.afterTipNote && (
                      <p className="text-center" style={{ fontSize: '1rem', color: '#1F2328' }}>
                        {renderTextWithLink(
                          step.afterTipNote!.text,
                          step.afterTipNote!.linkText,
                          step.afterTipNote!.url,
                        )}
                      </p>
                    )}
                    {step.important && (
                      <div
                        className="rounded-2xl p-5 flex gap-3"
                        style={{ backgroundColor: '#FFF0F2', border: '2px solid #C41E3A' }}
                      >
                        <AlertCircle size={24} className="shrink-0 mt-0.5" style={{ color: '#C41E3A' }} />
                        <div>
                          <p className="font-bold mb-1" style={{ fontSize: '1.05rem', color: '#C41E3A' }}>
                            {s.importantNote}
                          </p>
                          <p className="text-foreground leading-relaxed" style={{ fontSize: '1.05rem' }}>
                            {linkify(step.important)}
                          </p>
                        </div>
                      </div>
                    )}
                    {p < steps.length - 1 ? (
                      <button
                        onClick={() => setOpen(p + 1)}
                        className="w-full bg-primary text-primary-foreground font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors"
                        style={{ padding: '18px 24px', fontSize: '1.2rem' }}
                      >
                        {s.nextStep} <ArrowRight size={22} />
                      </button>
                    ) : (
                      <div
                        className="rounded-2xl text-center font-bold text-foreground"
                        style={{
                          padding: '18px',
                          fontSize: '1.15rem',
                          backgroundColor: '#F0FDF4',
                          border: '2px solid #86EFAC',
                        }}
                      >
                        {s.allDone}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p
          className="mt-7 font-medium text-center text-foreground leading-relaxed"
          style={{ fontSize: '1rem' }}
        >
          {(() => {
            const t = s.attorneyNote;
            const nav = s.attorneyNoteNav;
            if (nav && t.includes(nav)) {
              const idx = t.indexOf(nav);
              return (
                <>
                  {linkify(t.slice(0, idx))}
                  <button
                    onClick={onFindAttorney}
                    className="font-bold underline cursor-pointer"
                    style={{ color: '#22C55E' }}
                  >
                    {nav}
                  </button>
                  {linkify(t.slice(idx + nav.length))}
                </>
              );
            }
            return linkify(t);
          })()}
        </p>
        <div className="mt-4 pb-10">
          <Disclaimer lang={lang} />
        </div>
      </main>
    </div>
  );
}

function renderItemWithItemLinksLocal(text: string, itemLinks?: { text: string; url: string; download?: boolean }[]) {
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
