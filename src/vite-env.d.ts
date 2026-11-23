/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/* Salidas de vite-imagetools usadas en src/data/media.ts */
declare module '*as=picture' {
  const picture: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default picture;
}

declare module '*format=webp' {
  const url: string;
  export default url;
}
