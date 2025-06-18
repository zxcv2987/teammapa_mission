import {OrderItemType} from '@/types/order';
import {apiClient} from './apiClient';

export async function postOrder(order: OrderItemType[]) {
  const response = await apiClient({
    path: '/api/order',
    options: {
      method: 'POST',
      body: JSON.stringify(order),
    },
  });

  return response;
}
