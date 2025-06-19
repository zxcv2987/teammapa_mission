import {postOrder} from '@/features/order/api/order';
import {useOrderHistoryStore} from '@/features/order/store/orderHistoryStore';
import {useOrderStore} from '@/features/order/store/orderStore';
import {OrderItemType} from '@/features/order/type/order';
import {useMutation} from '@tanstack/react-query';

export default function useOrder({onSuccess}: {onSuccess?: () => void}) {
  const clearOrder = useOrderStore(state => state.clearOrder);
  const addOrderHistory = useOrderHistoryStore(state => state.addOrderHistory);

  const {
    mutate: order,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (orderItems: OrderItemType[]) => postOrder(orderItems),
    onSuccess: (data, variables) => {
      if (data.status === 200) {
        addOrderHistory(variables);
        clearOrder();
        onSuccess?.();
      } else {
        alert('주문에 실패했습니다. 다시 시도해 주세요.');
      }
    },
    onError: error => {
      console.error('주문 처리 중 에러 발생:', error);
      alert('주문에 실패했습니다. 다시 시도해 주세요.');
    },
  });

  const orderList = useOrderStore(state => state.items);
  const totalPrice = useOrderStore(state => state.getTotalPrice());

  return {order, isPending, isSuccess, orderList, totalPrice};
}
