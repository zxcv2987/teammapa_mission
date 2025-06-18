import {http, HttpResponse} from 'msw';

export function orderHandler() {
  return http.post('/api/order', async ({request}) => {
    const order = await request.json();
    if (Array.isArray(order) && order.length !== 0) {
      return HttpResponse.json({
        status: 200,
        message: 'Order posted successfully',
      });
    }
    return HttpResponse.json({
      status: 400,
      message: 'order is required',
    });
  });
}
