/**
 * Design tokens de Pinacoteca D'Vinci, extraídos del export de Claude Design.
 * Tailwind los consume en `theme.extend` (ver tailwind.config.ts).
 */

export const colors = {
  paper: {
    DEFAULT: '#EFE9DD', // fondo base (beige)
    light: '#FDFBF6', // texto sobre acento / selección
  },
  ink: {
    DEFAULT: '#14110E', // tinta principal
    body: '#433D35', // párrafos largos
  },
  accent: {
    DEFAULT: '#F3811F', // naranja/terracota
    wash: 'rgba(226, 87, 31, 0.05)', // hover de filas de servicios
  },
  muted: {
    DEFAULT: '#6B6156', // texto secundario
    soft: '#8A8075',
  },
  warm: '#E9DFC6', // fondo secundario cálido (lienzo del modelo 3D)
  gold: '#F2C67B', // botón secundario del hero
  night: {
    DEFAULT: '#000000', // sección "Propuesta única"
    text: '#C4BBAC',
    muted: '#A39887',
  },
  stripe: {
    light: '#E4DCCC',
    lighter: '#EAE3D5',
    dark: '#241F1A',
    darker: '#2B2520',
  },
} as const;

export const fontFamily = {
  display: ['"Playfair Display Variable"', '"Playfair Display Fallback"', 'Georgia', 'serif'],
  sans: ['Archivo', '"Archivo Fallback"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
};

type FontSize = [string, { lineHeight?: string; letterSpacing?: string }];

export const fontSize: Record<string, FontSize> = {
  // Display (Playfair Display)
  'display-hero': [
    'clamp(38px, min(7.6vw, 9.2vh), 112px)',
    { lineHeight: '0.94', letterSpacing: '-0.025em' },
  ],
  'display-section': ['clamp(32px, 4.4vw, 62px)', { lineHeight: '1', letterSpacing: '-0.025em' }],
  'display-about': ['clamp(32px, 4vw, 58px)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
  'display-statement': [
    'clamp(30px, 4.4vw, 62px)',
    { lineHeight: '1.14', letterSpacing: '-0.02em' },
  ],
  'display-number': ['clamp(30px, 3.2vw, 44px)', { lineHeight: '1', letterSpacing: '-0.03em' }],
  'display-item': ['clamp(22px, 2.3vw, 32px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
  stat: ['40px', { lineHeight: '1', letterSpacing: '-0.03em' }],
  signature: ['20px', { letterSpacing: '-0.01em' }],
  // UI (Archivo)
  eyebrow: ['11px', { letterSpacing: '0.3em' }],
  'eyebrow-lg': ['12px', { letterSpacing: '0.3em' }],
  label: ['12px', { letterSpacing: '0.16em' }],
  nav: ['13.5px', { letterSpacing: '0.02em' }],
  cta: ['13px', { letterSpacing: '0.02em' }],
  button: ['14px', { letterSpacing: '0.01em' }],
  footer: ['12.5px', {}],
  credit: ['10.5px', { lineHeight: '1.7', letterSpacing: '0.04em' }],
  pillar: ['19px', { letterSpacing: '-0.01em' }],
};

export const spacing = {
  gutter: 'clamp(20px, 4vw, 56px)', // padding lateral de todas las secciones
  section: 'clamp(70px, 10vh, 130px)',
  'section-md': 'clamp(70px, 11vh, 140px)',
  'section-lg': 'clamp(90px, 14vh, 170px)',
};

export const opacity = {
  12: '0.12',
  14: '0.14',
  16: '0.16',
  18: '0.18',
  28: '0.28',
};

export const transitionTimingFunction = {
  snap: 'cubic-bezier(.2, .8, .2, 1)',
};

export const transitionDuration = {
  260: '260ms',
  420: '420ms',
  800: '800ms',
  900: '900ms',
};

export const backgroundImage = {
  stripes: `repeating-linear-gradient(135deg, ${colors.stripe.light} 0 12px, ${colors.stripe.lighter} 12px 24px)`,
  'stripes-dark': `repeating-linear-gradient(135deg, ${colors.stripe.dark} 0 12px, ${colors.stripe.darker} 12px 24px)`,
};

export const dropShadow = {
  frame: '0 26px 44px rgba(20, 17, 14, 0.26)',
};

export const boxShadow = {
  hairline: '0 1px 0 rgba(20, 17, 14, 0.08)',
};
