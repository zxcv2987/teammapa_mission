import {Menu, MenuResponse} from '@/features/menu/type/menu';
import {apiClient} from '@/lib/apiClient';

export async function getAllMenuList(): Promise<MenuResponse> {
  const response = await apiClient({
    path: '/api/all-menu',
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
  categoryId?: string;
  pageParams: number;
}): Promise<MenuResponse> {
  const response = await apiClient({
    path: `/api/menu?pageParams=${pageParams}&categoryId=${categoryId}`,
    options: {
      method: 'GET',
    },
  });

  return {
    data: response.data,
    nextCursor: response.nextCursor,
  };
}

export async function getMenu(menuId: number): Promise<Menu> {
  const response = await apiClient({
    path: `/api/menu?menuId=${menuId}`,
    options: {
      method: 'GET',
    },
  });
  return response;
}

export async function getBestMenuList(): Promise<Menu[]> {
  const response = await apiClient({
    path: '/api/best',
    options: {
      method: 'GET',
    },
  });
  return response;
}
