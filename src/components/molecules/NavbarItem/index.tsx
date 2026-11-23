import { cn } from '@/lib/cn';
import type { LinkItem } from '@/types/content';

interface NavbarItemProps {
  link: LinkItem;
  onNavigate?: () => void;
  className?: string;
}

export function NavbarItem({ link, onNavigate, className }: NavbarItemProps) {
  return (
    <a
      href={link.href}
      onClick={onNavigate}
      className={cn('text-nav text-inherit transition-colors hover:text-accent', className)}
    >
      {link.label}
    </a>
  );
}
