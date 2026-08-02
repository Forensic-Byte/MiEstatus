import { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronDown,
  AlertCircle,
  Clock,
  ExternalLink,
  Star,
  Globe,
} from 'lucide-react';
import {
  COUNTRY_FLAGS,
  STRINGS,
  UPDATES,
  tpsUrl,
  type Lang,
  type UpdateType,
  type UpdateCard,
} from '@/content';
import { linkify, renderCardBody } from '@/lib/linkify';
import {
  Logo,
  Disclaimer,
  LangToggle,
  NavBar,
  TipBox,
  EmailSignup,
} from '@/components/shared';
import { CollapsibleUpdateSubcard } from '@/components/Collapsible';

export function Dashboard({
  lang,
  setLang,
  onFormClick,
  onCheckStatus,
  onHome,
  country,
  scrollToAsc = false,
  scrollToPreparer = false,
  scrollToAttorney = false,
  scrollToTranslator = false,
  scrollToI821 = false,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  onFormClick: () => void;
  onCheckStatus: () => void;
  onHome: () => void;
  country: string;
  scrollToAsc?: boolean;
  scrollToPreparer?: boolean;
  scrollToAttorney?: boolean;
  scrollToTranslator?: boolean;
  scrollToI821?: boolean;
}) {
  const s = STRINGS[lang];
  const [tab, setTab] = useState<UpdateType>('forms');

  const scrollToCard = (id: string) => {
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.style.transition = 'box-shadow 0.5s ease';
        el.style.boxShadow = '0 0 0 4px #22C55E';
        setTimeout(() => {
          el.style.boxShadow = '';
        }, 3000);
      }
    }, 150);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    if (!scrollToAsc) return;
    setTab('resources');
    return scrollToCard('asc-card');
  }, [scrollToAsc]);
  useEffect(() => {
    if (!scrollToI821) return;
    setTab('forms');
    return scrollToCard('i-821-card');
  }, [scrollToI821]);
  useEffect(() => {
    if (!scrollToAttorney) return;
    setTab('resources');
    return scrollToCard('attorney-card');
  }, [scrollToAttorney]);
  useEffect(() => {
    if (!scrollToTranslator) return;
    setTab('resources');
    return scrollToCard('translator-card');
  }, [scrollToTranslator]);
  useEffect(() => {
    if (!scrollToPreparer) return;
    setTab('preparer');
    const timer = setTimeout(() => {
      const tabBtn = document.getElementById('preparer-tab');
      const card = document.getElementById('preparer-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      [tabBtn, card].forEach((el) => {
        if (el) {
          el.style.transition = 'box-shadow 0.5s ease';
          el.style.boxShadow = '0 0 0 4px #22C55E';
          setTimeout(() => { el.style.boxShadow = ''; }, 3000);
        }
      });
    }, 200);
    return () => clearTimeout(timer);
  }, [scrollToPreparer]);

  const isElSalvador = country === 'El Salvador';
  const all = UPDATES[lang];
  const sortWorkingFirst = (arr: UpdateCard[]) =>
    [...arr].sort((a, b) => {
      if (a.warning && !b.warning) return 1;
      if (!a.warning && b.warning) return -1;
      if (!!a.comingSoon === !!b.comingSoon) return 0;
      return a.comingSoon ? 1 : -1;
    });
  let cards: UpdateCard[];
  if (!isElSalvador) {
    if (tab === 'forms' || tab === 'deadline' || tab === 'news') {
      const tpsUrlStr = tpsUrl(country);
      const newsUrl = 'https://www.uscis.gov/newsroom';
      const body =
        tab === 'forms' ? s.placeholderForms(country)
        : tab === 'deadline' ? s.placeholderDeadlines(country)
        : s.placeholderNews(country);
      const url = tab === 'news' ? newsUrl : tpsUrlStr;
      cards = [{
        type: tab, icon: Globe, tag: tab === 'deadline' ? (lang === 'es' ? 'Fecha Límite' : 'Deadline') : (lang === 'es' ? 'Próximamente' : 'Coming Soon'),
        title: lang === 'es' ? `${country} — Próximamente` : `${country} — Coming Soon`,
        body, comingSoon: true, link: { text: tab === 'news' ? 'uscis.gov/newsroom' : 'uscis.gov/tps', url: tab === 'news' ? newsUrl : tpsUrlStr },
      } as UpdateCard];
    } else {
      cards = sortWorkingFirst(all.filter((c) => c.type === tab));
    }
  } else {
    cards = sortWorkingFirst(
      tab === 'news'
        ? all.filter((c) => c.type === 'news' && c.showInNews !== false)
        : all.filter((c) => c.type === tab)
    );
  }
  const tabs: { id: UpdateType; label: string }[] = [
    { id: 'forms', label: s.tabForms },
    { id: 'deadline', label: s.tabDeadlines },
    { id: 'news', label: s.tabNews },
    { id: 'resources', label: s.tabResources },
    { id: 'preparer', label: s.tabPreparer },
  ];
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="bg-primary text-primary-foreground sticky top-0 z-30 shadow-md">
        <div
          className="max-w-2xl mx-auto px-4 flex items-center justify-between"
          style={{ minHeight: '68px' }}
        >
          <button
            onClick={onHome}
            className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity font-bold"
            style={{ fontSize: '1.4rem' }}
          >
            <Logo size={36} />
            <span style={{ fontFamily: "'Source Serif 4', serif" }}>{s.toolName}</span>
          </button>
          <div className="flex items-center gap-3">
            <NavBar
              lang={lang}
              current="dashboard"
              onHome={onHome}
              onDashboard={() => {}}
              onGuide={onFormClick}
            />
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-7">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span style={{ fontSize: '2rem' }}>{COUNTRY_FLAGS[country] ?? '🏳️'}</span>
            <h1
              className="font-bold text-foreground"
              style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.6rem' }}
            >
              {s.dashSubtitle(country)}
            </h1>
          </div>
          <p className="text-foreground font-medium" style={{ fontSize: '1.1rem' }}>
            {s.dashSubtitleText}
          </p>
        </div>
        <div className="mb-6 bg-primary text-primary-foreground rounded-2xl p-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-bold" style={{ fontSize: '1.2rem' }}>
              {s.formCTATitle}
            </p>
            <p className="mt-1 opacity-80" style={{ fontSize: '1rem' }}>
              {s.formCTABody}
            </p>
          </div>
          <button
            onClick={onCheckStatus}
            className="shrink-0 bg-accent text-accent-foreground font-bold rounded-xl hover:bg-accent/90 transition-colors whitespace-nowrap"
            style={{ padding: '14px 20px', fontSize: '1.05rem' }}
          >
            {s.formCTABtn}
          </button>
        </div>
        <div
          className="rounded-2xl p-5 mb-6 flex gap-4"
          style={{ backgroundColor: '#FFF0F2', border: '2px solid #C41E3A' }}
        >
          <AlertCircle size={28} className="shrink-0 mt-0.5" style={{ color: '#C41E3A' }} />
          <div>
            <p className="font-bold text-foreground" style={{ fontSize: '1.2rem' }}>
              {isElSalvador ? s.urgentTitle : (lang === 'es' ? 'Mantente informado' : 'Stay informed')}
            </p>
            <p className="text-foreground mt-1" style={{ fontSize: '1rem' }}>
              {isElSalvador ? s.urgentBody : s.placeholderAlert(country)}
            </p>
          </div>
        </div>
        <div className="flex gap-2 mb-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              id={t.id === 'preparer' ? 'preparer-tab' : undefined}
              onClick={() => setTab(t.id)}
              className={`flex-1 font-bold rounded-xl border-2 transition-colors ${
                tab === t.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-foreground border-border hover:bg-muted'
              }`}
              style={{ padding: '12px 4px', fontSize: '0.95rem' }}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const isForm = c.type === 'forms';
            const hideLearnMore = c.hideLearnMore || c.comingSoon || c.type === 'resources' || c.type === 'preparer' && !c.emailSignup && !c.bottomLink;
            return (
              <div
                key={i}
                id={c.title.includes('ASC') ? 'asc-card' : c.title.includes('attorney') || c.title.includes('abogado') ? 'attorney-card' : c.title.includes('translator') || c.title.includes('traductor') ? 'translator-card' : c.title.includes('I-821') ? 'i-821-card' : c.title.includes('I-765') ? 'i-765-card' : c.title.includes('verified preparer') || c.title.includes('preparador verificado') ? 'preparer-card' : undefined}
                className="bg-card rounded-2xl p-5 relative"
                style={{
                  border: '2px solid #E5E7EB',
                  ...(c.warning ? { borderLeft: '6px solid #C41E3A' } : {}),
                  ...(c.borderColor ? { border: `2px solid ${c.borderColor}` } : {}),
                }}
              >
                {c.comingSoon && (
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
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 rounded-xl flex items-center justify-center"
                    style={{ width: 48, height: 48, backgroundColor: '#EFF2F5', color: '#1E3A5F' }}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    {c.urgent && (
                      <p className="font-bold mb-1" style={{ fontSize: '1rem', color: '#C41E3A' }}>
                        {s.urgent}
                      </p>
                    )}
                    <span
                      className="font-bold rounded-lg px-2 py-0.5 mr-2"
                      style={{
                        fontSize: '0.9rem',
                        backgroundColor: c.type === 'deadline' ? '#FED7AA' : '#DBEAFE',
                        color: c.type === 'deadline' ? '#92400E' : '#1E3A5F',
                      }}
                    >
                      {c.tag}
                    </span>
                    <h3
                      className="font-bold text-foreground leading-snug mt-2 mb-2"
                      style={{ fontSize: '1.15rem' }}
                    >
                      {linkify(c.title)}
                    </h3>
                    <p className="text-foreground leading-relaxed mb-3" style={{ fontSize: '1rem' }}>
                      {renderCardBody(c.body, c.link, false, c.noLinkify)}
                    </p>
                    {c.gif && (
                      <div className="mb-3 -mx-2">
                        <img
                          src={c.gif.src}
                          alt={c.gif.alt}
                          className="w-full h-auto rounded-xl"
                          style={{ maxHeight: '70vh', objectFit: 'contain' }}
                        />
                      </div>
                    )}
                    {c.items && c.items.length > 0 && (
                      <ul className="space-y-2 mb-3">
                        {c.items.map((n, ni) => {
                          const navText = c.itemsNav?.text;
                          const navParts = navText && n.includes(navText) ? n.split(navText) : null;
                          return (
                            <li
                              key={ni}
                              className="flex items-start gap-2 text-foreground leading-relaxed"
                              style={{ fontSize: '0.95rem' }}
                            >
                              <span className="shrink-0 mt-1" style={{ color: '#22C55E' }}>•</span>
                              <span>
                                {navParts ? (
                                  <>
                                    {linkify(navParts[0])}
                                    <button
                                      onClick={() => {
                                        setTab(c.itemsNav!.tab);
                                        if (c.itemsNav!.tab === 'forms') {
                                          setTimeout(() => {
                                            const i821 = document.getElementById('i-821-card');
                                            const i765 = document.getElementById('i-765-card');
                                            if (i821) {
                                              i821.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            }
                                            [i821, i765].forEach((el) => {
                                              if (el) {
                                                el.style.transition = 'box-shadow 0.5s ease';
                                                el.style.boxShadow = '0 0 0 4px #22C55E';
                                                setTimeout(() => { el.style.boxShadow = ''; }, 3000);
                                              }
                                            });
                                          }, 200);
                                        }
                                      }}
                                      className="font-bold underline cursor-pointer"
                                      style={{ color: '#22C55E' }}
                                    >
                                      {navText}
                                    </button>
                                    {linkify(navParts.slice(1).join(navText ?? ''))}
                                  </>
                                ) : (
                                  linkify(n)
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {c.subsections && c.subsections.length > 0 && (
                      <div className="mb-3 space-y-4">
                        {c.subsections.map((sub, si) =>
                          sub.collapsible ? (
                            <CollapsibleUpdateSubcard key={si} sub={sub} />
                          ) : (
                            <div
                              key={si}
                              className="rounded-2xl p-5"
                              style={{ backgroundColor: '#F3F4F6', border: '2px solid #E5E7EB' }}
                            >
                              <p className="font-bold text-foreground mb-2" style={{ fontSize: '1.05rem' }}>
                                {sub.titleLink ? (
                                  <a
                                    href={sub.titleLink.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                    style={{ color: '#22C55E' }}
                                  >
                                    {linkify(sub.title)}
                                  </a>
                                ) : (
                                  linkify(sub.title)
                                )}
                              </p>
                              <p className="text-foreground leading-relaxed" style={{ fontSize: '1rem' }}>
                                {linkify(sub.body)}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    )}
                    {c.tipBox && (
                      <TipBox label={s.tip}>
                        {linkify(c.tipBox)}
                      </TipBox>
                    )}
                    {c.afterSubsectionsNote && (
                      <p className="mb-3" style={{ fontSize: '1rem', color: '#1F2328' }}>
                        {linkify(c.afterSubsectionsNote.text)}
                        <span data-coming-soon="true" style={{ color: '#9CA3AF', cursor: 'pointer' }}>{c.afterSubsectionsNote.mutedSuffix}</span>
                      </p>
                    )}
                    {c.links && c.links.length > 0 && (
                      <div className="mb-3 space-y-1">
                        {c.links.map((lnk, li) => (
                          <div key={li}>
                            <a
                              href={lnk.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold underline"
                              style={{ color: '#22C55E', fontSize: '1rem' }}
                            >
                              {lnk.text}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                    {c.bottomLink && (
                      <div className="mb-3">
                        <a
                          href={c.bottomLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline"
                          style={{ color: '#22C55E', fontSize: '1rem' }}
                        >
                          {c.bottomLink.text}
                        </a>
                      </div>
                    )}
                    {c.starRating && (
                      <div className="flex items-center gap-1 mb-3">
                        {[0, 1, 2, 3, 4].map((si) => (
                          <Star key={si} size={22} style={{ color: '#FBBF24' }} />
                        ))}
                      </div>
                    )}
                    {c.emailSignup && <EmailSignup lang={lang} />}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="font-medium" style={{ fontSize: '0.95rem', color: '#57606A' }}>
                        {c.date && (
                          <>
                            <Clock size={14} className="inline mr-1" />
                            {c.date}
                          </>
                        )}
                      </span>
                      {isForm && !c.hideFormButton ? (
                        c.inactiveFormButton || !isElSalvador ? (
                          <button
                            type="button"
                            data-coming-soon="true"
                            title={!isElSalvador ? (lang === 'es' ? 'Disponible solo para El Salvador' : 'Available for El Salvador only') : (lang === 'es' ? 'Próximamente' : 'Coming Soon')}
                            className="font-bold rounded-xl flex items-center gap-2 cursor-pointer"
                            style={{ padding: '10px 18px', fontSize: '1rem', backgroundColor: '#E5E7EB', color: '#9CA3AF' }}
                          >
                            {s.formExplainer} <ChevronRight size={18} />
                          </button>
                        ) : (
                          <button
                            onClick={onFormClick}
                            className="font-bold text-primary-foreground bg-primary rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-colors"
                            style={{ padding: '10px 18px', fontSize: '1rem' }}
                          >
                            {s.formExplainer} <ChevronRight size={18} />
                          </button>
                        )
                      ) : hideLearnMore ? null : (
                        <a
                          href={c.learnMoreUrl || 'https://www.uscis.gov'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold flex items-center gap-1 underline"
                          style={{ fontSize: '1.05rem', color: '#22C55E' }}
                        >
                          {s.learnMore} <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    {c.mutedNote && (
                      <p className="mt-3 italic" style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>
                        {c.mutedNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 pb-8">
          <Disclaimer lang={lang} />
        </div>
      </main>
    </div>
  );
}
