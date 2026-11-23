import { Picture } from '@/components/atoms/Picture';
import { cn } from '@/lib/cn';
import type { ServiceItem as ServiceItemContent } from '@/types/content';

interface ServiceItemProps {
  service: ServiceItemContent;
}

/**
 * Fila de servicio a tres columnas (foto · texto · hueco) que alterna el lado
 * de la foto. En móvil las columnas se apilan solas (auto-fit).
 */
export function ServiceItem({ service }: ServiceItemProps) {
  const imageLeft = service.imagePosition === 'left';

  const photo = (
    <div
      className={cn(
        'relative grid aspect-video w-full max-w-media place-items-center',
        imageLeft ? 'justify-self-start' : 'justify-self-end bg-stripes',
      )}
    >
      <Picture
        picture={service.image.picture}
        alt={service.image.alt}
        sizes="340px"
        className="block h-full w-full object-cover"
      />
    </div>
  );
  const spacer = <div aria-hidden="true" />;

  return (
    <a
      href={service.href}
      className="group grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] items-end gap-[clamp(18px,3vw,48px)] border-t border-ink/16 py-[clamp(26px,4vh,46px)] transition-[background-color,padding] duration-260 hover:bg-accent-wash"
    >
      {imageLeft ? photo : spacer}
      <div className={cn('w-fit min-w-0 max-w-full', imageLeft ? 'mr-auto' : 'ml-auto')}>
        <div
          className={cn(
            'mb-3.5 flex items-baseline gap-4',
            imageLeft ? 'justify-start' : 'justify-end',
          )}
        >
          <span className="font-display text-display-number text-accent">{service.number}</span>
          <h3 className="font-display text-display-item transition-colors group-hover:text-accent">
            {service.title}
          </h3>
        </div>
        <p
          className={cn(
            'w-0 min-w-full text-[15px] leading-[1.7] text-ink-body',
            imageLeft ? 'text-left' : 'text-right',
          )}
        >
          {service.description}
        </p>
      </div>
      {imageLeft ? spacer : photo}
    </a>
  );
}
