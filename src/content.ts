import {
  Calendar,
  FileText,
  Newspaper,
  Languages,
  MapPin,
  Car,
  Briefcase,
  Plane,
  Scale,
  Landmark,
  HelpCircle,
  ShieldAlert,
  UserCheck,
  Search,
  type LucideIcon,
} from 'lucide-react';

export type Lang = 'es' | 'en';

export const COUNTRIES = [
  'El Salvador',
  'Lebanon',
  'Somalia',
  'Sudan',
  'Ukraine',
];

export const COUNTRY_FLAGS: Record<string, string> = {
  'El Salvador': '🇸🇻',
  Lebanon: '🇱🇧',
  Somalia: '🇸🇴',
  Sudan: '🇸🇩',
  Ukraine: '🇺🇦',
};

export type Strings = {
  toolName: string;
  tagline: string;
  pickCountry: string;
  getStarted: string;
  selectPlaceholder: string;
  dashSubtitle: (country: string) => string;
  dashSubtitleText: string;
  tabAll: string;
  tabForms: string;
  tabNews: string;
  tabDeadlines: string;
  tabResources: string;
  tabPreparer: string;
  learnMore: string;
  formExplainer: string;
  back: string;
  formTitle: string;
  formSubtitle: string;
  formIntro: string;
  stepLabel: string;
  whatYouNeed: string;
  tip: string;
  importantNote: string;
  nextStep: string;
  allDone: string;
  urgentTitle: string;
  urgentBody: string;
  formCTATitle: string;
  formCTABody: string;
  formCTABtn: string;
  attorneyNote: string;
  attorneyNoteNav: string;
  disclaimerLine1: string;
  disclaimerLine2: string;
  idioma: string;
  urgent: string;
  selectError: string;
  // Status Checker page
  checkerTitle: string;
  checkerSubtitle: string;
  checkerCountryLabel: string;
  checkerDateLabel: string;
  checkerDateHelper: string;
  checkerBtn: string;
  resultActNowTitle: string;
  resultActNowBody: string;
  resultActNowBtn: string;
  resultComingTitle: string;
  resultComingBody: (days: number) => string;
  resultGoodTitle: string;
  resultGoodBody: (date: string) => string;
  emailPlaceholder: string;
  notifyBtn: string;
  remindBtn: string;
  thanksNotify: string;
  thanksRemind: string;
  whatIsTpsTitle: string;
  whatIsTpsBody: string;
  findDateTitle: string;
  findDateItem1: string;
  findDateItem2: string;
  findDateItem3: string;
  uscisAccountLink: string;
  viewAllLink: string;
  navHome: string;
  navDashboard: string;
  navGuide: string;
  // Status Checker disclaimer + terminated result
  checkerDisclaimer: string;
  checkerDisclaimerLink: string;
  resultTerminatedTitle: string;
  resultTerminatedBody: (country: string) => string;
  placeholderAlert: (country: string) => string;
  placeholderForms: (country: string) => string;
  placeholderDeadlines: (country: string) => string;
  placeholderNews: (country: string) => string;
};

export const STRINGS: Record<Lang, Strings> = {
  es: {
    toolName: 'MiEstatus',
    tagline: 'Simplificando el camino de inmigración.',
    pickCountry: 'Selecciona tu país',
    getStarted: 'Comenzar',
    selectPlaceholder: 'Selecciona un país',
    dashSubtitle: (c) => `Actualizaciones para ${c}`,
    dashSubtitleText: 'Actualizaciones recientes y recursos importantes para tu caso.',
    tabAll: 'Todo',
    tabForms: 'Formularios',
    tabNews: 'Noticias',
    tabDeadlines: 'Fechas Clave',
    tabResources: 'Recursos',
    tabPreparer: 'Buscar un Preparador',
    learnMore: 'Ver más',
    formExplainer: 'Explicar este formulario',
    back: '← Regresar',
    formTitle: 'Formulario I-821',
    formSubtitle: 'Estatus de Protección Temporal (TPS)',
    formIntro:
      'Este formulario es para personas de países afectados por desastres o conflictos. El TPS te permite quedarte legalmente en los EE.UU. de forma temporal.',
    stepLabel: 'Paso',
    whatYouNeed: 'Lo que necesitas',
    tip: 'Consejo',
    importantNote: '⚠️ Nota Importante',
    nextStep: 'Siguiente paso →',
    allDone: '🎉 ¡Terminaste! Recuerda guardar copias de todo.',
    urgentTitle: 'Acción requerida',
    urgentBody: 'Ejemplo de Alerta: Este banner muestra cómo se ve un aviso urgente de acción requerida. Las alertas reales aparecerán aquí cuando USCIS haga anuncios sensibles al tiempo. — Solo marcador de posición.',
    formCTATitle: '¿Tu estatus de protección necesita renovarse?',
    formCTABody: 'Verifica tu caso gratis, paso a paso',
    formCTABtn: 'Verificar →',
    attorneyNote:
      'Esta guía es educativa. Para tu caso específico, consulta con un abogado de inmigración.',
    attorneyNoteNav: 'abogado de inmigración',
    disclaimerLine1: 'Información gratuita, en tu idioma.',
    disclaimerLine2: 'No somos abogados ni parte del gobierno.',
    idioma: 'Idioma',
    urgent: '🔴 Urgente',
    selectError: 'Por favor selecciona tu país',
    checkerTitle: 'Revisa tu estado de TPS',
    checkerSubtitle: 'Responde dos preguntas rápidas para saber si tu estado necesita ser renovado.',
    checkerCountryLabel: 'Tu país de origen:',
    checkerDateLabel: '¿Cuándo fue aprobado o renovado tu TPS por última vez?',
    checkerDateHelper: 'Puedes encontrar esta fecha en tu tarjeta EAD o en tu aviso de aprobación de USCIS (Formulario I-797)',
    checkerBtn: 'Revisar mi estado',
    resultActNowTitle: 'Actúa Ahora ⚠️',
    resultActNowBody: 'Tu estado de TPS vence pronto. El período de re-registro está abierto ahora. Comienza tu renovación I-821 inmediatamente para proteger tu estado.',
    resultActNowBtn: 'Comenzar mi renovación I-821 →',
    resultComingTitle: 'Se acerca la fecha',
    resultComingBody: (days) => `Tu estado de TPS vence en ${days} días. El re-registro generalmente abre 60 días antes de la fecha límite. Regístrate abajo para recibir una notificación cuando sea momento de renovar.`,
    resultGoodTitle: 'Todo está bien por ahora ✅',
    resultGoodBody: (date) => `Tu estado de TPS está vigente. La fecha de finalización de tu designación es ${date}. Te enviaremos un recordatorio cuando sea momento de renovar.`,
    emailPlaceholder: 'Ingresa tu correo',
    notifyBtn: 'Notificarme',
    remindBtn: 'Recuérdame',
    thanksNotify: '¡Gracias! Te notificaremos cuando sea momento de renovar.',
    thanksRemind: '¡Gracias! Te enviaremos un recordatorio cuando sea momento de renovar.',
    whatIsTpsTitle: '¿Qué es el TPS?',
    whatIsTpsBody: 'El Estatus de Protección Temporal (TPS) protege a personas de ciertos países de ser deportadas de los Estados Unidos. Debe renovarse regularmente para mantenerse activo.',
    findDateTitle: '¿No estás seguro de dónde encontrar tu fecha de aprobación?',
    findDateItem1: 'Revisa tu tarjeta EAD (permiso de trabajo) — la fecha de vencimiento está en el frente',
    findDateItem2: 'Revisa tu aviso de aprobación Formulario I-797 de USCIS',
    findDateItem3: 'Revisa tu cuenta en línea de USCIS en uscis.gov',
    uscisAccountLink: 'Ir a la cuenta en línea de USCIS →',
    viewAllLink: '← Ver todas las actualizaciones y recursos de TPS',
    navHome: 'Inicio',
    navDashboard: 'Panel',
    navGuide: 'Guía I-821',
    checkerDisclaimer: '⚠️ Atención: Algunas de estas fechas son fechas límite temporales extendidas por orden judicial, no fechas oficiales de finalización de designación. Cambian con frecuencia debido a demandas en curso. Siempre verifica el estado actual de tu país en uscis.gov/tps antes de tomar cualquier decisión.',
    checkerDisclaimerLink: 'Verificar en USCIS.gov →',
    resultTerminatedTitle: 'Designación Terminada',
    resultTerminatedBody: (country) => `La designación de TPS para ${country} ha sido terminada, pero tu estatus sigue vigente por ahora. Consulta con un abogado de inmigración para entender tus opciones.`,
    placeholderAlert: (country) => `Mantente informado — las actualizaciones de TPS para ${country} aparecerán aquí a medida que USCIS las anuncie.`,
    placeholderForms: (country) => `Los formularios e instrucciones de TPS específicos para ${country} llegarán pronto. Visita uscis.gov/tps para información actual.`,
    placeholderDeadlines: (country) => `El seguimiento de fechas límite para ${country} llegará pronto. Consulta uscis.gov/tps para las fechas de re-registro actuales.`,
    placeholderNews: (country) => `Las noticias y actualizaciones específicas para ${country} llegarán pronto. Para los últimos anuncios visita uscis.gov/newsroom.`,
  },
  en: {
    toolName: 'MiEstatus',
    tagline: 'Simplifying the immigration journey.',
    pickCountry: 'Select your country',
    getStarted: 'Get Started',
    selectPlaceholder: 'Choose a country',
    dashSubtitle: (c) => `Updates for ${c}`,
    dashSubtitleText: 'Recent updates and important resources for your case.',
    tabAll: 'All',
    tabForms: 'Forms',
    tabNews: 'News',
    tabDeadlines: 'Key Dates',
    tabResources: 'Resources',
    tabPreparer: 'Find a Preparer',
    learnMore: 'Learn more',
    formExplainer: 'Explain this form',
    back: '← Go back',
    formTitle: 'Form I-821',
    formSubtitle: 'Temporary Protected Status (TPS)',
    formIntro:
      'This form is for people from countries affected by disasters or conflict. TPS allows you to remain legally in the US on a temporary basis.',
    stepLabel: 'Step',
    whatYouNeed: 'What you need',
    tip: 'Tip',
    importantNote: '⚠️ Important Note',
    nextStep: 'Next step →',
    allDone: '🎉 All done! Remember to keep copies of everything.',
    urgentTitle: 'Action Required',
    urgentBody: 'Example Alert: This banner shows what an urgent action required notice looks like. Real alerts will appear here when USCIS makes time-sensitive announcements. — Placeholder only.',
    formCTATitle: 'Check if your protection status needs to be renewed',
    formCTABody: 'Verify your case free, step by step',
    formCTABtn: 'Check now →',
    attorneyNote:
      'This guide is educational. For your specific case, consult an immigration attorney.',
    attorneyNoteNav: 'immigration attorney',
    disclaimerLine1: 'Free information, in your language.',
    disclaimerLine2: 'We are not lawyers or part of the government.',
    idioma: 'Language',
    urgent: '🔴 Urgent',
    selectError: 'Please select your country first',
    checkerTitle: 'Check Your TPS Status',
    checkerSubtitle: 'Answer two quick questions to find out if your status needs to be renewed.',
    checkerCountryLabel: 'Your country of origin:',
    checkerDateLabel: 'When was your TPS last approved or renewed?',
    checkerDateHelper: 'You can find this date on your EAD card or your USCIS approval notice (Form I-797)',
    checkerBtn: 'Check My Status',
    resultActNowTitle: 'Act Now ⚠️',
    resultActNowBody: 'Your TPS status expires soon. The re-registration period is open now. Start your I-821 renewal immediately to protect your status.',
    resultActNowBtn: 'Start My I-821 Renewal →',
    resultComingTitle: 'Coming Up Soon',
    resultComingBody: (days) => `Your TPS status expires in ${days} days. Re-registration typically opens 60 days before the deadline. Sign up below to get notified when it is time to renew.`,
    resultGoodTitle: "You're Good For Now ✅",
    resultGoodBody: (date) => `Your TPS status is current. Your designation end date is ${date}. We will send you a reminder when it is time to renew.`,
    emailPlaceholder: 'Enter your email',
    notifyBtn: 'Notify Me',
    remindBtn: 'Remind Me',
    thanksNotify: 'Thanks! We will notify you when it is time to renew.',
    thanksRemind: 'Thanks! We will send you a reminder when it is time to renew.',
    whatIsTpsTitle: 'What is TPS?',
    whatIsTpsBody: 'Temporary Protected Status (TPS) protects people from certain countries from being deported from the United States. It must be renewed regularly to stay active.',
    findDateTitle: 'Not sure where to find your approval date?',
    findDateItem1: 'Check your EAD (work permit card) — the expiration date is on the front',
    findDateItem2: 'Check your Form I-797 approval notice from USCIS',
    findDateItem3: 'Check your USCIS online account at uscis.gov',
    uscisAccountLink: 'Go to USCIS online account →',
    viewAllLink: '← View all TPS updates and resources',
    navHome: 'Home',
    navDashboard: 'Dashboard',
    navGuide: 'I-821 Guide',
    checkerDisclaimer: '⚠️ Heads up: Some of these dates are temporary court-extended deadlines, not official designation end dates. They change frequently due to ongoing lawsuits. Always verify your country\'s current status at uscis.gov/tps before making any decisions.',
    checkerDisclaimerLink: 'Verify on USCIS.gov →',
    resultTerminatedTitle: 'Designation Terminated',
    resultTerminatedBody: (country) => `The TPS designation for ${country} has been terminated, but your status remains in effect for now. Consult with an immigration attorney to understand your options.`,
    placeholderAlert: (country) => `Stay informed — TPS updates for ${country} will appear here as they are announced by USCIS.`,
    placeholderForms: (country) => `TPS forms and instructions specific to ${country} coming soon. Visit uscis.gov/tps for current information.`,
    placeholderDeadlines: (country) => `Deadline tracking for ${country} coming soon. Check uscis.gov/tps for current re-registration deadlines.`,
    placeholderNews: (country) => `News and updates specific to ${country} coming soon. For the latest announcements visit uscis.gov/newsroom.`,
  },
};

export type TpsDesignation = {
  date: string | null;
  note?: string;
  terminated?: boolean;
};

export const TPS_DESIGNATIONS: Record<string, TpsDesignation> = {
  'El Salvador': { date: '2026-09-09' },
  Ethiopia: { date: '2026-07-30', note: 'court-extended' },
  Haiti: { date: '2026-07-27' },
  Honduras: { date: null, terminated: true },
  Lebanon: { date: '2026-11-27' },
  Nepal: { date: null, terminated: true },
  Nicaragua: { date: null, terminated: true },
  Somalia: { date: '2026-07-29', note: 'court-extended' },
  'South Sudan': { date: '2026-07-30', note: 'court-extended' },
  Sudan: { date: '2026-10-19' },
  Syria: { date: '2026-07-27', note: 'court-extended' },
  Ukraine: { date: '2026-10-19' },
  Venezuela: { date: '2026-10-02', note: 'limited subgroup only' },
  'Myanmar (Burma)': { date: '2026-08-03', note: 'court-extended' },
  Yemen: { date: '2026-07-24', note: 'court-extended' },
};

export function tpsUrl(country: string): string {
  const map: Record<string, string> = {
    'El Salvador': 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-countries-and-nationals/temporary-protected-status-el-salvador',
    Ethiopia: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-countries-and-nationals/temporary-protected-status-ethiopia',
    Haiti: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-countries-and-nationals/temporary-protected-status-haiti',
    Honduras: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-countries-and-nationals/temporary-protected-status-honduras',
    Nicaragua: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-countries-and-nationals/temporary-protected-status-nicaragua',
    Venezuela: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-countries-and-nationals/temporary-protected-status-venezuela',
    Ukraine: 'https://www.uscis.gov/humanitarian/temporary-protected-status/TPS-Ukraine',
    'Myanmar (Burma)': 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-countries-and-nationals/temporary-protected-status-myanmar-burma',
    Lebanon: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-country-lebanon',
    Somalia: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-country-somalia',
    Sudan: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-country-sudan',
  };
  return map[country] || 'https://www.uscis.gov/tps';
}

export type UpdateType = 'news' | 'deadline' | 'forms' | 'resources' | 'preparer';

export type UpdateCard = {
  type: UpdateType;
  icon: LucideIcon;
  date: string;
  title: string;
  body: string;
  tag: string;
  urgent: boolean;
  link?: { text: string; url: string; download?: boolean };
  links?: { text: string; url: string }[];
  comingSoon?: boolean;
  learnMoreUrl?: string;
  warning?: boolean;
  bottomLink?: { text: string; url: string };
  emailSignup?: boolean;
  showInNews?: boolean;
  showInAll?: boolean;
  subsections?: { title: string; body: string; collapsible?: boolean; titleLink?: { url: string } }[];
  items?: string[];
  tipBox?: string;
  afterSubsectionsNote?: { text: string; mutedSuffix: string };
  starRating?: boolean;
  mutedNote?: string;
  hideFormButton?: boolean;
  inactiveFormButton?: boolean;
  hideLearnMore?: boolean;
  itemsNav?: { text: string; tab: UpdateType };
  borderColor?: string;
  gif?: { src: string; alt: string };
  noLinkify?: boolean;
};

export const UPDATES: Record<Lang, UpdateCard[]> = {
  es: [
    {
      type: 'news',
      icon: Newspaper,
      date: '22 Jul 2026',
      title: '⚠️ Ejemplo de Alerta Urgente — Marcador de Posición',
      body: 'Este es un ejemplo de cómo se ve una notificación urgente de TPS. Las alertas urgentes reales aparecerán aquí automáticamente cuando USCIS haga anuncios sensibles al tiempo que afecten a los titulares de TPS de El Salvador. Visita uscis.gov/newsroom para las últimas actualizaciones oficiales.',
      tag: 'TPS',
      urgent: true,
      links: [{ text: 'Ver la sala de prensa oficial de USCIS →', url: 'https://www.uscis.gov/newsroom' }],
      mutedNote: 'Esta tarjeta es solo para fines de demostración.',
      learnMoreUrl: 'https://www.uscis.gov/search?query=el+salvador',
      hideLearnMore: true,
      borderColor: '#FCA5A5',
    },
    {
      type: 'news',
      icon: Newspaper,
      date: '17 de enero de 2025',
      title: 'TPS de El Salvador Extendido Hasta Septiembre de 2026',
      body: 'El Departamento de Seguridad Nacional de EE.UU. extendió oficialmente el Estatus de Protección Temporal de El Salvador por 18 meses. Los titulares actuales de TPS están protegidos hasta el 9 de septiembre de 2026 siempre que continúen cumpliendo con los requisitos de elegibilidad.',
      tag: 'Noticias',
      urgent: false,
      items: [
        'TPS extendido del 10 de marzo de 2025 al 9 de septiembre de 2026',
        'Los titulares existentes de TPS deben volver a registrarse para mantener su estatus',
        'Los permisos de trabajo (EADs) con ciertas fechas de vencimiento se extienden automáticamente hasta el 9 de marzo de 2026',
        'Puedes presentar el Formulario I-821 y el Formulario I-765 en línea o por correo',
      ],
      itemsNav: { text: 'por correo', tab: 'forms' },
      links: [{ text: 'Leer el aviso completo →', url: 'https://www.federalregister.gov/documents/2025/01/17/2025-00626/extension-of-the-designation-of-el-salvador-for-temporary-protected-status' }],
      hideLearnMore: true,
    },
    {
      type: 'news',
      icon: Newspaper,
      date: '21 de junio de 2023',
      title: 'Terminación del TPS de El Salvador Revertida — Estatus Restablecido',
      body: 'El Secretario de Seguridad Nacional Alejandro Mayorkas revirtió oficialmente la terminación previa de la designación de TPS de El Salvador y extendió el TPS por 18 meses desde el 10 de septiembre de 2023 hasta el 9 de marzo de 2025.',
      tag: 'Noticias',
      urgent: false,
      items: [
        'La terminación del TPS de El Salvador fue oficialmente cancelada',
        'El TPS fue extendido hasta el 9 de marzo de 2025 y desde entonces ha sido extendido hasta el 9 de septiembre de 2026',
        'Los titulares de TPS pueden usar su tarjeta EAD o el Formulario I-797 como prueba de estatus para beneficios del gobierno y REAL ID',
        'El sistema SAVE puede verificar tu estatus de TPS usando estos documentos',
      ],
      mutedNote: 'Nota: Este artículo ha sido archivado. El TPS de El Salvador ha sido extendido hasta el 9 de septiembre de 2026.',
      links: [{ text: 'Leer el aviso completo →', url: 'https://www.uscis.gov/save/current-user-agencies/news-alerts/save-policy-news-archive/uscis-rescinds-termination-of-el-salvadors-tps-designation-and-extends-tps-el-salvador-for-18-months' }],
      hideLearnMore: true,
    },
    {
      type: 'deadline',
      icon: Calendar,
      date: '',
      title: 'TPS El Salvador — Fecha límite de re-registro',
      body: 'Las fechas límite de re-registro para El Salvador son anunciadas por USCIS cuando el período de re-registro abre. Las fechas cambian frecuentemente — siempre verifica antes de presentar.',
      tag: 'Fecha Límite',
      urgent: false,
      links: [{ text: 'Verifica la fecha límite actual de El Salvador en USCIS.gov →', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-country-el-salvador' }],
      mutedNote: 'Esta información se actualiza regularmente. Siempre verifica antes de presentar.',
      hideLearnMore: true,
    },
    {
      type: 'forms',
      icon: FileText,
      date: '10 Jul 2026',
      title: 'Nueva versión del formulario I-821 publicada',
      body: 'USCIS publicó una nueva edición del formulario I-821 (edición 01/20/25). Solo se aceptará esta versión.\nDescarga el Formulario I-821 gratis →',
      tag: 'Formularios',
      urgent: false,
      link: { text: 'Descarga el Formulario I-821 gratis →', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-821.pdf' },
      noLinkify: true,
    },
    {
      type: 'news',
      icon: Newspaper,
      date: '5 Jul 2026',
      title: 'Clínicas legales gratuitas en Los Ángeles',
      body: 'CARECEN ofrece ayuda gratuita para llenar formularios de TPS los sábados de 9am a 1pm en Los Ángeles, CA.',
      tag: 'Recursos',
      urgent: false,
      showInNews: false,
    },
    {
      type: 'resources',
      icon: Languages,
      date: '',
      title: '¿Necesitas un traductor gratis?',
      body: 'Conecta con un traductor voluntario gratuito para ayudar a certificar tus documentos para tu solicitud. Tarjimly y UnidosUS ofrecen apoyo multilingüe gratuito para inmigrantes.',
      tag: 'Recursos',
      urgent: false,
      links: [
        { text: 'Visita Tarjimly', url: 'https://www.tarjimly.org' },
        { text: 'Visita UnidosUS', url: 'https://www.unidosus.org' },
      ],
      learnMoreUrl: 'https://www.tarjimly.org',
    },
    {
      type: 'resources',
      icon: Languages,
      date: '',
      title: 'Cómo traducir un sitio web en Google Chrome',
      body: '¿No entiendes inglés? Puedes traducir páginas web completas directamente en Google Chrome con un solo clic. Mira la guía animada a continuación para aprender cómo activar la traducción automática.',
      tag: 'Recursos',
      urgent: false,
      gif: { src: '/assets/images/Translate_website.gif', alt: 'Animación mostrando cómo traducir un sitio web en Google Chrome' },
      links: [
        { text: 'Abrir GIF en una página nueva', url: '/assets/images/Translate_website.gif' },
      ],
    },
    {
      type: 'resources',
      icon: Search,
      date: '',
      title: 'Revisa el estado de tu caso en línea',
      body: 'Una vez que recibas tu Aviso de Recibo (Formulario I-797) puedes revisar el estado de tu solicitud en cualquier momento en línea. Necesitarás tu número de recibo que aparece en la parte superior del aviso.',
      tag: 'Recursos',
      urgent: false,
      links: [
        { text: 'Revisar Estado de Caso', url: 'https://egov.uscis.gov/casestatus/landing.do' },
      ],
    },
    {
      type: 'resources',
      icon: MapPin,
      date: '',
      title: 'Encuentra un Centro de Soporte de Solicitudes (ASC) cerca de ti',
      body: 'Los Centros de Soporte de Solicitudes son donde vas para tu cita de biometría para proporcionar tus huellas, foto y firma. Estamos construyendo una herramienta para encontrar tu ASC más cercano automáticamente filtrada por distancia para que siempre sepas a dónde ir.',
      tag: 'Recursos',
      urgent: false,
      comingSoon: true,
      showInAll: false,
    },
    {
      type: 'resources',
      icon: MapPin,
      date: '',
      title: 'Encuentra tu consulado más cercano',
      body: 'Estamos creando una herramienta de mapa para ayudarte a encontrar el consulado u oficina de inmigración más cercano, con horarios e información de contacto.',
      tag: 'Recursos',
      urgent: false,
      comingSoon: true,
    },
    {
      type: 'resources',
      icon: Car,
      date: '',
      title: '¿Necesitas transporte a tu cita?',
      body: 'Estamos trabajando para conectar a usuarios con opciones de transporte gratuito o de bajo costo, incluyendo voluntarios para llevarte a tus citas de inmigración.',
      tag: 'Recursos',
      urgent: false,
      comingSoon: true,
    },
    {
      type: 'forms',
      icon: Briefcase,
      date: '',
      title: 'Formulario I-765 — Documento de Autorización de Empleo (Permiso de Trabajo)',
      body: 'Si tienes TPS, también puedes ser elegible para trabajar legalmente en los Estados Unidos. El Formulario I-765 se puede presentar al mismo tiempo que tu I-821 o por separado después de que tu TPS sea aprobado. Presentar ambos juntos te ayuda a recibir tu permiso de trabajo más rápido.',
      tag: 'Formularios',
      urgent: false,
      comingSoon: true,
      links: [{ text: 'Descarga el Formulario I-765 gratis →', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-765.pdf' }],
      inactiveFormButton: true,
      noLinkify: true,
    },
    {
      type: 'forms',
      icon: Plane,
      date: '',
      title: 'Formulario I-131 — Documento de Viaje (Avance de Parole)',
      body: 'Si tienes TPS y necesitas viajar fuera de los Estados Unidos, debes solicitar un documento de viaje antes de irte. Salir sin uno podría afectar tu capacidad de regresar. El TPS, la autorización de trabajo y los documentos de viaje a menudo se solicitan juntos como un paquete completo.',
      tag: 'Formularios',
      urgent: false,
      comingSoon: true,
      links: [{ text: 'Descarga el Formulario I-131 gratis →', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-131.pdf' }],
      inactiveFormButton: true,
    },
    {
      type: 'deadline',
      icon: Plane,
      date: '',
      title: 'Fecha límite para presentar el Documento de Viaje (Formulario I-131)',
      body: 'Debes solicitar un documento de viaje ANTES de salir de los Estados Unidos si tienes TPS. No hay una fecha límite fija — pero salir sin uno podría impedirte regresar. Solicita lo antes posible.',
      tag: 'Fecha Límite',
      urgent: false,
      comingSoon: true,
      links: [{ text: 'Aprende sobre las fechas límite del Formulario I-131 →', url: 'https://www.uscis.gov/i-131' }],
    },
    {
      type: 'forms',
      icon: Scale,
      date: '',
      title: 'Exenciones — ¿Esto podría aplicarte?',
      body: 'Una exención pide a USCIS que pase por alto ciertos problemas que de otro modo podrían afectar tu solicitud de TPS. Hay dos tipos de exenciones que podrían aplicarte:',
      tag: 'Formularios',
      urgent: false,
      comingSoon: true,
      subsections: [
        {
          title: 'Exención de Motivos de Inadmisibilidad',
          body: 'Si algo en tu historial podría hacerte inelegible para TPS, USCIS aún puede concederte una exención por razones humanitarias, para mantener a tu familia unida, o porque es de interés público. No todo puede ser exento — los motivos penales graves y los asuntos relacionados con la seguridad nacional no pueden ser exentos por ley. Si ya recibiste una exención en una solicitud anterior de TPS para el mismo problema, no necesitas solicitar otra para esa misma situación.',
          collapsible: true,
        },
        {
          title: 'Formulario I-912 — Exención de Tarifas',
          body: 'Si no puedes pagar la tarifa de presentación o la tarifa de servicios biométricos, puedes solicitar una exención de tarifas. Puedes escribir una carta de solicitud o llenar el Formulario I-912. De cualquier manera debes incluir documentación que muestre por qué no puedes pagar las tarifas y explicar por qué mereces el beneficio. Nota: Si se deniega tu solicitud de exención de tarifas, no puedes apelar esa decisión.',
          collapsible: true,
          titleLink: { url: 'https://www.uscis.gov/i-912' },
        },
      ],
      tipBox: 'Consejo: Si crees que algo de esto podría aplicarte, recomendamos encarecidamente hablar con un representante acreditado gratuito antes de presentar tu solicitud. Visita nuestra pestaña Buscar un Preparador para obtener ayuda.',
      afterSubsectionsNote: { text: 'Haz clic aquí para aprender más sobre las exenciones en la página oficial de TPS de USCIS — ', mutedSuffix: 'Próximamente' },
      hideFormButton: true,
    },
    {
      type: 'resources',
      icon: Landmark,
      date: '',
      title: 'Encuentra un abogado de inmigración cerca de ti',
      body: 'Estamos creando un directorio de abogados de inmigración verificados y representantes acreditados cerca de ti. Los resultados se filtrarán automáticamente por distancia con los precios mostrados de menor a mayor. Cada listado incluirá una calificación de 5 estrellas de clientes reales. Los abogados pro bono (gratuitos) serán claramente etiquetados y listados primero. Sin falsos notarios, sin estafas — solo profesionales legales verificados.',
      tag: 'Recursos',
      urgent: false,
      comingSoon: true,
      starRating: true,
      emailSignup: true,
    },
    {
      type: 'preparer',
      icon: HelpCircle,
      date: '',
      title: '¿Qué es un preparador de formularios de inmigración?',
      body: 'Un preparador de formularios es alguien que te ayuda a llenar correctamente tus formularios de inmigración. NO es un abogado, pero puede ayudar a asegurar que tus formularios estén completos y exactos. Usar un preparador de confianza puede ahorrarte tiempo y ayudar a evitar errores costosos.',
      tag: 'Recursos',
      urgent: false,
    },
    {
      type: 'preparer',
      icon: UserCheck,
      date: '',
      title: 'Encuentra un preparador verificado cerca de ti',
      body: 'Estamos creando una herramienta para ayudarte a encontrar preparadores de formularios de inmigración legítimos y verificados, y representantes acreditados cerca de ti — gratis o a bajo costo. Sin estafas, sin falsos notarios, solo ayuda real de personas de confianza.',
      tag: 'Recursos',
      urgent: false,
      comingSoon: true,
      emailSignup: true,
    },
    {
      type: 'preparer',
      icon: ShieldAlert,
      date: '',
      title: 'Advertencia: Cuidado con el Fraude de Notarios',
      body: 'En muchos países latinoamericanos un notario público es un profesional legal poderoso. En los Estados Unidos un notario público NO es abogado y no puede dar asesoría legal ni ayudar con casos de inmigración. Muchas personas en comunidades inmigrantes han sido estafadas por falsos notarios que cobran grandes tarifas y presentan trámites incorrectos o fraudulentos. Esto puede resultar en deportación, prohibiciones de reingreso y pérdida de dinero. Siempre verifica con quién estás trabajando antes de pagarle a alguien por ayuda con tu caso de inmigración.',
      tag: '⚠️ Importante',
      urgent: false,
      warning: true,
      links: [
        { text: 'Reporta las estafas de inmigración a la FTC →', url: 'https://www.ftc.gov/immigration' },
        { text: 'Encuentra un representante acreditado del DOJ →', url: 'https://www.justice.gov/eoir/recognition-and-accreditation-program' },
        { text: 'Aprende sobre las estafas de inmigración en USCIS.gov →', url: 'https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/common-scams' },
      ],
    },
  ],
  en: [
    {
      type: 'news',
      icon: Newspaper,
      date: 'Jul 22, 2026',
      title: '⚠️ Example Urgent Alert — Placeholder',
      body: 'This is an example of what an urgent TPS notification looks like. Real urgent alerts will appear here automatically when USCIS makes time-sensitive announcements affecting El Salvador TPS holders. Check uscis.gov/newsroom for the latest official updates.',
      tag: 'TPS',
      urgent: true,
      links: [{ text: 'View official USCIS newsroom →', url: 'https://www.uscis.gov/newsroom' }],
      mutedNote: 'This card is for demonstration purposes only.',
      learnMoreUrl: 'https://www.uscis.gov/search?query=el+salvador',
      hideLearnMore: true,
      borderColor: '#FCA5A5',
    },
    {
      type: 'news',
      icon: Newspaper,
      date: 'January 17, 2025',
      title: 'El Salvador TPS Extended Through September 2026',
      body: "The U.S. Department of Homeland Security officially extended El Salvador's Temporary Protected Status for 18 months. Current TPS holders are protected through September 9, 2026 as long as they continue to meet eligibility requirements.",
      tag: 'News',
      urgent: false,
      items: [
        'TPS extended from March 10, 2025 through September 9, 2026',
        'Existing TPS holders must re-register to keep their status',
        'Work permits (EADs) with certain expiration dates are automatically extended through March 9, 2026',
        'You can file Form I-821 and Form I-765 online or by mail',
      ],
      itemsNav: { text: 'by mail', tab: 'forms' },
      links: [{ text: 'Read full notice →', url: 'https://www.federalregister.gov/documents/2025/01/17/2025-00626/extension-of-the-designation-of-el-salvador-for-temporary-protected-status' }],
      hideLearnMore: true,
    },
    {
      type: 'news',
      icon: Newspaper,
      date: 'June 21, 2023',
      title: 'El Salvador TPS Termination Reversed — Status Restored',
      body: "Secretary of Homeland Security Alejandro Mayorkas officially reversed the previous termination of El Salvador's TPS designation and extended TPS for 18 months from September 10, 2023 through March 9, 2025.",
      tag: 'News',
      urgent: false,
      items: [
        "The termination of El Salvador's TPS was officially cancelled",
        'TPS was extended through March 9, 2025 and has since been further extended through September 9, 2026',
        'TPS holders can use their EAD card or Form I-797 as proof of status for government benefits and REAL ID',
        'SAVE system can verify your TPS status using these documents',
      ],
      mutedNote: "Note: This article has been archived. El Salvador's TPS has since been extended through September 9, 2026.",
      links: [{ text: 'Read full notice →', url: 'https://www.uscis.gov/save/current-user-agencies/news-alerts/save-policy-news-archive/uscis-rescinds-termination-of-el-salvadors-tps-designation-and-extends-tps-el-salvador-for-18-months' }],
      hideLearnMore: true,
    },
    {
      type: 'deadline',
      icon: Calendar,
      date: '',
      title: 'TPS El Salvador — Re-Registration Deadline',
      body: 'Re-registration deadlines for El Salvador are announced by USCIS when the re-registration period opens. Deadlines change frequently — always verify before filing.',
      tag: 'Deadline',
      urgent: false,
      links: [{ text: 'Check current El Salvador deadline on USCIS.gov →', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status/temporary-protected-status-designated-country-el-salvador' }],
      mutedNote: 'This information is updated regularly. Always verify before filing.',
      hideLearnMore: true,
    },
    {
      type: 'forms',
      icon: FileText,
      date: 'Jul 10, 2026',
      title: 'New version of Form I-821 released',
      body: 'USCIS published a new edition of Form I-821 (01/20/25 edition). Only this version will be accepted.\nDownload Form I-821 for free →',
      tag: 'Forms',
      urgent: false,
      link: { text: 'Download Form I-821 for free →', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-821.pdf' },
      noLinkify: true,
    },
    {
      type: 'news',
      icon: Newspaper,
      date: 'Jul 5, 2026',
      title: 'Free legal clinics in Los Angeles',
      body: 'CARECEN offers free help filling out TPS forms every Saturday from 9am–1pm in Los Angeles, CA.',
      tag: 'Resources',
      urgent: false,
      showInNews: false,
    },
    {
      type: 'resources',
      icon: Languages,
      date: '',
      title: 'Need a free translator?',
      body: 'Connect with a free volunteer translator to help certify your documents for your application. Tarjimly and UnidosUS offer free multilingual support for immigrants.',
      tag: 'Resources',
      urgent: false,
      links: [
        { text: 'Visit Tarjimly', url: 'https://www.tarjimly.org' },
        { text: 'Visit UnidosUS', url: 'https://www.unidosus.org' },
      ],
      learnMoreUrl: 'https://www.tarjimly.org',
    },
    {
      type: 'resources',
      icon: Languages,
      date: '',
      title: 'How to translate a website on Google Chrome',
      body: "Don't understand English? You can translate entire web pages directly in Google Chrome with a single click. Watch the animated guide below to learn how to turn on automatic translation.",
      tag: 'Resources',
      urgent: false,
      gif: { src: '/assets/images/Translate_website.gif', alt: 'Animation showing how to translate a website in Google Chrome' },
      links: [
        { text: 'Open GIF in a new page', url: '/assets/images/Translate_website.gif' },
      ],
    },
    {
      type: 'resources',
      icon: Search,
      date: '',
      title: 'Check your case status online',
      body: 'Once you receive your Receipt Notice (Form I-797) you can check the status of your application anytime online. You will need your receipt number from the top of the notice.',
      tag: 'Resources',
      urgent: false,
      links: [
        { text: 'Check Case Status', url: 'https://egov.uscis.gov/casestatus/landing.do' },
      ],
    },
    {
      type: 'resources',
      icon: MapPin,
      date: '',
      title: 'Find an Application Support Center (ASC) near you',
      body: 'Application Support Centers are where you go for your biometrics appointment to provide your fingerprints photo and signature. We are building a tool to find your nearest ASC automatically filtered by distance so you always know where to go.',
      tag: 'Resources',
      urgent: false,
      comingSoon: true,
      showInAll: false,
    },
    {
      type: 'resources',
      icon: MapPin,
      date: '',
      title: 'Find your nearest consulate',
      body: 'We are building a map tool to help you find the closest consulate or immigration office to you, with hours and contact information.',
      tag: 'Resources',
      urgent: false,
      comingSoon: true,
    },
    {
      type: 'resources',
      icon: Car,
      date: '',
      title: 'Need a ride to your appointment?',
      body: 'We are working on connecting users with free or low cost transportation options including carpool volunteers to help you get to your immigration appointments.',
      tag: 'Resources',
      urgent: false,
      comingSoon: true,
    },
    {
      type: 'forms',
      icon: Briefcase,
      date: '',
      title: 'Form I-765 — Employment Authorization Document (Work Permit)',
      body: 'If you have TPS you may also be eligible to work legally in the United States. Form I-765 can be filed at the same time as your I-821 or separately after your TPS is approved. Filing both together helps you receive your work permit faster.',
      tag: 'Forms',
      urgent: false,
      comingSoon: true,
      links: [{ text: 'Download Form I-765 for free →', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-765.pdf' }],
      inactiveFormButton: true,
      noLinkify: true,
    },
    {
      type: 'forms',
      icon: Plane,
      date: '',
      title: 'Form I-131 — Travel Document (Advance Parole)',
      body: 'If you have TPS and need to travel outside the United States, you must apply for a travel document before you leave. Leaving without one could affect your ability to return. TPS, work authorization, and travel documents are often applied for together as a complete package.',
      tag: 'Forms',
      urgent: false,
      comingSoon: true,
      links: [{ text: 'Download Form I-131 for free →', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-131.pdf' }],
      inactiveFormButton: true,
    },
    {
      type: 'deadline',
      icon: Plane,
      date: '',
      title: 'Travel Document (Form I-131) Filing Deadline',
      body: 'You must apply for a travel document BEFORE leaving the United States if you have TPS. There is no fixed deadline — but leaving without one could prevent you from returning. Apply as early as possible.',
      tag: 'Deadline',
      urgent: false,
      comingSoon: true,
      links: [{ text: 'Learn about Form I-131 deadlines →', url: 'https://www.uscis.gov/i-131' }],
    },
    {
      type: 'forms',
      icon: Scale,
      date: '',
      title: 'Waivers — Could This Apply to You?',
      body: 'A waiver asks USCIS to overlook certain issues that might otherwise affect your TPS application. There are two types of waivers that may apply to you:',
      tag: 'Forms',
      urgent: false,
      comingSoon: true,
      subsections: [
        {
          title: 'Waiver of Grounds of Inadmissibility',
          body: 'If something in your background could make you ineligible for TPS, USCIS may still grant you a waiver for humanitarian reasons, to keep your family together, or because it is in the public interest. Not everything can be waived — serious criminal grounds and national security related issues cannot be waived by law. If you already received a waiver on a previous TPS application for the same issue, you do not need to apply for another one for that same situation.',
          collapsible: true,
        },
        {
          title: 'Form I-912 — Fee Waiver',
          body: 'If you cannot afford the filing fee or biometric services fee, you can request a fee waiver. You can either write a request letter or fill out Form I-912. Either way you must include documentation showing why you cannot pay the fees and explain why you deserve the benefit. Note: If your fee waiver request is denied, you cannot appeal that decision.',
          collapsible: true,
          titleLink: { url: 'https://www.uscis.gov/i-912' },
        },
      ],
      tipBox: 'Tip: If you think any of this might apply to you, we strongly recommend speaking with a free accredited representative before filing. Visit our Find a Preparer tab for help.',
      afterSubsectionsNote: { text: 'Click here to learn more about waivers on the official USCIS TPS page — ', mutedSuffix: 'Coming Soon' },
      hideFormButton: true,
    },
    {
      type: 'resources',
      icon: Landmark,
      date: '',
      title: 'Find an immigration attorney near you',
      body: 'We are building a directory of verified immigration attorneys and accredited representatives near you. Results will be automatically filtered by distance with pricing shown low to high. Each listing will include a 5 star rating from real clients. Pro bono (free) attorneys will be clearly labeled and listed first. No fake notarios, no scams — only verified legal professionals.',
      tag: 'Resources',
      urgent: false,
      comingSoon: true,
      starRating: true,
      emailSignup: true,
    },
    {
      type: 'preparer',
      icon: HelpCircle,
      date: '',
      title: 'What is an immigration form preparer?',
      body: 'A form preparer is someone who helps you fill out your immigration forms correctly. They are NOT a lawyer but can help make sure your forms are complete and accurate. Using a trusted preparer can save you time and help avoid costly mistakes.',
      tag: 'Resources',
      urgent: false,
    },
    {
      type: 'preparer',
      icon: UserCheck,
      date: '',
      title: 'Find a verified preparer near you',
      body: 'We are building a tool to help you find legitimate, verified immigration form preparers and accredited representatives near you — for free or low cost. No scams, no fake notarios, just real help from trusted people.',
      tag: 'Resources',
      urgent: false,
      comingSoon: true,
      emailSignup: true,
    },
    {
      type: 'preparer',
      icon: ShieldAlert,
      date: '',
      title: 'Warning: Beware of Notario Fraud',
      body: 'In many Latin American countries a notario publico is a powerful legal professional. In the United States a notary public is NOT a lawyer and cannot give legal advice or help with immigration cases. Many people in immigrant communities have been scammed by fake notarios who charge large fees and file incorrect or fraudulent paperwork. This can result in deportation, bans from re-entry, and loss of money. Always verify who you are working with before paying anyone to help with your immigration case.',
      tag: '⚠️ Important',
      urgent: false,
      warning: true,
      links: [
        { text: 'Report immigration scams to the FTC →', url: 'https://www.ftc.gov/immigration' },
        { text: 'Find a DOJ accredited representative →', url: 'https://www.justice.gov/eoir/recognition-and-accreditation-program' },
        { text: 'Learn about immigration scams on USCIS.gov →', url: 'https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/common-scams' },
      ],
    },
  ],
};

export type Subsection = {
  title: string;
  items?: string[];
  text?: string;
  intro?: string;
  addressBlocks?: { title: string; lines: string[] }[];
  link?: { text: string; url: string; download?: boolean };
  comingSoon?: boolean;
  collapsible?: boolean;
  nested?: { title: string; items: string[] };
  tipBox?: string;
  ascLink?: boolean;
  navLink?: { text: string; target?: 'preparer' | 'attorney' | 'translator' };
  textNav?: { text: string; target?: 'preparer' | 'attorney' | 'translator' };
  bottomNav?: { text: string; target?: 'preparer' | 'attorney' | 'translator' };
  itemLinks?: { text: string; url: string; download?: boolean }[];
  noLinkify?: boolean;
};

export type Step = {
  title: string;
  body: string;
  needs: string[];
  tip: string;
  important?: string;
  link?: { text: string; url: string; download?: boolean };
  note?: { text: string; linkText: string; url: string };
  subsections?: Subsection[];
  afterTipNote?: { text: string; linkText: string; url: string };
  tipLink?: { text: string; url: string };
  tipNav?: { text: string };
};

export const STEPS: Record<Lang, Step[]> = {
  es: [
    {
      title: '¿Qué es el formulario I-821?',
      body: 'Es la solicitud oficial para pedir el Estatus de Protección Temporal, o TPS. Puedes aplicar si eres ciudadano de un país que EE.UU. ha elegido para este programa. También puedes aplicar si no tienes un país propio, pero viviste en uno de los países elegidos antes de mudarte a EE.UU. El propósito del TPS es proteger a las personas de la deportación.\nVer la lista actual de países elegibles para TPS →',
      needs: [
        'Comprobante de quién eres (pasaporte, acta de nacimiento + identificación con foto, o tarjeta de identidad nacional con tu foto)',
        'Comprobante de cuándo entraste a EE.UU. (pasaporte o Formulario I-94)',
        'Comprobante de que has vivido en EE.UU. (recibos de pago, facturas de servicios, registros escolares o registros médicos)',
      ],
      tip: 'No necesitas ser residente permanente ni tener visa para aplicar. Solo necesitas haber estado en EE.UU. antes de la fecha de corte.',
      link: { text: 'Ver la lista actual de países elegibles para TPS →', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' },
      note: { text: '¿No tienes algunos de estos? Ver otros documentos aceptados aquí. Una vez que hagas clic en el enlace, desplázate hacia abajo pasando las alertas y haz clic en el menú \'What to File\' para ver los formularios exactos que necesitas.', linkText: 'aquí', url: 'https://www.uscis.gov/i-821' },
      subsections: [
        {
          title: 'Antes de llenar el formulario',
          collapsible: true,
          items: [
            'Usa solo la versión más actualizada del Formulario I-821 — edición 01/20/25. Descarga el Formulario I-821 aquí',
            'Usa tinta negra si escribes a mano',
            'Si escribes a máquina usa fuente Courier New tamaño 10 negrita',
            'NO uses líquido corrector, resaltador o cinta correctora — comienza de nuevo con un formulario nuevo si cometes un error',
            'Completa cada una de las páginas — las páginas faltantes harán que tu solicitud sea rechazada',
          ],
          link: { text: 'Descarga el Formulario I-821 aquí', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-821.pdf', download: true },
        },
      ],
    },
    {
      title: 'Información básica sobre ti',
      body: 'Este paso pide tus datos personales. Esto es lo que necesitarás para llenarlo:',
      needs: [],
      subsections: [
        {
          title: 'Tu nombre',
          items: [
            'Tu nombre legal completo (primer nombre, segundo nombre y apellido)',
            'Cualquier otro nombre que hayas usado — incluyendo nombres de casada, nombres de soltera o apodos',
          ],
        },
        {
          title: 'Tu descripción física',
          items: [
            'Tu estatura en pies y pulgadas',
            'Tu peso en libras',
            'El color de tus ojos',
            'El color de tu cabello',
          ],
        },
        {
          title: 'Tu antecedente',
          items: [
            'Tu etnia (por ejemplo: hispano o latino)',
            'Tu raza (por ejemplo: negro o afroamericano, asiático, blanco, etc.)',
          ],
        },
      ],
      tip: 'Consejo: Usa tu nombre exactamente como aparece en tus documentos oficiales. Incluso pequeñas diferencias pueden causar retrasos.',
    },
    {
      title: 'Historial de viajes',
      body: 'Tienes que declarar cuándo llegaste a EE.UU. Para El Salvador, la fecha de corte es el 9 de septiembre de 2001. Debes haber llegado antes de esa fecha.',
      needs: [
        'Fecha de entrada a EE.UU.',
        'Puerto de entrada (ciudad o aeropuerto)',
        'Cómo entraste (visa, sin documentos, etc.)',
      ],
      tip: 'Si no recuerdas la fecha exacta, aproxima lo mejor que puedas. Puedes adjuntar una declaración explicando por qué no recuerdas.',
      important: 'No mentir en este formulario. Es fraude federal y puede resultar en deportación.',
    },
    {
      title: 'Historial criminal',
      body: 'Esta sección pregunta sobre tu pasado. Responde cada pregunta honestamente — incluso si no fuiste condenado, incluso si tu récord fue sellado o expurgado, e incluso si un abogado o juez te dijo que no tienes que revelarlo. Aun así debes hacerlo.',
      needs: [],
      subsections: [
        {
          title: '¿Qué cuenta como una condena?',
          collapsible: true,
          items: [
            'Un tribunal te encontró culpable después de un juicio',
            'Te declaraste culpable o no contestaste',
            'Admitiste hechos en el tribunal que demostraron tu culpa',
            'Y el tribunal te dio algún tipo de castigo, libertad condicional o restricción',
          ],
          nested: {
            title: 'Delito grave vs. Delito menor — ¿Cuál es la diferencia?',
            items: [
              'Delito grave — un delito castigable con más de un año de prisión',
              'Delito menor — un delito castigable con un año o menos de prisión',
              'Ninguno — cualquier delito con una pena máxima de 5 días o menos no cuenta como ninguno',
            ],
          },
        },
        {
          title: '¿Qué documentos necesitas incluir?',
          collapsible: true,
          intro: 'Debes incluir documentos incluso si tu récord fue sellado, expurgado o si un juez te dijo que no necesitabas revelarlo. Aun así debes hacerlo.',
          items: [
            'Copias certificadas de todos los informes de arresto',
            'Registros del tribunal que muestren el resultado de tu caso',
            'Documentos de sentencia',
            'Prueba de que completaste la libertad condicional si aplica',
            'Cualquier documento que explique las circunstancias si quieres que USCIS los considere',
          ],
          nested: {
            title: 'Lo que NO necesitas incluir:',
            items: [
              'Multas de tráfico menores bajo $500 sin arresto',
              'Puntos en tu licencia de conducir sin arresto',
            ],
          },
        },
        {
          title: '¿Qué pasa si no puedo obtener mis registros oficiales?',
          collapsible: true,
          intro: 'USCIS entiende que algunos registros pueden ser difíciles o imposibles de obtener. Esto es lo que puedes hacer en su lugar:',
          items: [
            'Presenta un certificado del tribunal o oficina de registros explicando por qué no pueden darte los registros',
            'Presenta copias que tú o tu abogado ya tengan',
            'Si no existen documentos en absoluto, presenta una declaración escrita de alguien que tenga conocimiento personal de tu caso — debe firmarla bajo juramento e incluir su nombre, cómo te conoce y detalles de lo que pasó',
            'Si los registros están sellados o expurgados, aun debes revelarlos y proporcionar cualquier documentación disponible',
          ],
        },
        {
          title: '¿Mi historial criminal puede descalificarme?',
          collapsible: true,
          intro: 'No todo el historial criminal te descalifica del TPS. Esto es lo que necesitas saber:',
          items: [
            'Ciertos delitos graves pueden descalificarte del TPS — USCIS toma la decisión final',
            'Si crees que algún arresto fue políticamente motivado, explícalo en tu solicitud',
            'Las adjudicaciones de delincuencia juvenil NO se consideran condenas bajo la ley de inmigración — pero si un menor fue juzgado en un tribunal penal y no en un tribunal de menores, puede seguir siendo relevante',
            'Debes revelar TODOS los arrestos y cargos sin importar el resultado',
          ],
        },
        {
          title: '¿Tu situación involucra familiares o circunstancias especiales?',
          collapsible: true,
          text: 'Si tu caso involucra familiares que también necesitan protección, o circunstancias especiales como enfermedad médica, embarazo, o otros factores humanitarios, tu caso puede ser más complejo. En estos casos te recomendamos hablar con un abogado de inmigración antes de presentar tu solicitud.',
          bottomNav: { text: '¿Necesitas ayuda de un abogado de inmigración? Encuentra uno cerca de ti →', target: 'attorney' },
        },
      ],
      tip: 'Consejo: Si tienes cualquier historial criminal — incluso menor — recomendamos encarecidamente hablar con un representante acreditado gratuito antes de presentar tu solicitud. Visita nuestra pestaña Buscar un Preparador para obtener ayuda.',
      tipNav: { text: 'Buscar un Preparador' },
    },
    {
      title: 'Firma y envío',
      body: '¡Ya casi terminas! Antes de sellar el sobre revisa esta lista cuidadosamente. Los dos errores más comunes son la falta de firma y las tarifas incorrectas — ambos harán que tu solicitud sea rechazada.',
      needs: [],
      subsections: [
        {
          title: '¿Puedo presentar en línea?',
          collapsible: true,
          text: 'Si te estás reinscribiendo para TPS El Salvador puedes presentar el Formulario I-821 en línea aquí. También puedes presentar el Formulario I-765 para tu permiso de trabajo en línea al mismo tiempo o por separado más tarde a través de ese mismo enlace. Si estás presentando una solicitud en papel sigue las instrucciones de envío a continuación.',
          link: { text: 'aquí', url: 'https://www.uscis.gov/i-821#:~:text=a%20later%20date.-,File%20Online,-Form%20Details' },
          noLinkify: true,
        },
        {
          title: 'Tu lista de verificación para el envío',
          collapsible: true,
          navLink: { text: 'traducciones certificadas al inglés', target: 'translator' },
          items: [
            'Formulario I-821 firmado en tinta',
            'Pago de la tarifa de presentación O solicitud de exención de tarifas Formulario I-912',
            'Tarifa de servicios biométricos',
            'Prueba de identidad, nacionalidad, fecha de entrada y residencia en EE.UU.',
            'Traducciones certificadas al inglés para cualquier documento que no esté en inglés',
            'Fotos estilo pasaporte si son requeridas',
            'Registros del tribunal para cualquier arresto o condena',
            'Formulario I-765 si solicitas permiso de trabajo',
            'Formulario I-131 si solicitas documento de viaje',
            'Sección de intérprete o preparador completada si alguien te ayudó',
          ],
          itemLinks: [
            { text: 'Formulario I-821', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-821.pdf' },
            { text: 'Formulario I-765', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-765.pdf' },
            { text: 'Formulario I-131', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-131.pdf' },
          ],
        },
        {
          title: 'Dónde enviar tu solicitud — encuentra tu estado',
          collapsible: true,
          intro: 'Busca tu estado a continuación para obtener la dirección de envío correcta. Enviar a la dirección incorrecta hará que tu solicitud sea rechazada.',
          addressBlocks: [
            {
              title: 'Si vives en Texas:',
              lines: [
                'USPS: USCIS, Attn: TPS El Salvador, P.O. Box 660864, Dallas, TX 75266-0864',
                'FedEx, UPS, DHL: USCIS, Attn: TPS El Salvador (Box 660864), 2501 S. State Highway 121 Business, Suite 400, Lewisville, TX 75067-8003',
              ],
            },
            {
              title: 'Si vives en: Samoa Americana, Arizona, California, Connecticut, Delaware, Washington D.C., Georgia, Guam, Illinois, Indiana, Kentucky, Maine, Massachusetts, Michigan, Nevada, New Hampshire, New Jersey, North Carolina, Islas Marianas del Norte, Ohio, Oregon, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, Vermont, Islas Vírgenes, Virginia, Washington, o West Virginia:',
              lines: [
                'USPS: USCIS, Attn: TPS El Salvador, P.O. Box 8635, Chicago, IL 60680-8635',
                'FedEx, UPS, DHL: USCIS, Attn: TPS El Salvador (Box 8635), 131 S. Dearborn – 3rd Floor, Chicago, IL 60603-5517',
              ],
            },
            {
              title: 'Si vives en: Alabama, Alaska, Arkansas, Colorado, Florida, Hawaii, Idaho, Iowa, Kansas, Louisiana, Maryland, Minnesota, Mississippi, Missouri, Montana, Nebraska, New Mexico, New York, North Dakota, Oklahoma, South Dakota, Tennessee, Utah, Wisconsin, o Wyoming:',
              lines: [
                'USPS: USCIS, Attn: TPS El Salvador, P.O. Box 4091, Carol Stream, IL 60197-4091',
                'FedEx, UPS, DHL: USCIS, Attn: TPS El Salvador (Box 4091), 2500 Westfield Drive, Elgin, IL 60124-7836',
              ],
            },
          ],
        },
        {
          title: 'Cómo enviarlo:',
          items: [
            'Puedes enviar por USPS, FedEx, DHL o UPS',
            'Guarda tu número de rastreo después de enviar',
            'Guarda copias de todo antes de enviar',
          ],
        },
      ],
      tip: 'Consejo: Haz una lista de cada documento que pones en el sobre antes de sellarlo. Si USCIS pide algo más tarde sabrás exactamente qué enviaste.',
      important: 'Las direcciones de envío anteriores son específicamente para la reinscripción de TPS El Salvador. Si estás presentando para un país diferente visita uscis.gov/tps y selecciona tu país para obtener la dirección correcta.',
    },
    {
      title: '¿Qué pasa después?',
      body: 'Enviaste tu solicitud — ¿ahora qué? Esto es lo que puedes esperar paso a paso:',
      needs: [],
      subsections: [
        {
          title: 'Recibirás un Aviso de Recibo',
          collapsible: true,
          items: [
            'USCIS te enviará por correo un Aviso de Recibo llamado Formulario I-797',
            'Tiene tu número de caso — guárdalo en un lugar seguro',
            'Usa ese número para revisar el estado de tu caso en cualquier momento en uscis.gov/casestatus',
            'Si no lo recibes dentro de 3 semanas después de enviar tu solicitud llama a USCIS al 1-800-375-5283',
          ],
          link: { text: 'uscis.gov/casestatus', url: 'https://egov.uscis.gov/casestatus/landing.do' },
        },
        {
          title: 'Cita de Biometría',
          collapsible: true,
          ascLink: true,
          items: [
            'USCIS te enviará por correo un aviso de cita con la fecha, hora y lugar',
            'Debes ir a un Centro de Soporte de Solicitudes (ASC) para proporcionar tus huellas, foto y firma',
            'Lleva: tu pasaporte o identificación con foto, tu aviso de recibo, tu aviso de cita y tu EAD actual si tienes uno',
            'Todas las personas mayores de 14 años deben completar este paso',
            'Si no puedes asistir a tu cita reagrédala inmediatamente — NO la omitas o tu solicitud podría ser denegada',
            'Para reagendar envía por correo tu aviso de cita original con una solicitud escrita de reagendamiento a la dirección del ASC que aparece en el aviso',
          ],
        },
        {
          title: 'USCIS Revisa Tu Solicitud',
          collapsible: true,
          items: [
            'USCIS verifica que todo esté completo y correcto',
            'Pueden enviarte una Solicitud de Evidencia (RFE) pidiendo más documentos — responde inmediatamente si esto ocurre',
            'Pueden pedirte que asistas a una entrevista',
            'Si una exención aplica a tu caso USCIS te dará la oportunidad de presentar el Formulario I-601',
          ],
        },
        {
          title: 'La Decisión',
          collapsible: true,
          items: [
            'USCIS te enviará por correo su decisión',
            'Aprobado — recibirás un aviso de aprobación y tu EAD si lo solicitaste',
            'Denegado — recibirás una carta explicando por qué e información sobre cómo apelar',
          ],
        },
      ],
      tip: 'Consejo: El procesamiento puede tardar varios meses. Sé paciente y no llames a USCIS hasta que hayan pasado los tiempos normales de procesamiento. Revisa los tiempos actuales en uscis.gov/processingtimes',
      tipLink: { text: 'uscis.gov/processingtimes', url: 'https://egov.uscis.gov/processing-times/' },
      important: 'Si recibes CUALQUIER carta de USCIS responde inmediatamente. Perder un plazo en una Solicitud de Evidencia o aviso de entrevista puede resultar en la denegación de tu solicitud.',
    },
  ],
  en: [
    {
      title: 'What is Form I-821?',
      body: 'It is the official application to request Temporary Protected Status, or TPS. You can apply for this if you are a citizen of a country that the U.S. has chosen for this program. You can also apply if you don\'t have a country of your own, but you lived in one of those chosen countries before moving to the U.S. The purpose of TPS is to protect people from deportation.\nView the current list of countries eligible for TPS →',
      needs: [
        'Proof of who you are (passport, birth certificate + photo ID, or national ID card with your photo)',
        'Proof of when you entered the U.S. (passport or Form I-94)',
        'Proof that you have been living in the U.S. (pay stubs, utility bills, school records, or medical records)',
      ],
      tip: 'You do not need to be a permanent resident or have a visa to apply. You only need to have been in the US before the cutoff date.',
      link: { text: 'View the current list of countries eligible for TPS →', url: 'https://www.uscis.gov/humanitarian/temporary-protected-status' },
      note: { text: 'Don\'t have some of these? View other accepted documents here. Once you click the link, scroll down past the alerts and click on the \'What to File\' menu to see the exact forms you need.', linkText: 'here', url: 'https://www.uscis.gov/i-821' },
      subsections: [
        {
          title: 'Before you fill out the form',
          collapsible: true,
          items: [
            'Only use the most current version of Form I-821 — edition 01/20/25. Download Form I-821 here',
            'Use black ink if writing by hand',
            'If typing use Courier New font size 10 bold',
            'Do NOT use correction fluid highlighter or correction tape — start over with a new form if you make a mistake',
            'Complete every single page — missing pages will get your application rejected',
          ],
          link: { text: 'Download Form I-821 here', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-821.pdf', download: true },
        },
      ],
    },
    {
      title: 'Basic Information About You',
      body: 'This step asks for your personal details. Here is what you will need to fill out:',
      needs: [],
      subsections: [
        {
          title: 'Your Name',
          items: [
            'Your full legal name (first, middle, and last)',
            'Any other names you have ever used — including married names, maiden names, or nicknames',
          ],
        },
        {
          title: 'Your Physical Description',
          items: [
            'Your height in feet and inches',
            'Your weight in pounds',
            'Your eye color',
            'Your hair color',
          ],
        },
        {
          title: 'Your Background',
          items: [
            'Your ethnicity (for example: Hispanic or Latino)',
            'Your race (for example: Black or African American, Asian, White, etc.)',
          ],
        },
      ],
      tip: 'Tip: Use your name exactly as it appears on your official documents. Even small differences can cause delays.',
    },
    {
      title: 'Travel History',
      body: 'You must declare when you arrived in the US. For El Salvador, the cutoff date is September 9, 2001. You must have arrived before that date.',
      needs: [
        'Date of entry into the US',
        'Port of entry (city or airport)',
        'How you entered (visa, without documents, etc.)',
      ],
      tip: 'If you do not remember the exact date, approximate as best you can. You can attach a statement explaining why you do not remember.',
      important: 'Do not lie on this form. It is federal fraud and can result in deportation.',
    },
    {
      title: 'Criminal History',
      body: 'This section asks about your past. Answer every question honestly — even if you were not convicted, even if your record was sealed or expunged, and even if a lawyer or judge told you that you do not have to disclose it. You still must.',
      needs: [],
      subsections: [
        {
          title: 'What counts as a conviction?',
          collapsible: true,
          items: [
            'A court found you guilty after a trial',
            'You pleaded guilty or no contest',
            'You admitted to facts in court that showed guilt',
            'AND the court gave you any kind of punishment probation or restriction',
          ],
          nested: {
            title: 'Felony vs. Misdemeanor — What is the difference?',
            items: [
              'Felony — a crime punishable by more than one year in prison',
              'Misdemeanor — a crime punishable by one year or less in prison',
              'Neither — any crime with a maximum penalty of 5 days or less does not count as either',
            ],
          },
        },
        {
          title: 'What documents do you need to include?',
          collapsible: true,
          intro: 'You must include documents even if your record was sealed expunged or a judge told you that you did not need to disclose it. You still must.',
          items: [
            'Certified copies of all arrest reports',
            'Court records showing the outcome of your case',
            'Sentencing documents',
            'Proof that you completed probation if applicable',
            'Any documents explaining the circumstances if you want USCIS to consider them',
          ],
          nested: {
            title: 'What you do NOT need to include:',
            items: [
              'Minor traffic tickets under $500 with no arrest',
              "Points on your driver's license with no arrest",
            ],
          },
        },
        {
          title: 'What if I cannot get my official records?',
          collapsible: true,
          intro: 'USCIS understands that some records may be hard or impossible to get. Here is what you can do instead:',
          items: [
            'Submit a certificate from the court or records office explaining why they cannot give you the records',
            'Submit copies that you or your attorney already have',
            'If no documents exist at all submit a written statement from someone who has personal knowledge of your case — they must sign it under oath and include their name how they know you and details of what happened',
            'If records are sealed or expunged you must still disclose and provide whatever documentation is available',
          ],
        },
        {
          title: 'Can my criminal history disqualify me?',
          collapsible: true,
          intro: 'Not all criminal history disqualifies you from TPS. Here is what you need to know:',
          items: [
            'Certain serious crimes can disqualify you from TPS — USCIS makes the final decision',
            'If you believe any arrests were politically motivated explain that in your application',
            'Juvenile delinquency adjudications are NOT considered convictions under immigration law — but if a minor was tried in criminal court not juvenile court it may still be relevant',
            'You must disclose ALL arrests and charges regardless of outcome',
          ],
        },
        {
          title: 'Does your situation involve family members or special circumstances?',
          collapsible: true,
          text: 'If your case involves family members who also need protection, or special circumstances such as medical illness, pregnancy, or other humanitarian factors, your case may be more complex. In these cases we recommend speaking with an immigration attorney before filing your application.',
          bottomNav: { text: 'Need help from an immigration attorney? Find one near you →', target: 'attorney' },
        },
      ],
      tip: 'Tip: If you have any criminal history at all — even minor — we strongly recommend speaking with a free accredited representative before filing. Visit our Find a Preparer tab for help.',
      tipNav: { text: 'Find a Preparer tab' },
    },
    {
      title: 'Signature & Submission',
      body: 'You are almost done! Before you seal the envelope go through this checklist carefully. The two most common mistakes are a missing signature and incorrect fees — both will get your application rejected.',
      needs: [],
      subsections: [
        {
          title: 'Can I file online?',
          collapsible: true,
          text: 'If you are re-registering for TPS El Salvador you may file Form I-821 online here. You can also submit Form I-765 for your work permit online at the same time or separately later through that same link. If you are filing a paper application follow the mailing instructions below.',
          link: { text: 'here', url: 'https://www.uscis.gov/i-821#:~:text=a%20later%20date.-,File%20Online,-Form%20Details' },
          noLinkify: true,
        },
        {
          title: 'Your submission checklist',
          collapsible: true,
          navLink: { text: 'Certified English translations', target: 'translator' },
          items: [
            'Form I-821 signed in ink',
            'Filing fee payment OR Form I-912 fee waiver request',
            'Biometric services fee',
            'Proof of identity nationality date of entry and U.S. residence',
            'Certified English translations for any non-English documents',
            'Passport style photos if required',
            'Court records for any arrests or convictions',
            'Form I-765 if applying for work permit',
            'Form I-131 if applying for travel document',
            'Interpreter or preparer section completed if someone helped you',
          ],
          itemLinks: [
            { text: 'Form I-821', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-821.pdf' },
            { text: 'Form I-765', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-765.pdf' },
            { text: 'Form I-131', url: 'https://www.uscis.gov/sites/default/files/document/forms/i-131.pdf' },
          ],
        },
        {
          title: 'Where to mail your application — find your state',
          collapsible: true,
          intro: 'Find your state below to get the correct mailing address. Sending to the wrong address will get your application rejected.',
          addressBlocks: [
            {
              title: 'If you live in Texas:',
              lines: [
                'USPS: USCIS, Attn: TPS El Salvador, P.O. Box 660864, Dallas, TX 75266-0864',
                'FedEx, UPS, DHL: USCIS, Attn: TPS El Salvador (Box 660864), 2501 S. State Highway 121 Business, Suite 400, Lewisville, TX 75067-8003',
              ],
            },
            {
              title: 'If you live in: American Samoa, Arizona, California, Connecticut, Delaware, Washington D.C., Georgia, Guam, Illinois, Indiana, Kentucky, Maine, Massachusetts, Michigan, Nevada, New Hampshire, New Jersey, North Carolina, Northern Mariana Islands, Ohio, Oregon, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, Vermont, Virgin Islands, Virginia, Washington, or West Virginia:',
              lines: [
                'USPS: USCIS, Attn: TPS El Salvador, P.O. Box 8635, Chicago, IL 60680-8635',
                'FedEx, UPS, DHL: USCIS, Attn: TPS El Salvador (Box 8635), 131 S. Dearborn – 3rd Floor, Chicago, IL 60603-5517',
              ],
            },
            {
              title: 'If you live in: Alabama, Alaska, Arkansas, Colorado, Florida, Hawaii, Idaho, Iowa, Kansas, Louisiana, Maryland, Minnesota, Mississippi, Missouri, Montana, Nebraska, New Mexico, New York, North Dakota, Oklahoma, South Dakota, Tennessee, Utah, Wisconsin, or Wyoming:',
              lines: [
                'USPS: USCIS, Attn: TPS El Salvador, P.O. Box 4091, Carol Stream, IL 60197-4091',
                'FedEx, UPS, DHL: USCIS, Attn: TPS El Salvador (Box 4091), 2500 Westfield Drive, Elgin, IL 60124-7836',
              ],
            },
          ],
        },
        {
          title: 'How to mail it:',
          items: [
            'You can send via USPS FedEx DHL or UPS',
            'Save your tracking number after mailing',
            'Keep copies of everything before sending',
          ],
        },
      ],
      tip: 'Tip: Make a checklist of every document you put in the envelope before sealing it. If USCIS asks for something later you will know exactly what you sent.',
      important: 'The mailing addresses above are specifically for TPS El Salvador re-registration. If you are filing for a different country visit uscis.gov/tps and select your country to get the correct address.',
    },
    {
      title: 'What Happens Next?',
      body: 'You sent your application — now what? Here is what to expect step by step:',
      needs: [],
      subsections: [
        {
          title: 'You will receive a Receipt Notice',
          collapsible: true,
          items: [
            'USCIS will mail you a Receipt Notice called Form I-797',
            'It has your case number on it — keep it somewhere safe',
            'Use that number to check your case status anytime at uscis.gov/casestatus',
            'If you do not receive it within 3 weeks of mailing your application call USCIS at 1-800-375-5283',
          ],
          link: { text: 'uscis.gov/casestatus', url: 'https://egov.uscis.gov/casestatus/landing.do' },
        },
        {
          title: 'Biometrics Appointment',
          collapsible: true,
          ascLink: true,
          items: [
            'USCIS will mail you an appointment notice with a date time and location',
            'You must go to an Application Support Center (ASC) to provide your fingerprints photo and signature',
            'Bring: your passport or photo ID, your receipt notice, your appointment notice, and your current EAD if you have one',
            'Everyone over 14 years old must complete this step',
            'If you cannot make your appointment reschedule it immediately — do NOT skip it or your application could be denied',
            'To reschedule mail your original appointment notice with a written rescheduling request to the ASC address shown on the notice',
          ],
        },
        {
          title: 'USCIS Reviews Your Application',
          collapsible: true,
          items: [
            'USCIS checks that everything is complete and correct',
            'They may send you a Request for Evidence (RFE) asking for more documents — respond immediately if this happens',
            'They may ask you to come in for an interview',
            'If a waiver applies to your case USCIS will give you a chance to submit Form I-601',
          ],
        },
        {
          title: 'The Decision',
          collapsible: true,
          items: [
            'USCIS will mail you their decision',
            'Approved — you will receive an approval notice and your EAD if you requested one',
            'Denied — you will receive a letter explaining why and information on how to appeal',
          ],
        },
      ],
      tip: 'Tip: Processing can take several months. Be patient and do not call USCIS until normal processing times have passed. Check current processing times at uscis.gov/processingtimes',
      tipLink: { text: 'uscis.gov/processingtimes', url: 'https://egov.uscis.gov/processing-times/' },
      important: 'If you receive ANY letter from USCIS respond to it immediately. Missing a deadline on a Request for Evidence or interview notice can result in your application being denied.',
    },
  ],
};
