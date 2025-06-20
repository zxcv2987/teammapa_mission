'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/ui/dialog';
import {Button} from '@/ui/button';
import OrderList from '../OrderList';
import TotalPrice from '../TotalPrice';
import {useState} from 'react';
import useOrder from '@/features/order/hook/useOrder';
import {DialogTrigger} from '@radix-ui/react-dialog';

export default function OrderDialog() {
  const [open, setOpen] = useState(false);
  const {order, isPending, orderList} = useOrder({
    onSuccess: () => {
      setOpen(false);
    },
  });

  const handleOrder = () => {
    order(orderList);
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
        <OrderList />
        <TotalPrice />
        <DialogFooter>
          <Button
            size="lg"
            onClick={handleOrder}
            disabled={isPending || orderList.length === 0}>
            {isPending ? '주문 중...' : '주문하기'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
