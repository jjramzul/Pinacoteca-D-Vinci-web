import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Enlace a otro sitio: nueva pestaña, sin traspasar autoridad SEO y anunciado a lectores de pantalla. */
export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer" className={cn(className)}>
      {children}
      <span className="sr-only"> (se abre en una pestaña nueva)</span>
    </a>
  );
}
