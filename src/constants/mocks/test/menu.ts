import {Menu} from '@/features/menu/type/menu';

export const mockMenu: Menu = {
  id: 1,
  name: '테스트 메뉴',
  price: 10000,
  imageUrl: 'test.jpg',
  description: '맛있는 테스트 메뉴입니다.',
  totalSales: 100,
  isNew: true,
  category: {
    id: 'test-category',
    name: '테스트 카테고리',
  },
};
