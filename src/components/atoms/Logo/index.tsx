import { Picture } from '@/components/atoms/Picture';
import { cn } from '@/lib/cn';
import type { PictureAsset } from '@/types/media';

interface LogoProps {
  picture: PictureAsset;
  label: string;
  href?: string;
  className?: string;
}

/** Logotipo enlazado al inicio. El recorte (object-cover) replica el del diseño. */
export function Logo({ picture, label, href = '#top', className }: LogoProps) {
  return (
    <a href={href} aria-label={`${label} — inicio`} className="relative block min-w-0 shrink">
      <Picture
        picture={picture}
        alt={label}
        sizes="(min-width: 1024px) 362px, 250px"
        loading="eager"
        className={cn(
          'block h-8 w-[200px] max-w-full object-cover transition-[filter] duration-420 sm:h-10 sm:w-[250px] lg:h-[58px] lg:w-[362px]',
          className,
        )}
      />
    </a>
  );
}
