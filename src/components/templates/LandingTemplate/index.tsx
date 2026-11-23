import { SkipLink } from '@/components/atoms/SkipLink';
import { AboutSection } from '@/components/organisms/AboutSection';
import { Footer } from '@/components/organisms/Footer';
import { GallerySection } from '@/components/organisms/GallerySection';
import { Hero } from '@/components/organisms/Hero';
import { ManifestoSection } from '@/components/organisms/ManifestoSection';
import { Navbar } from '@/components/organisms/Navbar';
import { ProposalSection } from '@/components/organisms/ProposalSection';
import { ServicesSection } from '@/components/organisms/ServicesSection';
import { StructuredData } from '@/components/organisms/StructuredData';
import type { HomeContent } from '@/types/content';
import type { PictureAsset } from '@/types/media';

interface LandingTemplateProps {
  content: HomeContent;
  brand: { name: string; logo: PictureAsset };
  heroMedia: { background: PictureAsset; frameImage: string };
}

const MAIN_ID = 'contenido';

/** Orden de la landing: navbar · hero · manifiesto · nosotros · servicios · propuesta · galería · footer. */
export function LandingTemplate({ content, brand, heroMedia }: LandingTemplateProps) {
  return (
    <div className="relative overflow-x-clip">
      <SkipLink targetId={MAIN_ID} />
      <Navbar nav={content.nav} logo={brand.logo} brandName={brand.name} />
      <main id={MAIN_ID}>
        <Hero
          content={content.hero}
          background={heroMedia.background}
          frameImage={heroMedia.frameImage}
        />
        <ManifestoSection content={content.manifesto} />
        <AboutSection content={content.about} />
        <ServicesSection content={content.services} />
        <ProposalSection content={content.proposal} />
        <GallerySection content={content.gallery} />
      </main>
      <Footer content={content.footer} />
      <StructuredData />
    </div>
  );
}
