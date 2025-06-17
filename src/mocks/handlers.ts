import {RequestHandler} from 'msw';
import {menuHandler} from './handlers/menu';
import {categoryHandler} from './handlers/category';

export const handlers: Array<RequestHandler> = [
  menuHandler(),
  categoryHandler(),
];
