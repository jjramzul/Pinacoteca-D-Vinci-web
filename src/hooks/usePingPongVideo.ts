import { useEffect, type RefObject } from 'react';

/**
 * Bucle "ping-pong": el vídeo se reproduce hacia delante de forma nativa y, al
 * terminar, retrocede moviendo `currentTime` en cada requestAnimationFrame
 * (nunca playbackRate negativo, que no es compatible entre navegadores).
 *
 * - Lazy: no descarga nada hasta entrar en viewport (preload="none").
 * - Se pausa fuera de pantalla y con la pestaña oculta.
 * - `enabled = false` (p. ej. con prefers-reduced-motion) lo desactiva por completo.
 *
 * Para un retroceso fluido, codifica el vídeo con keyframes densos (ver README).
 */
export function usePingPongVideo(videoRef: RefObject<HTMLVideoElement>, enabled = true) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;

    let frame = 0;
    let lastTimestamp = 0;
    let reverseTarget = 0;
    let reversing = false;
    let inView = false;

    const stopReverse = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTimestamp = 0;
    };

    const playForward = () => {
      reversing = false;
      stopReverse();
      video.play().catch(() => undefined);
    };

    const stepBackward = (timestamp: number) => {
      const elapsed = lastTimestamp ? (timestamp - lastTimestamp) / 1000 : 0;
      lastTimestamp = timestamp;
      reverseTarget -= elapsed;

      if (reverseTarget <= 0) {
        video.currentTime = 0;
        playForward();
        return;
      }
      // Si el navegador aún está resolviendo el seek anterior, acumulamos tiempo.
      if (!video.seeking) video.currentTime = reverseTarget;
      frame = requestAnimationFrame(stepBackward);
    };

    const startReverse = () => {
      reversing = true;
      reverseTarget = video.duration;
      stopReverse();
      frame = requestAnimationFrame(stepBackward);
    };

    const resume = () => {
      if (!inView || document.hidden) return;
      if (reversing) frame = frame || requestAnimationFrame(stepBackward);
      else video.play().catch(() => undefined);
    };

    const pause = () => {
      video.pause();
      stopReverse();
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = Boolean(entry?.isIntersecting);
      if (inView) resume();
      else pause();
    });
    const onVisibilityChange = () => (document.hidden ? pause() : resume());

    video.addEventListener('ended', startReverse);
    document.addEventListener('visibilitychange', onVisibilityChange);
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('ended', startReverse);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      pause();
    };
  }, [videoRef, enabled]);
}
