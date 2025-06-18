import OrderDialog from '@/components/orderForm/OrderDialog';
import OrderHistoryDialog from '@/components/orderForm/OrderHistoryDialog';
import OrderList from '@/components/orderForm/OrderList';
import TotalPrice from '@/components/orderForm/TotalPrice';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter,
} from '@/components/ui/sidebar';

export default function OrderPage() {
  return (
    <Sidebar collapsible="none" side="right" className="bg-zinc-50 h-screen">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold text-zinc-800 p-4">
            주문서
          </SidebarGroupLabel>
          <SidebarGroupContent className="p-4">
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
