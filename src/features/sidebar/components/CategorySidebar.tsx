'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/ui/sidebar';
import {cn} from '@/lib/utils';
import useCategory from '../hook/useCategory';
import SidebarButton from './SidebarButton';
import {Skeleton} from '@/ui/skeleton';
import {usePathname} from 'next/navigation';

export default function CategorySidebar() {
  const {isMobile} = useSidebar();
  const collapsible = isMobile ? 'offcanvas' : 'none';
  const {categoryList, isLoading} = useCategory();
  const pathname = usePathname();

  return (
    <div className="w-full">
      <SidebarTrigger
        className={cn('fixed top-0 left-0 z-10', !isMobile && 'hidden')}
      />
      <Sidebar collapsible={collapsible}>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>메뉴</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <SidebarButton href="/" selected={pathname === '/'}>
                      전체
                    </SidebarButton>
                  </SidebarMenuButton>
                  <SidebarMenuButton asChild>
                    <SidebarButton href="/best" selected={pathname === '/best'}>
                      best
                    </SidebarButton>
                  </SidebarMenuButton>
                  <SidebarMenuButton asChild>
                    <SidebarButton href="/new" selected={pathname === '/new'}>
                      new
                    </SidebarButton>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {isLoading &&
                  Array.from({length: 5}).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-10 w-full rounded-md my-2"
                    />
                  ))}
                {categoryList &&
                  categoryList.map(category => (
                    <SidebarMenuItem key={category.name + category.id}>
                      <SidebarMenuButton asChild>
                        <SidebarButton
                          href={`/${category.id}`}
                          selected={pathname === `/${category.id}`}>
                          {category.name}
                        </SidebarButton>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
