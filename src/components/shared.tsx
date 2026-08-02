import { useState, type ReactNode } from 'react';
import {
  ChevronDown,
  Globe,
  Lightbulb,
  Clock,
} from 'lucide-react';
import { STRINGS, COUNTRIES, type Lang } from '@/content';
import { linkify } from '@/lib/linkify';

export function Logo({ size = 80 }: { size?: number }) {
  return (
    <img
      src="/logo.png"
      alt="MiEstatus cardinal shield logo"
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}

export function TipBox({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        backgroundColor: '#FEF08A',
        border: '2px solid #FDE68A',
        borderLeft: '4px solid #F59E0B',
      }}
    >
      <div className="flex items-start gap-3">
        <Lightbulb size={28} className="shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
        <div className="flex-1">
          <p className="font-bold mb-1" style={{ fontSize: '1.15rem', color: '#1E3A5F' }}>
            {label}
          </p>
          <div className="text-foreground leading-relaxed" style={{ fontSize: '1.05rem' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Disclaimer({ lang }: { lang: Lang }) {
  const s = STRINGS[lang];
  return (
    <div
      className="rounded-2xl px-5 py-4"
      style={{ backgroundColor: '#FEF08A', border: '2px solid #FDE68A', borderLeft: '4px solid #F59E0B' }}
    >
      <div className="flex items-start gap-3">
        <Lightbulb size={28} className="shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
        <div style={{ color: '#1E3A5F' }}>
          <p className="font-bold text-lg leading-snug">{s.disclaimerLine1}</p>
          <p className="text-base leading-snug mt-0.5">{s.disclaimerLine2}</p>
        </div>
      </div>
    </div>
  );
}

export function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full font-bold shadow-md hover:bg-primary/90 transition-all active:scale-95"
      style={{ padding: '12px 22px', fontSize: '18px', minHeight: '52px' }}
      aria-label="Switch language"
    >
      <Globe size={22} />
      <span>{lang === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
}

export function NavBar({
  lang,
  current,
  onHome,
  onDashboard,
  onGuide,
}: {
  lang: Lang;
  current: 'dashboard' | 'form';
  onHome: () => void;
  onDashboard: () => void;
  onGuide: () => void;
}) {
  const s = STRINGS[lang];
  const items: { label: string; active: boolean; onClick: () => void }[] = [
    { label: s.navHome, active: false, onClick: onHome },
    { label: s.navDashboard, active: current === 'dashboard', onClick: onDashboard },
    { label: s.navGuide, active: current === 'form', onClick: onGuide },
  ];
  return (
    <nav className="flex gap-1">
      {items.map((it) => (
        <button
          key={it.label}
          onClick={it.onClick}
          className={`font-bold rounded-lg transition-colors ${
            it.active
              ? 'bg-white/20 text-primary-foreground'
              : 'text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground'
          }`}
          style={{ padding: '8px 14px', fontSize: '0.95rem' }}
        >
          {it.label}
        </button>
      ))}
    </nav>
  );
}

export function CountryPicker({
  value,
  onChange,
  placeholder,
  countries,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  countries: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-background border-2 border-border rounded-xl text-foreground font-bold focus:outline-none focus:ring-4 focus:ring-primary/30"
        style={{ padding: '18px 18px', fontSize: '1.25rem' }}
      >
        <span style={{ color: value ? '#1F2328' : '#57606A' }}>{value || placeholder}</span>
        <ChevronDown
          size={26}
          className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div
          className="absolute z-50 w-full bg-card rounded-2xl shadow-xl overflow-y-auto"
          style={{ border: '2px solid #E5E7EB', marginTop: '6px', maxHeight: '340px' }}
        >
          {countries.map((c, i) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                onChange(c);
                setOpen(false);
              }}
              className="w-full text-left font-bold text-foreground hover:bg-muted transition-colors"
              style={{
                padding: '18px 20px',
                fontSize: '1.25rem',
                borderBottom: i < countries.length - 1 ? '1px solid #E5E7EB' : 'none',
                backgroundColor: value === c ? '#EFF6FF' : undefined,
                color: value === c ? '#1E3A5F' : undefined,
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function EmailSignup({ lang }: { lang: Lang }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isEn = lang === 'en';
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-3">
      {submitted ? (
        <p className="font-bold" style={{ color: '#22C55E', fontSize: '1rem' }}>
          {isEn ? 'Thanks! We will notify you when it launches.' : '¡Gracias! Te notificaremos cuando se lance.'}
        </p>
      ) : (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isEn ? 'Enter your email to be notified' : 'Ingresa tu correo para ser notificado'}
            className="flex-1 bg-white rounded-xl outline-none text-foreground"
            style={{ border: '2px solid #E5E7EB', padding: '12px 16px', fontSize: '1rem' }}
          />
          <button
            type="button"
            data-coming-soon="true"
            className="font-bold text-white rounded-xl whitespace-nowrap hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#22C55E', padding: '12px 20px', fontSize: '1rem' }}
          >
            {isEn ? 'Notify me' : 'Notificarme'}
          </button>
        </>
      )}
    </div>
  );
}

export function ComingSoonModal({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const isEn = lang === 'en';
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center animate-in"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl shadow-2xl mx-5 max-w-sm w-full text-center relative"
        style={{ border: '2px solid #1E3A5F', padding: '28px 24px 24px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={isEn ? 'Close' : 'Cerrar'}
          className="absolute font-bold rounded-full flex items-center justify-center transition-colors hover:bg-muted"
          style={{ top: 10, right: 10, width: 32, height: 32, color: '#57606A' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>
        <div className="flex justify-center mb-4">
          <div
            className="rounded-full flex items-center justify-center"
            style={{ width: 56, height: 56, backgroundColor: '#1E3A5F' }}
          >
            <Clock size={28} style={{ color: '#ffffff' }} />
          </div>
        </div>
        <h2
          className="font-bold mb-2"
          style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.5rem', color: '#1E3A5F' }}
        >
          {isEn ? 'Coming Soon' : 'Próximamente'}
        </h2>
        <p className="text-foreground mb-5 leading-relaxed" style={{ fontSize: '1rem' }}>
          {isEn
            ? 'This feature is not available yet. We are working hard to bring it to you soon.'
            : 'Esta función aún no está disponible. Estamos trabajando para traértela pronto.'}
        </p>
        <button
          onClick={onClose}
          className="w-full text-white font-bold rounded-xl transition-opacity hover:opacity-90 active:scale-95"
          style={{ backgroundColor: '#22C55E', padding: '14px 24px', fontSize: '1.1rem' }}
        >
          {isEn ? 'Got it' : 'Entendido'}
        </button>
      </div>
    </div>
  );
}

export function ArrowLeftLocal() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
