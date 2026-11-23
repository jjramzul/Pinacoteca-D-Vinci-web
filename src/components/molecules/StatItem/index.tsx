import { cn } from '@/lib/cn';
import type { StatItem as StatItemContent } from '@/types/content';

interface StatItemProps {
  stat: StatItemContent;
}

export function StatItem({ stat }: StatItemProps) {
  return (
    <li className="bg-paper px-6 py-[30px]">
      <p className={cn('font-display text-stat', stat.highlight && 'text-accent')}>{stat.value}</p>
      <p className="mt-2.5 text-label uppercase text-muted">{stat.label}</p>
    </li>
  );
}
