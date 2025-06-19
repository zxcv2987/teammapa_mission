import {OrderItemType} from '@/features/order/type/order';
import {apiClient} from '../../../lib/apiClient';

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
