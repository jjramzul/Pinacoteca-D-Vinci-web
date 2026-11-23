import { useRef } from 'react';
import { usePingPongVideo } from '@/hooks/usePingPongVideo';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { VideoContent } from '@/types/media';

interface LoopVideoProps {
  video: VideoContent;
  className?: string;
}

/**
 * Vídeo decorativo en bucle ping-pong, silenciado y sin controles.
 * Con prefers-reduced-motion se muestra solo el poster estático.
 */
export function LoopVideo({ video, className }: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  usePingPongVideo(videoRef, !reduceMotion);

  if (reduceMotion) {
    return <img src={video.poster} alt="" loading="lazy" decoding="async" className={className} />;
  }

  return (
    <video
      ref={videoRef}
      poster={video.poster}
      muted
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    >
      <source src={video.src} type={video.type} />
    </video>
  );
}
