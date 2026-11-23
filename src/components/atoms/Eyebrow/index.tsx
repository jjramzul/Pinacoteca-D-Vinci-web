import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type EyebrowTone = 'light' | 'dark' | 'hero';

interface EyebrowProps {
  children: ReactNode;
  tone?: EyebrowTone;
  size?: 'sm' | 'lg';
  className?: string;
}

const toneClasses: Record<EyebrowTone, string> = {
  light: 'text-muted',
  dark: 'text-night-muted',
  hero: 'text-black',
};

/** Antetítulo en versalitas precedido de una línea de acento. */
export function Eyebrow({ children, tone = 'light', size = 'sm', className }: EyebrowProps) {
  return (
    <p className={cn('flex items-center gap-3.5', className)}>
      <span aria-hidden="true" className="h-px w-[46px] shrink-0 bg-accent" />
      <span
        className={cn(
          'uppercase',
          size === 'lg' ? 'text-eyebrow-lg' : 'text-eyebrow',
          toneClasses[tone],
        )}
      >
        {children}
      </span>
    </p>
  );
}
