import {RequestHandler} from 'msw';
import {
  bestMenuHnadler,
  menuByCategoryHandler,
  menuHandler,
} from './handlers/menu';
import {categoryHandler} from './handlers/category';
import {orderHandler} from './handlers/order';

export const handlers: Array<RequestHandler> = [
  menuHandler(),
  categoryHandler(),
  menuByCategoryHandler(),
  orderHandler(),
  bestMenuHnadler(),
];
