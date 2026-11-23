import type { ImageContent, VideoContent } from './media';

/** Texto con énfasis en línea: cada tramo es texto plano, cursiva o negrita. */
export type RichTextSpan = string | { em: string } | { strong: string };
export type RichText = readonly RichTextSpan[];

export interface LinkItem {
  label: string;
  href: `#${string}`;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface NavContent {
  links: readonly LinkItem[];
  cta: LinkItem;
}

export interface HeroContent {
  eyebrow: string;
  /** Cada elemento es una línea del h1 (se separan con <br>). */
  titleLines: readonly RichText[];
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  model: {
    sketchfabId: string;
    title: string;
    autospin: number;
    launchLabel: string;
    credit: { model: ExternalLink; author: ExternalLink };
    /** Opcional: vídeo en bucle ping-pong dentro del marco mientras no se abre el 3D. */
    previewVideo?: VideoContent;
  };
}

export interface StatItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface ManifestoContent {
  srTitle: string;
  statement: RichText;
  stats: readonly StatItem[];
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: readonly RichText[];
  image: ImageContent;
  signature: { name: string; role: string };
  readMore: LinkItem & { ariaLabel: string };
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: ImageContent;
  imagePosition: 'left' | 'right';
  href: `#${string}`;
}

export interface ServicesContent {
  title: string;
  kicker: string;
  items: readonly ServiceItem[];
}

export interface PillarItem {
  title: string;
  description: string;
}

export interface ProposalContent {
  eyebrow: string;
  title: string;
  pillars: readonly PillarItem[];
  image: ImageContent;
}

export interface GalleryContent {
  srTitle: string;
  image: ImageContent;
}

export interface FooterContent {
  links: readonly LinkItem[];
  legalName: string;
}

export interface HomeContent {
  nav: NavContent;
  hero: HeroContent;
  manifesto: ManifestoContent;
  about: AboutContent;
  services: ServicesContent;
  proposal: ProposalContent;
  gallery: GalleryContent;
  footer: FooterContent;
}
