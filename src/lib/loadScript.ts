const pending = new Map<string, Promise<void>>();

/** Inyecta un <script> externo una sola vez y resuelve cuando ha cargado. */
export function loadScript(src: string): Promise<void> {
  const existing = pending.get(src);
  if (existing) return existing;

  const promise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      pending.delete(src);
      script.remove();
      reject(new Error(`No se pudo cargar ${src}`));
    };
    document.head.append(script);
  });

  pending.set(src, promise);
  return promise;
}
