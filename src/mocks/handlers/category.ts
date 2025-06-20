import {http, HttpResponse} from 'msw';
import {generateMockCategories} from '@/constants/mocks/mockData';

export function categoryHandler() {
  const mockCategoryList = generateMockCategories();

  return http.get('/api/category', () => {
    return HttpResponse.json(mockCategoryList);
  });
}
