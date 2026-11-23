import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionTitleProps {
  id: string;
  children: ReactNode;
  size?: 'section' | 'about';
  className?: string;
}

/** h2 editorial en Playfair Display. El `id` permite enlazarlo con aria-labelledby. */
export function SectionTitle({ id, children, size = 'section', className }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={cn(
        'font-display font-medium',
        size === 'about' ? 'text-display-about' : 'text-display-section',
        className,
      )}
    >
      {children}
    </h2>
  );
}
