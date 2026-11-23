import { Eyebrow } from '@/components/atoms/Eyebrow';
import { Reveal } from '@/components/atoms/Reveal';
import { RichText } from '@/components/atoms/RichText';
import { Section } from '@/components/atoms/Section';
import { SectionTitle } from '@/components/atoms/SectionTitle';
import { TextLink } from '@/components/atoms/TextLink';
import { FramedPhoto } from '@/components/molecules/FramedPhoto';
import { cn } from '@/lib/cn';
import type { AboutContent } from '@/types/content';

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  const lastParagraph = content.paragraphs.length - 1;

  return (
    <Section
      id="nosotros"
      navTheme="light"
      divider
      aria-labelledby="about-title"
      className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-[clamp(36px,5vw,88px)] px-gutter py-section"
    >
      <Reveal>
        <FramedPhoto
          image={content.image}
          aspectClassName="aspect-[4/5]"
          sizes="(min-width: 820px) 46vw, 100vw"
        />
      </Reveal>

      <div>
        <Reveal className="mb-[26px]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal>
          <SectionTitle id="about-title" size="about" className="mb-7">
            {content.title}
          </SectionTitle>
        </Reveal>
        {content.paragraphs.map((paragraph, index) => (
          <Reveal
            key={index}
            as="p"
            className={cn(
              'max-w-[58ch] text-base leading-[1.8] text-ink-body',
              index === lastParagraph ? 'mb-[34px]' : 'mb-5',
            )}
          >
            <RichText content={paragraph} strongClassName="font-semibold text-ink" />
          </Reveal>
        ))}
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-t border-ink/14 pt-[26px]">
          <div>
            <p className="font-display text-signature">{content.signature.name}</p>
            <p className="mt-[5px] text-label uppercase text-muted">{content.signature.role}</p>
          </div>
          <TextLink href={content.readMore.href} aria-label={content.readMore.ariaLabel}>
            {content.readMore.label}
          </TextLink>
        </Reveal>
      </div>
    </Section>
  );
}
