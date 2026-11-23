/**
 * Imágenes optimizadas en build por vite-imagetools: AVIF (q45) + WebP (q72) +
 * fallback JPG/PNG, con varios anchos para srcset. AVIF y WebP se generan por
 * separado porque la misma "quality" no equivale entre formatos.
 * Para cambiar una foto basta con sustituir el archivo en src/assets/images.
 */
import collageAvif from '@/assets/images/collage-contacto.jpg?w=640;1024;1600&format=avif&quality=45&as=picture';
import collageBase from '@/assets/images/collage-contacto.jpg?w=640;1024;1600&format=webp;jpg&as=picture';
import aboutAvif from '@/assets/images/foto-nosotros.jpg?w=420;750&format=avif&quality=45&as=picture';
import aboutBase from '@/assets/images/foto-nosotros.jpg?w=420;750&format=webp;jpg&as=picture';
import proposalAvif from '@/assets/images/foto-propuesta.jpg?w=420;675&format=avif&quality=45&as=picture';
import proposalBase from '@/assets/images/foto-propuesta.jpg?w=420;675&format=webp;jpg&as=picture';
import servicesAvif from '@/assets/images/foto-servicios.jpg?w=340;680&format=avif&quality=45&as=picture';
import servicesBase from '@/assets/images/foto-servicios.jpg?w=340;680&format=webp;jpg&as=picture';
import logoAvif from '@/assets/images/logo.png?w=362;700&format=avif&quality=60&as=picture';
import logoBase from '@/assets/images/logo.png?w=362;700&format=webp;png&as=picture';
import frameImage from '@/assets/images/marco.png?format=webp';
import parchmentAvif from '@/assets/images/pergamino.jpg?w=768;1536&format=avif&quality=40&as=picture';
import parchmentBase from '@/assets/images/pergamino.jpg?w=768;1536&format=webp;jpg&as=picture';
import type { PictureAsset } from '@/types/media';

/** Antepone la fuente AVIF para que el navegador la prefiera si la soporta. */
function withAvif(avif: PictureAsset, base: PictureAsset): PictureAsset {
  return { sources: { ...avif.sources, ...base.sources }, img: base.img };
}

export const media = {
  logo: withAvif(logoAvif, logoBase),
  aboutPhoto: withAvif(aboutAvif, aboutBase),
  servicesPhoto: withAvif(servicesAvif, servicesBase),
  proposalPhoto: withAvif(proposalAvif, proposalBase),
  collage: withAvif(collageAvif, collageBase),
  /** Fondo de papel del hero. */
  parchment: withAvif(parchmentAvif, parchmentBase),
  /** Marco tallado usado como border-image: se conserva a 360px para que los slices cuadren. */
  frameImage,
};
