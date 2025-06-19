'use client';

import {useOrderStore} from '@/features/order/store/orderStore';

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
    <div className="flex flex-col gap-4 p-4">
      {orderList.map(order => (
        <button
          key={order.menu.id}
          className="flex flex-row gap-2"
          onClick={() => removeItem(order.menu.id)}>
          <div className="flex flex-row gap-2 justify-between w-full hover:bg-muted p-2 px-4 rounded-md">
            <h1 className="text-xl font-bold text-zinc-700">
              {order.menu.name}
            </h1>
            <span className="text-xl text-zinc-700">
              {`x ${order.quantity}`}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
