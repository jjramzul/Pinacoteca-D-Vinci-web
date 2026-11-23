import { createElement, type HTMLAttributes, type ReactNode } from 'react';
import { useInViewReveal } from '@/hooks/useInViewReveal';
import { cn } from '@/lib/cn';

type RevealTag = 'div' | 'p' | 'h1' | 'ul' | 'li';
export type RevealDelay = 0 | 100 | 200 | 300;

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: RevealTag;
  /** Retardo para escalonar elementos hermanos. */
  delay?: RevealDelay;
  children: ReactNode;
}

const delayClasses: Record<RevealDelay, string> = {
  0: '',
  100: 'delay-100',
  200: 'delay-200',
  300: 'delay-300',
};

/** Fade-in + translateY al entrar en viewport (estilos en .reveal, styles/index.css). */
export function Reveal({ as = 'div', delay = 0, className, children, ...rest }: RevealProps) {
  const { ref, isRevealed } = useInViewReveal<HTMLElement>();
  return createElement(
    as,
    {
      ...rest,
      ref,
      className: cn('reveal', delayClasses[delay], className),
      'data-revealed': isRevealed ? '' : undefined,
    },
    children,
  );
}
