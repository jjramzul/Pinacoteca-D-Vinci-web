import { useEffect, useRef, useState } from 'react';

interface InViewRevealOptions {
  /** Margen del viewport; por defecto revela 24px antes del borde inferior. */
  rootMargin?: string;
}

/**
 * Marca un elemento como revelado la primera vez que entra en el viewport
 * (o si ya quedó por encima al recargar la página con scroll).
 * La animación vive en CSS (.reveal) y respeta prefers-reduced-motion.
 */
export function useInViewReveal<T extends Element>({
  rootMargin = '0px 0px -24px 0px',
}: InViewRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && (entry.isIntersecting || entry.boundingClientRect.top < 0)) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [isRevealed, rootMargin]);

  return { ref, isRevealed };
}
