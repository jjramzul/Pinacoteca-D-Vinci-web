import { homeContent } from '@/data/home';
import { site } from '@/data/site';
import type { RichText } from '@/types/content';
import { absoluteUrl } from './absoluteUrl';

const plain = (content: RichText) =>
  content
    .map((span) => (typeof span === 'string' ? span : 'em' in span ? span.em : span.strong))
    .join('');

/**
 * llms.txt (https://llmstxt.org): resumen en Markdown pensado para que los LLM
 * entiendan el sitio sin ejecutar JavaScript. Se genera desde data/ en cada build.
 */
export function buildLlmsTxt(): string {
  const { about, services, proposal, manifesto, hero } = homeContent;
  const { address } = site;
  const location = `${address.locality}, ${address.region}, Colombia`;

  const contact = [
    address.streetAddress && `- Dirección: ${address.streetAddress}, ${location}`,
    site.telephone && `- Teléfono: ${site.telephone}`,
    site.email && `- Email: ${site.email}`,
    ...site.sameAs.map((profile) => `- Perfil oficial: ${profile}`),
  ].filter(Boolean);

  return [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.shortName} es una pinacoteca y corporación cultural de ${location}, fundada en ${site.foundingYear} por ${site.founders}. Lema: "${hero.titleLines.map(plain).join(' ')}".`,
    '',
    `## ${about.title}`,
    '',
    ...about.paragraphs.map((paragraph) => `${plain(paragraph)}\n`),
    '## En cifras',
    '',
    ...manifesto.stats.map((stat) => `- ${stat.value}: ${stat.label}`),
    '',
    `## ${services.title}`,
    '',
    ...services.items.map((service) => `- **${service.title}**: ${service.description}`),
    '',
    `## ${proposal.title}`,
    '',
    ...proposal.pillars.map((pillar) => `- **${pillar.title}**: ${pillar.description}`),
    '',
    '## Ubicación y contacto',
    '',
    `- Ciudad: ${location}`,
    ...contact,
    '',
    '## Páginas',
    '',
    `- [Inicio](${absoluteUrl('/')}): presentación de la Pinacoteca D’Vinci`,
    `- [Quiénes somos](${absoluteUrl('/#nosotros')}): historia y misión`,
    `- [Servicios](${absoluteUrl('/#servicios')}): exposiciones, talleres, venta y enmarcación`,
    `- [Galería](${absoluteUrl('/#galeria')}): talleres y obras`,
    '',
  ].join('\n');
}
