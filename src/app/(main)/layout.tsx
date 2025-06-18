import {ScrollArea} from '@/components/ui/scroll-area';
import {SidebarProvider} from '@/components/ui/sidebar';

export default function MainLayout({
  sidebar,
  orderForm,
  menuList,
}: {
  sidebar: React.ReactNode;
  orderForm: React.ReactNode;
  menuList: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-full">
      <SidebarProvider className="w-fit">{sidebar}</SidebarProvider>
      <ScrollArea className="w-full flex items-start">{menuList}</ScrollArea>
      <SidebarProvider className="w-fit h-full">{orderForm}</SidebarProvider>
    </div>
  );
}
