import CarouselComponent from '@/features/menu/components/carousel/CarouselComponent';
import OrderComponent from '@/features/order/components/OrderComponent';
import SidebarComponent from '@/features/sidebar/components/SidebarComponent';
import {ScrollArea} from '@/ui/scroll-area';
import {SidebarProvider} from '@/ui/sidebar';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-row h-screen">
      <SidebarProvider>
        <SidebarComponent />
        <div className="flex flex-col flex-1 w-full">
          <CarouselComponent />
          <ScrollArea className="w-full flex items-start flex-1 overflow-y-auto">
            {children}
          </ScrollArea>
        </div>
        <OrderComponent />
      </SidebarProvider>
    </div>
  );
}
