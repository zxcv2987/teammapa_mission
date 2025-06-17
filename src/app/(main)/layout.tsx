import {SidebarProvider} from '@/components/ui/sidebar';

export default function MainLayout({
  sidebar,
  order,
  menuList,
}: {
  sidebar: React.ReactNode;
  order: React.ReactNode;
  menuList: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <SidebarProvider defaultOpen={true}>{sidebar}</SidebarProvider>
      <div className="w-full">{menuList}</div>
      {order}
    </div>
  );
}
