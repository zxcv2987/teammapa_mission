import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {getCategoryList} from '@/api/category';
import DesktopSidebar from '@/components/sidebar/DesktopSidebar';
import SidebarButton from '@/components/sidebar/SidebarButton';

export default async function SidebarPage() {
  const category = await getCategoryList();

  return (
    <DesktopSidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>메뉴</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <SidebarButton href="/" name="전체" />
                </SidebarMenuButton>
              </SidebarMenuItem>
              {category.map(category => (
                <SidebarMenuItem key={category.name + category.id}>
                  <SidebarMenuButton asChild>
                    <SidebarButton
                      href={`/${category.id}`}
                      name={category.name}
                    />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </DesktopSidebar>
  );
}
