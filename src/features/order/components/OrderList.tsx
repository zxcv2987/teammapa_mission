'use client';

import {useOrderStore} from '@/features/order/store/orderStore';
import {Button} from '@/ui/button';
import {Trash2} from 'lucide-react';

export default function OrderList() {
  const orderList = useOrderStore(state => state.items);
  const removeItem = useOrderStore(state => state.removeItem);

  if (orderList.length === 0) {
    return (
      <div className="text-center text-zinc-400 text-xl">
        메뉴를 선택해 주세요..
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 p-4 flex-wrap whitespace-nowrap">
      {orderList.map(order => (
        <div key={order.menu.id} className="flex flex-row gap-2 items-center">
          <span className="flex flex-row gap-2 justify-between w-full p-2 px-4 ">
            <h1 className="text-xl font-bold text-zinc-700">
              {order.menu.name}
            </h1>
            <span className="text-xl text-zinc-700">
              {`x ${order.quantity}`}
            </span>
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeItem(order.menu.id)}
            className="hover:text-red-500 cursor-pointer">
            <Trash2 />
          </Button>
        </div>
      ))}
    </div>
  );
}
