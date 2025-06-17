import {Category} from '@/types/category';
import {apiClient} from './apiClient';

export async function getCategoryList(): Promise<Category[]> {
  const response = await apiClient({
    path: '/api/category',
    options: {
      method: 'GET',
    },
  });
  return response;
}
