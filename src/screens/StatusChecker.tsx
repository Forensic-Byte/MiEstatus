import { useState } from 'react';
import { CheckCircle, Lightbulb } from 'lucide-react';
import { STRINGS, COUNTRIES, TPS_DESIGNATIONS, type Lang } from '@/content';
import { linkify } from '@/lib/linkify';
import { Logo, LangToggle, CountryPicker } from '@/components/shared';
import { supabase } from '@/lib/supabase';

export function StatusChecker({
  lang,
  setLang,
  country,
  onContinue,
  onBack,
  onViewAll,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  country: string;
  onContinue: () => void;
  onBack: () => void;
  onViewAll: () => void;
}) {
  const s = STRINGS[lang];
  const [selectedCountry, setSelectedCountry] = useState(country);
  const [approvalDate, setApprovalDate] = useState('');
  const [result, setResult] = useState<'act' | 'coming' | 'good' | 'terminated' | null>(null);
  const [daysUntil, setDaysUntil] = useState(0);
  const [endDate, setEndDate] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function formatDate(iso: string): string {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function handleCheck() {
    if (!selectedCountry || !approvalDate) return;
    const designation = TPS_DESIGNATIONS[selectedCountry];
    if (!designation) return;
    if (designation.terminated || designation.date === null) {
      setResult('terminated');
      return;
    }
    const end = new Date(designation.date + 'T00:00:00');
    const start = new Date(approvalDate + 'T00:00:00');
    const diffMs = end.getTime() - start.getTime();
    const days = Math.round(diffMs / (1000 * 60 * 60 * 24));
    setDaysUntil(days);
    setEndDate(formatDate(designation.date));
    if (days < 90) setResult('act');
    else if (days <= 180) setResult('coming');
    else setResult('good');
  }

  async function handleEmailSubmit(type: 'notify' | 'remind') {
    if (!email.trim()) return;
    const designation = TPS_DESIGNATIONS[selectedCountry];
    const { error } = await supabase.from('status_reminders').insert({
      email: email.trim(),
      country: selectedCountry,
      reminder_type: type,
      designation_end_date: designation?.date ?? null,
    });
    if (error) {
      setSubmitError(true);
      return;
    }
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="bg-primary text-primary-foreground sticky top-0 z-30 shadow-md">
        <div
          className="max-w-5xl mx-auto px-4 flex items-center justify-between"
          style={{ minHeight: '68px' }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity font-bold"
            style={{ fontSize: '1.4rem' }}
          >
            <Logo size={36} />
            <span style={{ fontFamily: "'Source Serif 4', serif" }}>{s.toolName}</span>
          </button>
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT SECTION */}
          <div className="bg-card rounded-2xl p-7" style={{ border: '2px solid #E5E7EB' }}>
            <h2
              className="font-bold text-foreground mb-2"
              style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.75rem' }}
            >
              {s.checkerTitle}
            </h2>
            <p className="text-foreground mb-6" style={{ fontSize: '1.05rem' }}>
              {s.checkerSubtitle}
            </p>

            <div className="space-y-5">
              <div>
                <label
                  className="block font-bold text-foreground mb-2"
                  style={{ fontSize: '1.1rem' }}
                >
                  {s.checkerCountryLabel}
                </label>
                <CountryPicker
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  placeholder={s.selectPlaceholder}
                  countries={COUNTRIES}
                />
              </div>
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: '#FEF08A', border: '2px solid #FDE68A', borderLeft: '4px solid #F59E0B' }}
              >
                <div className="flex items-start gap-3">
                  <Lightbulb size={28} className="shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                  <p className="text-foreground leading-relaxed" style={{ fontSize: '1.05rem' }}>
                    {linkify(s.checkerDisclaimer)}
                  </p>
                </div>
              </div>
              <div>
                <label
                  className="block font-bold text-foreground mb-2"
                  style={{ fontSize: '1.1rem' }}
                >
                  {s.checkerDateLabel}
                </label>
                <input
                  type="date"
                  value={approvalDate}
                  onChange={(e) => setApprovalDate(e.target.value)}
                  className="w-full bg-white rounded-xl outline-none text-foreground"
                  style={{
                    border: '2px solid #E5E7EB',
                    padding: '14px 16px',
                    fontSize: '1.05rem',
                  }}
                />
                <p className="mt-2" style={{ fontSize: '0.9rem', color: '#6B7280' }}>
                  {s.checkerDateHelper}
                </p>
              </div>
              <button
                onClick={handleCheck}
                disabled={!selectedCountry || !approvalDate}
                className="w-full text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#22C55E', padding: '16px 24px', fontSize: '1.2rem' }}
              >
                {s.checkerBtn}
              </button>
            </div>

            {result === 'act' && (
              <div
                className="mt-6 bg-card rounded-2xl p-5"
                style={{ border: '2px solid #E5E7EB', borderLeft: '6px solid #C41E3A' }}
              >
                <p className="font-bold text-foreground mb-2" style={{ fontSize: '1.3rem' }}>
                  {s.resultActNowTitle}
                </p>
                <p className="text-foreground mb-4" style={{ fontSize: '1.05rem' }}>
                  {linkify(s.resultActNowBody)}
                </p>
                <button
                  onClick={onContinue}
                  className="text-white font-bold rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#22C55E', padding: '14px 20px', fontSize: '1.1rem' }}
                >
                  {s.resultActNowBtn}
                </button>
              </div>
            )}

            {result === 'coming' && (
              <div
                className="mt-6 bg-card rounded-2xl p-5"
                style={{ border: '2px solid #E5E7EB', borderLeft: '6px solid #F97316' }}
              >
                <p className="font-bold text-foreground mb-2" style={{ fontSize: '1.3rem' }}>
                  {s.resultComingTitle}
                </p>
                <p className="text-foreground mb-4" style={{ fontSize: '1.05rem' }}>
                  {linkify(s.resultComingBody(daysUntil))}
                </p>
                {submitted ? (
                  <p className="font-bold" style={{ color: '#22C55E', fontSize: '1.05rem' }}>
                    {s.thanksNotify}
                  </p>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSubmitError(false);
                      }}
                      placeholder={s.emailPlaceholder}
                      className="flex-1 bg-white rounded-xl outline-none text-foreground"
                      style={{ border: '2px solid #E5E7EB', padding: '12px 16px', fontSize: '1rem' }}
                    />
                    <button
                      type="button"
                      data-coming-soon="true"
                      className="font-bold text-white rounded-xl whitespace-nowrap hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#22C55E', padding: '12px 20px', fontSize: '1rem' }}
                    >
                      {s.notifyBtn}
                    </button>
                  </div>
                )}
                {submitError && (
                  <p className="mt-2 font-bold" style={{ color: '#C41E3A', fontSize: '0.95rem' }}>
                    {lang === 'es' ? 'Algo salió mal. Inténtalo de nuevo.' : 'Something went wrong. Please try again.'}
                  </p>
                )}
              </div>
            )}

            {result === 'good' && (
              <div
                className="mt-6 bg-card rounded-2xl p-5"
                style={{ border: '2px solid #E5E7EB', borderLeft: '6px solid #22C55E' }}
              >
                <p className="font-bold text-foreground mb-2" style={{ fontSize: '1.3rem' }}>
                  {s.resultGoodTitle}
                </p>
                <p className="text-foreground mb-4" style={{ fontSize: '1.05rem' }}>
                  {linkify(s.resultGoodBody(endDate))}
                </p>
                {submitted ? (
                  <p className="font-bold" style={{ color: '#22C55E', fontSize: '1.05rem' }}>
                    {s.thanksRemind}
                  </p>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSubmitError(false);
                      }}
                      placeholder={s.emailPlaceholder}
                      className="flex-1 bg-white rounded-xl outline-none text-foreground"
                      style={{ border: '2px solid #E5E7EB', padding: '12px 16px', fontSize: '1rem' }}
                    />
                    <button
                      type="button"
                      data-coming-soon="true"
                      className="font-bold text-white rounded-xl whitespace-nowrap hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#22C55E', padding: '12px 20px', fontSize: '1rem' }}
                    >
                      {s.remindBtn}
                    </button>
                  </div>
                )}
                {submitError && (
                  <p className="mt-2 font-bold" style={{ color: '#C41E3A', fontSize: '0.95rem' }}>
                    {lang === 'es' ? 'Algo salió mal. Inténtalo de nuevo.' : 'Something went wrong. Please try again.'}
                  </p>
                )}
              </div>
            )}

            {result === 'terminated' && (
              <div
                className="mt-6 bg-card rounded-2xl p-5"
                style={{ border: '2px solid #E5E7EB', borderLeft: '6px solid #6B7280' }}
              >
                <p className="font-bold text-foreground mb-2" style={{ fontSize: '1.3rem' }}>
                  {s.resultTerminatedTitle}
                </p>
                <p className="text-foreground mb-4" style={{ fontSize: '1.05rem' }}>
                  {linkify(s.resultTerminatedBody(selectedCountry))}
                </p>
                <button
                  onClick={onContinue}
                  className="text-white font-bold rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#22C55E', padding: '14px 20px', fontSize: '1.1rem' }}
                >
                  {s.resultActNowBtn}
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SECTION */}
          <div>
            <div className="bg-card rounded-2xl p-7 mb-5" style={{ border: '2px solid #E5E7EB' }}>
              <h2
                className="font-bold text-foreground mb-3"
                style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.75rem' }}
              >
                {s.whatIsTpsTitle}
              </h2>
              <p className="text-foreground" style={{ fontSize: '1.05rem' }}>
                {linkify(s.whatIsTpsBody)}
              </p>
            </div>

            <div
              className="bg-card rounded-2xl p-6 mb-5"
              style={{ border: '2px solid #1E3A5F' }}
            >
              <p
                className="font-bold text-foreground mb-4"
                style={{ fontSize: '1.15rem', color: '#1E3A5F' }}
              >
                {s.findDateTitle}
              </p>
              <ul className="space-y-3">
                {[s.findDateItem1, s.findDateItem2, s.findDateItem3].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-foreground"
                    style={{ fontSize: '1rem' }}
                  >
                    <CheckCircle
                      size={20}
                      className="shrink-0 mt-0.5"
                      style={{ color: '#1E3A5F' }}
                    />
                    <span>{linkify(item)}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://myaccount.uscis.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 font-bold underline"
                style={{ color: '#22C55E', fontSize: '1.05rem' }}
              >
                {s.uscisAccountLink}
              </a>
            </div>

            <button
              onClick={onViewAll}
              className="font-bold hover:opacity-70 transition-opacity"
              style={{ color: '#1E3A5F', fontSize: '1.05rem' }}
            >
              {s.viewAllLink}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
