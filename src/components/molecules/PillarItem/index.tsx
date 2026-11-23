import type { PillarItem as PillarItemContent } from '@/types/content';

interface PillarItemProps {
  pillar: PillarItemContent;
}

export function PillarItem({ pillar }: PillarItemProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-[clamp(20px,3vw,44px)] gap-y-[18px] border-t border-paper/18 py-[26px]">
      <h3 className="text-pillar font-medium">{pillar.title}</h3>
      {/* w-0 + min-w-full: el párrafo no ensancha la columna, se ajusta a ella. */}
      <p className="w-0 min-w-full text-[15px] leading-[1.75] text-night-text">
        {pillar.description}
      </p>
    </div>
  );
}
