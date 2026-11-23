/** Resultado de un import de vite-imagetools con `as=picture`. */
export interface PictureAsset {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

export interface ImageContent {
  picture: PictureAsset;
  alt: string;
}

export interface VideoContent {
  /** Vídeo corto y codificado con keyframes densos (ver README) para el ping-pong. */
  src: string;
  type: 'video/mp4' | 'video/webm';
  /** Poster ligero; también es el fallback con prefers-reduced-motion. */
  poster: string;
}
