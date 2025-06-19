import {Category} from '@/features/sidebar/type/category';
import {apiClient} from '@/lib/apiClient';

export async function getCategoryList(): Promise<Category[]> {
  const response = await apiClient({
    path: '/api/category',
    options: {
      method: 'GET',
    },
  });
  return response;
}
