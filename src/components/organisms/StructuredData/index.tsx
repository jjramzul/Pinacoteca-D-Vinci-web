import { buildStructuredData } from '@/seo/structuredData';

/** JSON-LD (ArtGallery/LocalBusiness + WebSite) prerenderizado en el HTML. */
export function StructuredData() {
  const json = JSON.stringify(buildStructuredData()).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
