import { site } from '@/data/site';

/** Convierte una ruta del build ("/assets/x.webp") en URL absoluta del sitio. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, `${site.url}/`).toString();
}
