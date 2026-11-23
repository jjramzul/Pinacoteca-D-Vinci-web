import type { HTMLAttributes } from 'react';
import type { NavTheme } from '@/hooks/useNavTheme';
import { cn } from '@/lib/cn';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Fondo que ve la navbar al pasar sobre esta sección (useNavTheme). */
  navTheme: NavTheme;
  /** Filete superior que separa las secciones claras. */
  divider?: boolean;
}

export function Section({ navTheme, divider = false, className, ...rest }: SectionProps) {
  return (
    <section
      data-nav-theme={navTheme}
      className={cn(divider && 'border-t border-ink/12', className)}
      {...rest}
    />
  );
}
