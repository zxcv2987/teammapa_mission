import {Menu, MenuResponse} from '@/features/menu/type/menu';
import {apiClient} from '@/lib/apiClient';

export async function getAllMenuList(): Promise<Menu[]> {
  const response = await apiClient({
    path: '/api/menu',
    options: {
      method: 'GET',
    },
  });
  return response;
}

export async function getInfiniteMenuList({
  categoryId,
  pageParams,
}: {
  categoryId?: number;
  pageParams: number;
}): Promise<MenuResponse> {
  const response = await apiClient({
    path: `/api/menu?pageParams=${pageParams}&category=${categoryId}`,
    options: {
      method: 'GET',
    },
  });

  console.log('response', response);
  return {data: response.data, pageParams: pageParams + 10};
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
