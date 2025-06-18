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
import OrderItem from './OrderItem';
import {useOrderHistoryStore} from '@/store/orderHistoryStore';

export default function OrderHistoryDialog() {
  const orderHistory = useOrderHistoryStore(state => state.orderHistory);
  const isEmpty = orderHistory.length === 0;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline">
          주문내역
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>주문내역</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {!isEmpty &&
            orderHistory.map(item => (
              <OrderItem key={item.menu.id} item={item} />
            ))}
          {isEmpty && <div>주문내역이 없습니다.</div>}
          <div className="flex flex-row justify-between pt-4">
            <span className="text-xl font-bold text-zinc-900">총 주문금액</span>
            <span className="text-2xl font-bold text-zinc-900">
              {`₩ ${orderHistory.reduce((acc, item) => acc + item.menu.price * item.quantity, 0).toLocaleString()}`}
            </span>
          </div>
        </div>
        <DialogFooter>
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
