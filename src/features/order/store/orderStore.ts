import {create} from 'zustand';
import {Menu} from '@/features/menu/type/menu';
import {OrderItemType} from '@/features/order/type/order';

export interface OrderState {
  items: OrderItemType[];
  totalPrice: number;

  addItem: (menu: Menu) => void;
  removeItem: (menuId: number) => void;
  updateQuantity: (menuId: number, quantity: number) => void;
  clearOrder: () => void;

  getItemCount: () => number;
  getTotalPrice: () => number;
}

export const useOrderStore = create<OrderState>((set, get) => ({
  items: [],
  totalPrice: 0,

  addItem: (menu: Menu) => {
    set(state => {
      const existingItem = state.items.find(item => item.menu.id === menu.id);

      if (existingItem) {
        // 이미 있는 아이템이면 수량 증가
        return {
          items: state.items.map(item =>
            item.menu.id === menu.id
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        };
      } else {
        // 새로운 아이템 추가
        return {
          items: [...state.items, {menu, quantity: 1}],
        };
      }
    });
  },

  removeItem: (menuId: number) => {
    set(state => ({
      items: state.items.filter(item => item.menu.id !== menuId),
    }));
  },

  updateQuantity: (menuId: number, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(menuId);
      return;
    }

    set(state => ({
      items: state.items.map(item =>
        item.menu.id === menuId ? {...item, quantity} : item,
      ),
    }));
  },

  clearOrder: () => {
    set({items: []});
  },

  getItemCount: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.menu.price * item.quantity,
      0,
    );
  },
}));
