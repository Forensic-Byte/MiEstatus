import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { STRINGS, COUNTRIES, type Lang } from '@/content';
import { Logo, Disclaimer, LangToggle, CountryPicker } from '@/components/shared';

export function Landing({
  lang,
  setLang,
  country,
  setCountry,
  onStart,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  country: string;
  setCountry: (c: string) => void;
  onStart: () => void;
}) {
  const s = STRINGS[lang];
  const [error, setError] = useState(false);
  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="flex justify-end items-center gap-3 p-4">
        <LangToggle lang={lang} setLang={setLang} />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-5 text-center pb-10">
        <div className="mb-6">
          <Logo size={96} />
        </div>
        <h1
          className="font-bold tracking-tight text-foreground mb-4"
          style={{ fontFamily: "'Source Serif 4', serif", fontSize: 'clamp(3rem, 10vw, 5rem)' }}
        >
          {s.toolName}
        </h1>
        <p
          className="text-foreground font-medium max-w-sm leading-relaxed mb-10"
          style={{ fontSize: '1.25rem' }}
        >
          {s.tagline}
        </p>
        <div className="bg-card border-2 border-border rounded-3xl shadow-md p-7 w-full max-w-sm space-y-5">
          <div>
            <label className="block font-bold text-foreground mb-2" style={{ fontSize: '1.1rem' }}>
              {s.pickCountry}
            </label>
            <CountryPicker
              value={country}
              onChange={(c) => {
                setCountry(c);
                setError(false);
              }}
              placeholder={s.selectPlaceholder}
              countries={COUNTRIES}
            />
            {error && (
              <p
                className="font-bold mt-2"
                style={{ fontSize: '1rem', color: '#C41E3A' }}
              >
                {s.selectError}
              </p>
            )}
          </div>
          <div>
            <label className="block font-bold text-foreground mb-2" style={{ fontSize: '1.1rem' }}>
              {s.idioma}
            </label>
            <div className="flex rounded-xl border-2 border-border overflow-hidden">
              {(['es', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex-1 font-bold transition-colors ${
                    lang === l ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-muted'
                  }`}
                  style={{ padding: '14px 8px', fontSize: '1.1rem' }}
                >
                  {l === 'es' ? 'Español' : 'English'}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              if (!country) {
                setError(true);
                return;
              }
              onStart();
            }}
            className="w-full bg-accent text-accent-foreground font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-accent/90 transition-all active:scale-95 shadow-sm"
            style={{ padding: '18px 24px', fontSize: '1.25rem' }}
          >
            {s.getStarted}
            <ArrowRight size={24} />
          </button>
          <Disclaimer lang={lang} />
        </div>
      </div>
    </div>
  );
}
