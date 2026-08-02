import { useState, useEffect } from 'react';
import { STRINGS, type Lang } from '@/content';
import { ComingSoonModal } from '@/components/shared';
import { Landing } from '@/screens/Landing';
import { Dashboard } from '@/screens/Dashboard';
import { StatusChecker } from '@/screens/StatusChecker';
import { FormGuide } from '@/screens/FormGuide';

type Screen = 'landing' | 'checker' | 'dashboard' | 'form';

export default function App() {
  const [lang, setLang] = useState<Lang>('es');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [screen, setScreen] = useState<Screen>('landing');
  const [country, setCountry] = useState('');
  const [findAsc, setFindAsc] = useState(false);
  const [findPreparer, setFindPreparer] = useState(false);
  const [findAttorney, setFindAttorney] = useState(false);
  const [findTranslator, setFindTranslator] = useState(false);
  const [findI821, setFindI821] = useState(false);

  const goDashboard = (asc = false) => {
    setFindAsc(asc);
    setFindPreparer(false);
    setFindAttorney(false);
    setFindTranslator(false);
    setFindI821(false);
    setScreen('dashboard');
  };

  const goDashboardI821 = () => {
    setFindAsc(false);
    setFindPreparer(false);
    setFindAttorney(false);
    setFindTranslator(false);
    setFindI821(true);
    setScreen('dashboard');
  };

  const goDashboardPreparer = () => {
    setFindPreparer(true);
    setFindAsc(false);
    setFindAttorney(false);
    setFindTranslator(false);
    setScreen('dashboard');
  };

  const goDashboardAttorney = () => {
    setFindAttorney(true);
    setFindAsc(false);
    setFindPreparer(false);
    setFindTranslator(false);
    setScreen('dashboard');
  };

  const goDashboardTranslator = () => {
    setFindTranslator(true);
    setFindAsc(false);
    setFindPreparer(false);
    setFindAttorney(false);
    setScreen('dashboard');
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest('[data-coming-soon]') as HTMLElement | null;
      if (el) {
        e.preventDefault();
        e.stopPropagation();
        setShowComingSoon(true);
      }
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  return (
    <>
      {showComingSoon && <ComingSoonModal lang={lang} onClose={() => setShowComingSoon(false)} />}
      {screen === 'landing' && (
        <Landing
          lang={lang}
          setLang={setLang}
          country={country}
          setCountry={setCountry}
          onStart={() => goDashboard()}
        />
      )}
      {screen === 'checker' && (
        <StatusChecker
          lang={lang}
          setLang={setLang}
          country={country}
          onContinue={() => goDashboardI821()}
          onBack={() => setScreen('landing')}
          onViewAll={() => goDashboard()}
        />
      )}
      {screen === 'dashboard' && (
        <Dashboard
          lang={lang}
          setLang={setLang}
          onFormClick={() => setScreen('form')}
          onHome={() => setScreen('landing')}
          country={country}
          scrollToAsc={findAsc}
          scrollToPreparer={findPreparer}
          scrollToAttorney={findAttorney}
          scrollToTranslator={findTranslator}
          scrollToI821={findI821}
          onCheckStatus={() => setScreen('checker')}
        />
      )}
      {screen === 'form' && (
        <FormGuide
          lang={lang}
          setLang={setLang}
          onBack={() => goDashboard()}
          onHome={() => setScreen('landing')}
          onDashboard={() => goDashboard()}
          onFindAsc={() => goDashboard(true)}
          onFindPreparer={goDashboardPreparer}
          onFindAttorney={goDashboardAttorney}
          onFindTranslator={goDashboardTranslator}
        />
      )}
    </>
  );
}
