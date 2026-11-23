import { ExternalLink } from '@/components/atoms/ExternalLink';
import type { ExternalLink as ExternalLinkContent } from '@/types/content';

interface ModelCreditProps {
  model: ExternalLinkContent;
  author: ExternalLinkContent;
}

const linkClassName = 'border-b border-ink/18 text-muted';

/** Atribución CC del modelo 3D exigida por Sketchfab. */
export function ModelCredit({ model, author }: ModelCreditProps) {
  return (
    <p className="mt-3.5 flex-none text-center text-credit text-muted">
      <ExternalLink href={model.href} className={linkClassName}>
        {model.label}
      </ExternalLink>{' '}
      por{' '}
      <ExternalLink href={author.href} className={linkClassName}>
        {author.label}
      </ExternalLink>{' '}
      en{' '}
      <ExternalLink href="https://sketchfab.com" className={linkClassName}>
        Sketchfab
      </ExternalLink>
    </p>
  );
}
