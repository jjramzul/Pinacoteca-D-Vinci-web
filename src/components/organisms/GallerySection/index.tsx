import { Picture } from '@/components/atoms/Picture';
import { Section } from '@/components/atoms/Section';
import type { GalleryContent } from '@/types/content';

interface GallerySectionProps {
  content: GalleryContent;
}

export function GallerySection({ content }: GallerySectionProps) {
  return (
    <Section
      id="galeria"
      navTheme="light"
      aria-labelledby="gallery-title"
      className="block leading-none"
    >
      <h2 id="gallery-title" className="sr-only">
        {content.srTitle}
      </h2>
      <Picture
        picture={content.image.picture}
        alt={content.image.alt}
        sizes="100vw"
        className="block h-auto w-full"
      />
    </Section>
  );
}
