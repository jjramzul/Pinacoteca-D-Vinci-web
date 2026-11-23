import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Logo } from '@/components/atoms/Logo';
import { NavbarItem } from '@/components/molecules/NavbarItem';
import { NAV_ID, useNavTheme, type NavTheme } from '@/hooks/useNavTheme';
import { cn } from '@/lib/cn';
import type { NavContent } from '@/types/content';
import type { PictureAsset } from '@/types/media';

interface NavbarProps {
  nav: NavContent;
  logo: PictureAsset;
  brandName: string;
}

interface ThemeClasses {
  root: string;
  veil: string;
  logo: string;
  cta: string;
}

const LIGHT_INK = 'text-ink';
const DARK_INK = 'text-paper [--focus-ring:theme(colors.paper.DEFAULT)]';
const DARK_LOGO = 'invert brightness-[1.08]';
const DARK_CTA = 'border-paper/50';

/** La navbar adopta el fondo de la sección que pasa por debajo (ver useNavTheme). */
const themeClasses: Record<NavTheme, ThemeClasses> = {
  hero: { root: LIGHT_INK, veil: 'bg-paper opacity-0', logo: '', cta: 'border-ink' },
  light: {
    root: `${LIGHT_INK} shadow-hairline`,
    veil: 'bg-paper opacity-100',
    logo: '',
    cta: 'border-ink',
  },
  black: { root: DARK_INK, veil: 'bg-night opacity-100', logo: DARK_LOGO, cta: DARK_CTA },
  ink: { root: DARK_INK, veil: 'bg-ink opacity-100', logo: DARK_LOGO, cta: DARK_CTA },
};

const MENU_ID = 'menu-movil';

export function Navbar({ nav, logo, brandName }: NavbarProps) {
  const theme = themeClasses[useNavTheme()];
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <nav
      id={NAV_ID}
      aria-label="Principal"
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 px-gutter py-4 transition-[color,box-shadow] duration-420',
        theme.root,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 transition-[opacity,background-color] duration-420',
          theme.veil,
        )}
      />
      <Logo picture={logo} label={brandName} className={theme.logo} />

      {/* Escritorio */}
      <div className="relative hidden flex-wrap items-center justify-end gap-[clamp(14px,2vw,34px)] lg:flex">
        {nav.links.map((link) => (
          <NavbarItem key={link.href + link.label} link={link} />
        ))}
        <Button
          href={nav.cta.href}
          variant="outline"
          className={cn('transition-[background-color,color,border-color]', theme.cta)}
        >
          {nav.cta.label}
        </Button>
      </div>

      {/* Móvil y tablet */}
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls={MENU_ID}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        className="relative grid size-11 shrink-0 place-items-center rounded-full lg:hidden"
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div
        id={MENU_ID}
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full border-t border-ink/12 bg-paper px-gutter pb-8 pt-4 text-ink shadow-hairline [--focus-ring:theme(colors.ink.DEFAULT)] lg:hidden"
      >
        <ul className="flex flex-col">
          {nav.links.map((link) => (
            <li key={link.href + link.label} className="border-b border-ink/12">
              <NavbarItem link={link} onNavigate={closeMenu} className="block py-4 text-lg" />
            </li>
          ))}
        </ul>
        <Button
          href={nav.cta.href}
          variant="outline"
          onClick={closeMenu}
          className="mt-6 border-ink"
        >
          {nav.cta.label}
        </Button>
      </div>
    </nav>
  );
}
