'use client';

import {useOrderStore} from '@/store/orderStroe';

export default function OrderList() {
  const orderList = useOrderStore(state => state.items);
  if (orderList.length === 0) {
    return (
      <div className="text-center text-zinc-400 text-xl">
        메뉴를 선택해 주세요..
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 p-4">
      {orderList.map(order => (
        <div key={order.menu.id} className="flex flex-row gap-2">
          <div className="flex flex-row gap-2 justify-between w-full">
            <h1 className="text-xl font-bold text-zinc-700">
              {order.menu.name}
            </h1>
            <span className="text-xl text-zinc-700">
              {`x ${order.quantity}`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
