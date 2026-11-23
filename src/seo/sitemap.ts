import { homeContent } from '@/data/home';
import { absoluteUrl } from './absoluteUrl';

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Sitemap con extensión de imágenes para que las fotos también se indexen. */
export function buildSitemapXml(lastModified: string): string {
  const { about, proposal, gallery } = homeContent;
  const images = [gallery.image, about.image, proposal.image]
    .map(
      (image) =>
        `    <image:image>\n      <image:loc>${escapeXml(absoluteUrl(image.picture.img.src))}</image:loc>\n    </image:image>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(absoluteUrl('/'))}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
${images}
  </url>
</urlset>
`;
}
