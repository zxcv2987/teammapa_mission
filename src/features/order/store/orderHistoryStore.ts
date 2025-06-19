import {OrderItemType} from '@/features/order/type/order';
import {create} from 'zustand';

interface OrderHistoryState {
  orderHistory: OrderItemType[];
  addOrderHistory: (orderHistory: OrderItemType[]) => void;
  getTotalPrice: () => number;
}

export const useOrderHistoryStore = create<OrderHistoryState>((set, get) => ({
  orderHistory: [],
  addOrderHistory: (newOrderItems: OrderItemType[]) => {
    set(state => {
      const updatedOrderHistory = [...state.orderHistory];

      newOrderItems.forEach(newItem => {
        const existingItemIndex = updatedOrderHistory.findIndex(
          existingItem => existingItem.menu.id === newItem.menu.id,
        );

        if (existingItemIndex !== -1) {
          updatedOrderHistory[existingItemIndex] = {
            ...updatedOrderHistory[existingItemIndex],
            quantity:
              updatedOrderHistory[existingItemIndex].quantity +
              newItem.quantity,
          };
        } else {
          updatedOrderHistory.push({
            menu: newItem.menu,
            quantity: newItem.quantity,
          });
        }
      });

      return {orderHistory: updatedOrderHistory};
    });
  },
  getTotalPrice: () => {
    return get().orderHistory.reduce(
      (acc, item) => acc + item.menu.price * item.quantity,
      0,
    );
  },
}));
