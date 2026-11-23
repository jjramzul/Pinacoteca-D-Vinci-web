import type { PictureAsset } from '@/types/media';

const MIME_TYPES: Record<string, string> = {
  avif: 'image/avif',
  webp: 'image/webp',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
};

interface PictureProps {
  picture: PictureAsset;
  alt: string;
  /** Atributo `sizes` para que el navegador elija el ancho adecuado del srcset. */
  sizes: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * <picture> con fuentes AVIF/WebP y fallback. Usa `display: contents` para que
 * el <img> sea quien participa en el layout del contenedor.
 */
export function Picture({ picture, alt, sizes, className, loading = 'lazy' }: PictureProps) {
  const { sources, img } = picture;
  return (
    <picture className="contents">
      {Object.entries(sources).map(([format, srcSet]) => (
        <source key={format} type={MIME_TYPES[format]} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={img.src}
        width={img.w}
        height={img.h}
        alt={alt}
        loading={loading}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
