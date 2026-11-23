/** Tipado mínimo de la Sketchfab Viewer API 1.12 que usa useSketchfabViewer. */
interface SketchfabApi {
  start: () => void;
  addEventListener: (event: 'viewerready', callback: () => void) => void;
  setBackground: (options: { color: [number, number, number] }, callback: () => void) => void;
}

interface SketchfabInitOptions {
  success: (api: SketchfabApi) => void;
  error: () => void;
  [option: string]: unknown;
}

interface SketchfabClient {
  init: (modelId: string, options: SketchfabInitOptions) => void;
}

interface Window {
  Sketchfab?: new (version: string, iframe: HTMLIFrameElement) => SketchfabClient;
}
