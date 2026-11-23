import { Reveal } from '@/components/atoms/Reveal';
import { RichText } from '@/components/atoms/RichText';
import { Section } from '@/components/atoms/Section';
import { StatItem } from '@/components/molecules/StatItem';
import type { ManifestoContent } from '@/types/content';

interface ManifestoSectionProps {
  content: ManifestoContent;
}

export function ManifestoSection({ content }: ManifestoSectionProps) {
  return (
    <Section
      navTheme="light"
      divider
      aria-labelledby="manifesto-title"
      className="px-gutter py-section-lg"
    >
      <h2 id="manifesto-title" className="sr-only">
        {content.srTitle}
      </h2>
      <Reveal
        as="p"
        className="mx-auto max-w-[22ch] text-balance text-center font-display text-display-statement"
      >
        <RichText content={content.statement} emphasisClassName="italic" />
      </Reveal>
      <Reveal
        as="ul"
        className="mx-auto mt-[clamp(56px,8vh,96px)] grid max-w-stats grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-0.5 bg-ink/12"
      >
        {content.stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </Reveal>
    </Section>
  );
}
