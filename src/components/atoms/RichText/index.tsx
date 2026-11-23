import { Fragment } from 'react';
import type { RichText as RichTextContent } from '@/types/content';

interface RichTextProps {
  content: RichTextContent;
  emphasisClassName?: string;
  strongClassName?: string;
}

/** Pinta texto con tramos en cursiva (<em>) o negrita (<strong>) definidos en data/. */
export function RichText({ content, emphasisClassName, strongClassName }: RichTextProps) {
  return content.map((span, index) => {
    if (typeof span === 'string') return <Fragment key={index}>{span}</Fragment>;
    if ('em' in span) {
      return (
        <em key={index} className={emphasisClassName}>
          {span.em}
        </em>
      );
    }
    return (
      <strong key={index} className={strongClassName}>
        {span.strong}
      </strong>
    );
  });
}
