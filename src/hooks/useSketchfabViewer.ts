import { useCallback, useEffect, useRef, useState } from 'react';
import { loadScript } from '@/lib/loadScript';

const API_VERSION = '1.12.1';
const API_URL = `https://static.sketchfab.com/api/sketchfab-viewer-${API_VERSION}.js`;
/** Color #E9DFC6 (warm) en RGB normalizado: el visor se funde con el lienzo del marco. */
const CANVAS_RGB: [number, number, number] = [0.914, 0.874, 0.776];

/** Visor limpio: sin UI, sin marca de agua, sin zoom con la rueda. */
const VIEWER_OPTIONS = {
  autostart: 1,
  preload: 1,
  transparent: 1,
  scrollwheel: 0,
  dnt: 1,
  ui_theme: 'dark',
  ...Object.fromEntries(
    [
      'loading',
      'general_controls',
      'watermark',
      'watermark_link',
      'infos',
      'controls',
      'stop',
      'help',
      'hint',
      'settings',
      'inspector',
      'annotations',
      'fullscreen',
      'vr',
      'ar',
      'animations',
    ].map((option) => [`ui_${option}`, 0]),
  ),
};

export type ViewerStatus = 'idle' | 'loading' | 'ready';

interface SketchfabViewerOptions {
  modelId: string;
  autospin: number;
}

/**
 * Carga bajo demanda el visor de Sketchfab (WebGL + ~484k triángulos):
 * ni el script ni el iframe existen hasta que el usuario llama a `start`.
 */
export function useSketchfabViewer({ modelId, autospin }: SketchfabViewerOptions) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<ViewerStatus>('idle');

  useEffect(() => {
    const iframe = iframeRef.current;
    if (status !== 'loading' || !iframe || iframe.dataset.initialized) return;
    iframe.dataset.initialized = 'true';

    loadScript(API_URL)
      .then(() => {
        if (!window.Sketchfab) throw new Error('Sketchfab API no disponible');
        new window.Sketchfab(API_VERSION, iframe).init(modelId, {
          ...VIEWER_OPTIONS,
          autospin,
          success: (api) => {
            api.start();
            api.addEventListener('viewerready', () => {
              api.setBackground({ color: CANVAS_RGB }, () => undefined);
              setStatus('ready');
            });
          },
          error: () => setStatus('idle'),
        });
      })
      .catch(() => setStatus('idle'));
  }, [status, modelId, autospin]);

  const start = useCallback(() => setStatus('loading'), []);

  return { iframeRef, status, start };
}
