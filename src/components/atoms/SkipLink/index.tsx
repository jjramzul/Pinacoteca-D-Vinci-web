interface SkipLinkProps {
  targetId: string;
  label?: string;
}

/** Primer elemento enfocable: permite saltar la navegación con el teclado. */
export function SkipLink({ targetId, label = 'Saltar al contenido' }: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cta focus:text-paper"
    >
      {label}
    </a>
  );
}
