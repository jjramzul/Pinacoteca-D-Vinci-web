import { Eyebrow } from '@/components/atoms/Eyebrow';
import { Reveal, type RevealDelay } from '@/components/atoms/Reveal';
import { Section } from '@/components/atoms/Section';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { FramedPhoto } from '@/components/molecules/FramedPhoto';
import { PillarItem } from '@/components/molecules/PillarItem';
import type { ProposalContent } from '@/types/content';

interface ProposalSectionProps {
  content: ProposalContent;
}

const STAGGER: readonly RevealDelay[] = [0, 100, 200, 300];

export function ProposalSection({ content }: ProposalSectionProps) {
  return (
    <Section
      navTheme="black"
      aria-labelledby="proposal-title"
      className="bg-night px-gutter py-section-md text-paper [--focus-ring:theme(colors.paper.DEFAULT)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-start gap-[clamp(36px,5vw,80px)]">
        <div>
          <Reveal className="mb-[26px]">
            <Eyebrow tone="dark">{content.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal>
            <SectionTitle id="proposal-title" className="mb-[46px] leading-[1.02]">
              {content.title}
            </SectionTitle>
          </Reveal>
          <ul>
            {content.pillars.map((pillar, index) => (
              <Reveal key={pillar.title} as="li" delay={STAGGER[index] ?? 300}>
                <PillarItem pillar={pillar} />
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal>
          <FramedPhoto
            image={content.image}
            tone="dark"
            aspectClassName="aspect-[3/4]"
            sizes="(min-width: 800px) 46vw, 100vw"
          />
        </Reveal>
      </div>
    </Section>
  );
}
