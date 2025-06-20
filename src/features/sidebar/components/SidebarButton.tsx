'use client';
import {cn} from '@/lib/utils';
import {useSidebar} from '@/ui/sidebar';
import {useRouter} from 'next/navigation';

export default function SidebarButton({
  href,
  children,
  selected,
}: {
  href: string;
  children: React.ReactNode;
  selected: boolean;
}) {
  const {toggleSidebar} = useSidebar();
  const router = useRouter();

  return (
    <button
      className={cn(
        'text-lg p-2 hover:bg-muted w-full rounded-md text-left',
        selected && 'bg-muted text-orange-500',
      )}
      onClick={() => {
        toggleSidebar();
        router.push(href);
      }}>
      {children}
    </button>
  );
}
