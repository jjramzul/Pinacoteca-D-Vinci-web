import { Reveal } from '@/components/atoms/Reveal';
import { Section } from '@/components/atoms/Section';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { ServiceItem } from '@/components/molecules/ServiceItem';
import type { ServicesContent } from '@/types/content';

interface ServicesSectionProps {
  content: ServicesContent;
}

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <Section
      id="servicios"
      navTheme="light"
      divider
      aria-labelledby="services-title"
      className="px-gutter py-section"
    >
      <Reveal className="mb-[clamp(36px,6vh,70px)] flex flex-wrap items-baseline justify-between gap-7">
        <SectionTitle id="services-title">{content.title}</SectionTitle>
        <p className="text-eyebrow uppercase text-muted">{content.kicker}</p>
      </Reveal>
      <ul className="border-b border-ink/16">
        {content.items.map((service) => (
          <li key={service.number}>
            <ServiceItem service={service} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
