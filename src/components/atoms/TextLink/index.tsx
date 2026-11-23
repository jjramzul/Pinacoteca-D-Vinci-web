import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/** Enlace de texto subrayado con la línea de acento. */
export function TextLink({ href, className, children, ...rest }: TextLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-block border-b border-accent pb-[3px] text-nav font-medium transition-colors hover:text-accent',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
