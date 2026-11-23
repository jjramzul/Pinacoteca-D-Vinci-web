import type { LinkItem } from '@/types/content';

export const primaryNav: readonly LinkItem[] = [
  { label: 'Acerca de', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export const navCta: LinkItem = { label: 'Visita la sala', href: '#contacto' };

export const footerNav: readonly LinkItem[] = [{ label: 'Inicio', href: '#top' }, ...primaryNav];
