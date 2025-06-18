'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '../ui/dialog';
import {Button} from '../ui/button';
import {useOrderStore} from '@/store/orderStroe';
import OrderItem from './OrderItem';
import {postOrder} from '@/api/order';
import {useState} from 'react';
import {useOrderHistoryStore} from '@/store/orderHistoryStore';
import {OrderItemType} from '@/types/order';

export default function OrderDialog() {
  const [open, setOpen] = useState(false);
  const orderItems = useOrderStore(state => state.items);
  const totalPrice = useOrderStore(state => state.getTotalPrice());
  const addOrderHistory = useOrderHistoryStore(state => state.addOrderHistory);
  const isEmpty = orderItems.length === 0;

  const handleOrder = async (orderItems: OrderItemType[]) => {
    const res = await postOrder(orderItems);
    console.log(res);
    if (res.status === 200) {
      setOpen(false);
      addOrderHistory(orderItems);
    } else {
      alert('주문에 실패했습니다.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">주문하기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>주문하기</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {!isEmpty &&
            orderItems.map(item => (
              <OrderItem key={item.menu.id} item={item} />
            ))}
          {isEmpty && <div>주문할 메뉴를 선택해 주세요.</div>}
          <div className="flex flex-row justify-between pt-4">
            <span className="text-xl font-bold text-zinc-900">총 주문금액</span>
            <span className="text-2xl font-bold text-zinc-900">
              {`₩ ${totalPrice.toLocaleString()}`}
            </span>
          </div>
        </div>
        <DialogFooter>
          <Button size="lg" onClick={handleOrder}>
            주문하기
          </Button>
          <DialogClose asChild>
            <Button size="lg" variant="outline">
              취소
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
