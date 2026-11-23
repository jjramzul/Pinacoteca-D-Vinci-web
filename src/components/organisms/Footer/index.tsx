import type { FooterContent } from '@/types/content';

interface FooterProps {
  content: FooterContent;
}

const year = new Date().getFullYear();

export function Footer({ content }: FooterProps) {
  return (
    <footer
      id="contacto"
      data-nav-theme="ink"
      className="flex flex-wrap items-center justify-between gap-5 border-t border-paper/14 bg-ink px-gutter py-7 text-footer text-muted-soft [--focus-ring:theme(colors.paper.DEFAULT)]"
    >
      <nav aria-label="Pie de página">
        <ul className="flex flex-wrap gap-[clamp(14px,2vw,30px)]">
          {content.links.map((link) => (
            <li key={link.href + link.label}>
              <a href={link.href} className="text-night-text transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p suppressHydrationWarning>
        © {year} {content.legalName}
      </p>
    </footer>
  );
}
