import { LandingTemplate } from '@/components/templates/LandingTemplate';
import { homeContent } from '@/data/home';
import { media } from '@/data/media';
import { site } from '@/data/site';

export function HomePage() {
  return (
    <LandingTemplate
      content={homeContent}
      brand={{ name: site.shortName, logo: media.logo }}
      heroMedia={{ background: media.parchment, frameImage: media.frameImage }}
    />
  );
}
