/**
 * Datos de negocio y SEO. Alimentan meta tags, JSON-LD, sitemap, robots y llms.txt.
 * Completa los campos opcionales (dirección, teléfono, redes…) cuando estén
 * disponibles: solo se publican si tienen valor.
 */
export interface SiteInfo {
  name: string;
  shortName: string;
  alternateNames: readonly string[];
  url: string;
  language: string;
  title: string;
  description: string;
  foundingYear: number;
  founders: string;
  services: readonly string[];
  address: {
    locality: string;
    region: string;
    country: string;
    streetAddress?: string;
    postalCode?: string;
  };
  telephone?: string;
  email?: string;
  openingHours?: readonly string[];
  /** Perfiles oficiales (Instagram, Facebook, Google Business…). */
  sameAs: readonly string[];
}

export const site: SiteInfo = {
  name: 'Pinacoteca & Corporación D’Vinci',
  shortName: 'Pinacoteca D’Vinci',
  alternateNames: ["Pinacoteca D'Vinci", 'Pinacoteca DVinci', "Corporación D'Vinci"],
  url: import.meta.env.VITE_SITE_URL.replace(/\/$/, ''),
  language: 'es-CO',
  title: 'Pinacoteca D’Vinci · Galería de arte, talleres y enmarcación en Medellín',
  description:
    'Pinacoteca & Corporación D’Vinci: entidad cultural en Medellín desde 1980. Exposiciones de arte, talleres de dibujo, pintura y cerámica, venta, restauración y enmarcación de obras.',
  foundingYear: 1980,
  founders: 'Margarita y James',
  services: [
    'Exposiciones de arte contemporáneo y clásico',
    'Talleres creativos de dibujo, pintura y cerámica para todas las edades',
    'Venta de obra de artistas destacados',
    'Restauración de obras',
    'Enmarcación',
    'Proyectos sociales y de inclusión a través del arte',
  ],
  address: {
    locality: 'Medellín',
    region: 'Antioquia',
    country: 'CO',
  },
  sameAs: [],
};
