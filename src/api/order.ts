import {OrderItemType} from '@/types/order';
import {apiClient} from './apiClient';

export async function postOrder(order: OrderItemType[]) {
  return await apiClient({
    path: '/api/order',
    options: {
      method: 'POST',
      body: JSON.stringify(order),
    },
  });
}
