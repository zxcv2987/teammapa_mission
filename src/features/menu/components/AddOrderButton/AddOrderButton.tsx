'use client';

import {useOrderStore} from '@/features/order/store/orderStore';
import {Menu} from '@/features/menu/type/menu';
import {cn} from '@/lib/utils';
import {Button} from '@/ui/button';

export default function AddOrderButton({
  children,
  menu,
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  menu: Menu;
  className?: string;
  onClick?: () => void;
} & React.ComponentProps<'button'>) {
  const addMenu = useOrderStore(state => state.addItem);

  return (
    <Button
      onClick={e => {
        e.stopPropagation();
        addMenu(menu);
        onClick?.();
      }}
      className={cn('cursor-pointer', className)}
      {...props}>
      {children}
    </Button>
  );
}
