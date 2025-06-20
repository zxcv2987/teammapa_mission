import OrderDialog from '@/features/order/components/dialog/OrderDialog';
import OrderHistoryDialog from '@/features/order/components/dialog/OrderHistoryDialog';
import OrderList from '@/features/order/components/OrderList';
import TotalPrice from '@/features/order/components/TotalPrice';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter,
} from '@/ui/sidebar';

export default function OrderComponent() {
  return (
    <Sidebar collapsible="none" side="right" className="bg-zinc-50 h-screen">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold text-zinc-800 p-4">
            주문서
          </SidebarGroupLabel>
          <SidebarGroupContent className="p-2 text">
            <OrderList />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <TotalPrice />
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2 p-2">
            <OrderHistoryDialog />
            <OrderDialog />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
