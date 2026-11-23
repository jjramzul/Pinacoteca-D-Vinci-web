import { Fragment } from 'react';
import { Button } from '@/components/atoms/Button';
import { Eyebrow } from '@/components/atoms/Eyebrow';
import { Picture } from '@/components/atoms/Picture';
import { Reveal } from '@/components/atoms/Reveal';
import { RichText } from '@/components/atoms/RichText';
import { Section } from '@/components/atoms/Section';
import { ModelFrame } from '@/components/molecules/ModelFrame';
import type { HeroContent } from '@/types/content';
import type { PictureAsset } from '@/types/media';

interface HeroProps {
  content: HeroContent;
  background: PictureAsset;
  frameImage: string;
}

/*
 * Por debajo de ~854px la rejilla auto-fit pasa a una sola columna (2 × 380px +
 * gutter + gap ya no caben). Ahí el texto toma su alto natural y el marco
 * ocupa todo el espacio restante, en lugar de repartirlo a partes iguales.
 */
const SINGLE_COLUMN_ROWS = 'max-[854px]:grid-rows-[auto_minmax(0,1fr)]';

export function Hero({ content, background, frameImage }: HeroProps) {
  return (
    <Section
      id="top"
      navTheme="hero"
      aria-labelledby="hero-title"
      className={`relative isolate grid h-screen min-h-[min(600px,100vh)] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-[clamp(20px,3vw,48px)] overflow-hidden px-gutter pb-[clamp(18px,3.5vh,40px)] pt-[clamp(72px,10vh,112px)] ${SINGLE_COLUMN_ROWS}`}
    >
      <Picture
        picture={background}
        alt=""
        sizes="100vw"
        loading="eager"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="flex min-w-0 flex-col justify-center">
        <Reveal className="mb-[clamp(14px,3.2vh,34px)]">
          <Eyebrow tone="hero" size="lg">
            {content.eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal
          as="h1"
          delay={100}
          id="hero-title"
          className="text-balance font-display text-display-hero font-medium"
        >
          {content.titleLines.map((line, index) => (
            <Fragment key={index}>
              {index > 0 && <br />}
              <RichText content={line} emphasisClassName="italic text-accent" />
            </Fragment>
          ))}
        </Reveal>
        <Reveal delay={200} className="mt-[clamp(18px,4vh,42px)] flex flex-wrap gap-3.5">
          <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
          <Button href={content.secondaryCta.href} variant="secondary">
            {content.secondaryCta.label}
          </Button>
        </Reveal>
      </div>

      <ModelFrame model={content.model} frameImage={frameImage} />
    </Section>
  );
}
