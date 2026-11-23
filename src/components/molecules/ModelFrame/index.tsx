import type { CSSProperties } from 'react';
import { Play } from 'lucide-react';
import { LoopVideo } from '@/components/atoms/LoopVideo';
import { ModelCredit } from '@/components/molecules/ModelCredit';
import { useSketchfabViewer } from '@/hooks/useSketchfabViewer';
import { cn } from '@/lib/cn';
import type { HeroContent } from '@/types/content';

interface ModelFrameProps {
  model: HeroContent['model'];
  /** URL del marco tallado usado como border-image. */
  frameImage: string;
}

/**
 * Marco dorado con el Hombre de Vitruvio en 3D. El visor es pesado, así que
 * solo se carga cuando el usuario pulsa "Ver en 3D".
 */
export function ModelFrame({ model, frameImage }: ModelFrameProps) {
  const { iframeRef, status, start } = useSketchfabViewer({
    modelId: model.sketchfabId,
    autospin: model.autospin,
  });
  const frameStyle = { '--frame-image': `url("${frameImage}")` } as CSSProperties;

  return (
    <div className="relative min-w-0 self-stretch">
      <div className="flex h-full flex-col items-stretch justify-center">
        <div className="frame-stage relative grid min-h-0 flex-1 place-items-center">
          <div className="frame-box relative drop-shadow-frame">
            <div
              className="frame-canvas absolute overflow-hidden bg-warm"
              aria-busy={status === 'loading'}
            >
              {status === 'idle' ? (
                <button
                  type="button"
                  onClick={start}
                  aria-label={`${model.launchLabel}: ${model.title}`}
                  className="absolute inset-0 flex h-full w-full cursor-pointer flex-col items-center justify-center gap-3 bg-warm text-muted"
                >
                  {model.previewVideo && (
                    <LoopVideo
                      video={model.previewVideo}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <span className="relative grid size-14 place-items-center rounded-full border border-ink/28 text-accent">
                    <Play aria-hidden="true" className="size-5 fill-current" strokeWidth={1.5} />
                  </span>
                  <span className="relative text-[11px] uppercase tracking-[0.22em]">
                    {model.launchLabel}
                  </span>
                </button>
              ) : (
                <iframe
                  ref={iframeRef}
                  title={model.title}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                  className={cn(
                    'absolute -left-16 -top-12 block h-[calc(100%+104px)] w-[calc(100%+128px)] border-0 bg-transparent opacity-0 transition-opacity duration-900',
                    status === 'ready' && 'opacity-100',
                  )}
                />
              )}
            </div>
            <div
              aria-hidden="true"
              style={frameStyle}
              className="frame-border pointer-events-none absolute inset-0 z-[2]"
            />
          </div>
        </div>
        <ModelCredit model={model.credit.model} author={model.credit.author} />
      </div>
    </div>
  );
}
