import { homeContent } from '@/data/home';
import { media } from '@/data/media';
import { site } from '@/data/site';
import { absoluteUrl } from './absoluteUrl';

/** Grafo schema.org: ArtGallery (subtipo de LocalBusiness) + WebSite + WebPage. */
export function buildStructuredData() {
  const organizationId = absoluteUrl('/#organizacion');
  const { address } = site;

  const business = {
    '@type': ['ArtGallery', 'LocalBusiness'],
    '@id': organizationId,
    name: site.name,
    alternateName: site.alternateNames,
    description: site.description,
    url: absoluteUrl('/'),
    logo: absoluteUrl(media.logo.img.src),
    image: [absoluteUrl('/og-image.jpg'), absoluteUrl(media.collage.img.src)],
    foundingDate: String(site.foundingYear),
    slogan: 'Descubre el arte que transforma vidas',
    knowsAbout: ['Arte', 'Pintura', 'Dibujo', 'Cerámica', 'Restauración de obras', 'Enmarcación'],
    areaServed: { '@type': 'City', name: address.locality },
    address: {
      '@type': 'PostalAddress',
      addressLocality: address.locality,
      addressRegion: address.region,
      addressCountry: address.country,
      ...(address.streetAddress && { streetAddress: address.streetAddress }),
      ...(address.postalCode && { postalCode: address.postalCode }),
    },
    ...(site.telephone && { telephone: site.telephone }),
    ...(site.email && { email: site.email }),
    ...(site.openingHours && { openingHours: site.openingHours }),
    ...(site.sameAs.length > 0 && { sameAs: site.sameAs }),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: homeContent.services.title,
      itemListElement: homeContent.services.items.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      business,
      {
        '@type': 'WebSite',
        '@id': absoluteUrl('/#sitio'),
        url: absoluteUrl('/'),
        name: site.shortName,
        inLanguage: site.language,
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'WebPage',
        '@id': absoluteUrl('/#pagina'),
        url: absoluteUrl('/'),
        name: site.title,
        description: site.description,
        inLanguage: site.language,
        isPartOf: { '@id': absoluteUrl('/#sitio') },
        about: { '@id': organizationId },
        primaryImageOfPage: absoluteUrl('/og-image.jpg'),
      },
    ],
  };
}
