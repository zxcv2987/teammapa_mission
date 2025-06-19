import {OrderItemType} from '@/faetures/order/type/order';

export default function OrderItem({item}: {item: OrderItemType}) {
  return (
    <div className="flex flex-col py-1 ">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2">
          <span className="text-lg font-bold text-zinc-900">
            {item.menu.name}
          </span>
          <span className="font-bold text-lg text-zinc-500">
            x{item.quantity}
          </span>
        </div>
        <div className="text-lg font-bold text-zinc-900">
          {`₩ ${(item.menu.price * item.quantity).toLocaleString()}`}
        </div>
      </div>
    </div>
  );
}
