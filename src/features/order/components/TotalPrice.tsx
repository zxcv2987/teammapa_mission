'use client';

import {useOrderStore} from '@/features/order/store/orderStore';

export default function TotalPrice() {
  const totalPrice = useOrderStore(state => state.getTotalPrice());
  return (
    <div className="flex flex-row font-bold gap-2 justify-between w-full items-center p-2 border-y border-zinc-200">
      <span className="text-lg">합계</span>
      <span className="text-xl">{`₩${totalPrice.toLocaleString()}`}</span>
    </div>
  );
}
