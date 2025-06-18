import {Menu} from '@/types/menu';
import {apiClient} from './apiClient';

export async function getMenuList(): Promise<Menu[]> {
  const response = await apiClient({
    path: '/api/menu',
    options: {
      method: 'GET',
    },
  });
  return response;
}

export async function getMenuListByCategory(
  categoryId: number,
): Promise<Menu[]> {
  const response = await apiClient({
    path: `/api/menu/${categoryId}`,
    options: {
      method: 'GET',
    },
  });
  return response;
}
