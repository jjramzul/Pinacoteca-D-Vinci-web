import { Picture } from '@/components/atoms/Picture';
import { cn } from '@/lib/cn';
import type { ImageContent } from '@/types/media';

interface FramedPhotoProps {
  image: ImageContent;
  sizes: string;
  /** Clase de aspect-ratio del contenedor, p. ej. "aspect-[4/5]". */
  aspectClassName: string;
  tone?: 'light' | 'dark';
}

/** Foto sobre fondo rayado con un filete interior a 16px, como en el diseño. */
export function FramedPhoto({ image, sizes, aspectClassName, tone = 'light' }: FramedPhotoProps) {
  const isDark = tone === 'dark';
  return (
    <div
      className={cn(
        'relative grid place-items-center',
        aspectClassName,
        isDark ? 'bg-stripes-dark' : 'bg-stripes',
      )}
    >
      <Picture
        picture={image.picture}
        alt={image.alt}
        sizes={sizes}
        className="block h-full w-full object-cover"
      />
      <span
        aria-hidden="true"
        className={cn('absolute inset-4 border', isDark ? 'border-paper/14' : 'border-ink/12')}
      />
    </div>
  );
}
