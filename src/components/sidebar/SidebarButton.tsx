'use client';
import {useSidebar} from '../ui/sidebar';
import {useRouter} from 'next/navigation';

export default function SidebarButton({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  const {toggleSidebar} = useSidebar();
  const router = useRouter();
  return (
    <button
      className="text-lg p-2 hover:bg-muted w-full rounded-md text-left"
      onClick={() => {
        toggleSidebar();
        router.push(href);
      }}>
      {name}
    </button>
  );
}
