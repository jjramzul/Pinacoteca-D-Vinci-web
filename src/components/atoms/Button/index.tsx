import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-ink px-[30px] py-4 text-button text-paper hover:bg-accent hover:text-paper-light',
  secondary:
    'border border-ink/28 bg-gold px-[30px] py-4 text-button hover:border-ink hover:text-accent',
  outline: 'border px-[22px] py-[11px] text-cta text-inherit hover:bg-ink hover:text-paper',
};

/** Enlace con forma de botón (todas las CTAs de la landing navegan a un ancla). */
export function Button({ href, variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-block rounded-full font-medium transition-[transform,background-color,border-color,color] duration-200 ease-snap active:scale-[0.97]',
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
