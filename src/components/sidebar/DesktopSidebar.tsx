'use client';

import {Sidebar, SidebarTrigger, useSidebar} from '@/components/ui/sidebar';
import {cn} from '@/lib/utils';

export default function DesktopSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const {isMobile} = useSidebar();
  const collapsible = isMobile ? 'offcanvas' : 'none';
  return (
    <>
      <SidebarTrigger
        className={cn('fixed top-0 left-0 z-10', !isMobile && 'hidden')}
      />
      <Sidebar collapsible={collapsible}>{children}</Sidebar>
    </>
  );
}
