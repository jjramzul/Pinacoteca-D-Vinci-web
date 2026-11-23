import { useSyncExternalStore } from 'react';

export const NAV_THEMES = ['hero', 'light', 'black', 'ink'] as const;
export type NavTheme = (typeof NAV_THEMES)[number];

export const NAV_ID = 'site-nav';
/** Distancia bajo la navbar a la que se "sondea" qué sección está entrando. */
const PROBE_OFFSET = 140;
/** Fracción del hero recorrida a partir de la cual la navbar adopta la siguiente sección. */
const HERO_HANDOFF = 0.6;

function toTheme(value: string | undefined): NavTheme {
  return NAV_THEMES.find((theme) => theme === value) ?? 'light';
}

function readNavTheme(): NavTheme {
  const nav = document.getElementById(NAV_ID);
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme]')).filter(
    (el) => el.getClientRects().length > 0,
  );
  if (!nav || sections.length === 0) return 'hero';

  const probe = nav.getBoundingClientRect().height + PROBE_OFFSET;
  let index = sections.findIndex((el) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= probe && rect.bottom > probe;
  });
  if (index < 0) index = sections.findIndex((el) => el.getBoundingClientRect().bottom > probe);
  if (index < 0) index = sections.length - 1;

  const current = sections[index];
  const next = sections[index + 1];
  if (
    current?.dataset.navTheme === 'hero' &&
    next &&
    window.scrollY > current.offsetHeight * HERO_HANDOFF
  ) {
    return toTheme(next.dataset.navTheme);
  }
  return toTheme(current?.dataset.navTheme);
}

function subscribe(onChange: () => void) {
  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      onChange();
    });
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  void document.fonts.ready.then(schedule);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
  };
}

/**
 * Tema de la navbar según la sección que pasa por debajo. Cada sección declara
 * su fondo con `data-nav-theme` (hero | light | black | ink).
 */
export function useNavTheme(): NavTheme {
  return useSyncExternalStore(subscribe, readNavTheme, () => 'hero');
}
