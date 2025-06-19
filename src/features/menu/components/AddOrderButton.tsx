'use client';

import {useOrderStore} from '@/features/order/store/orderStore';
import {Menu} from '@/features/menu/type/menu';

export default function AddOrderButton({
  children,
  menu,
  ...props
}: {
  children: React.ReactNode;
  menu: Menu;
} & React.ComponentProps<'button'>) {
  const addMenu = useOrderStore(state => state.addItem);
  return (
    <button onClick={() => addMenu(menu)} {...props}>
      {children}
    </button>
  );
}
