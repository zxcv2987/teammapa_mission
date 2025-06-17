import {http, HttpResponse} from 'msw';
import {faker} from '@faker-js/faker';
import {Menu} from '@/types/menu';
import {
  generateMockCategories,
  getMenusByCategory,
  PRICE_RANGES,
} from '@/mocks/mockData';

const generateFoodImageUrl = (
  categoryName: string,
  menuName: string,
  id: number,
) => {
  const categoryKeywords = {
    한식: 'korean-food',
    중식: 'chinese-food',
    일식: 'japanese-food,sushi',
    양식: 'western-food,pasta',
    분식: 'korean-street-food',
    치킨: 'fried-chicken',
    피자: 'pizza',
    버거: 'burger',
    카페: 'coffee,cafe',
    디저트: 'dessert,cake',
    샐러드: 'salad',
    도시락: 'bento,rice-bowl',
    찜닭: 'chicken-stew',
    족발보쌈: 'korean-pork',
    '회/초밥': 'sashimi,sushi',
  };

  const keyword =
    categoryKeywords[categoryName as keyof typeof categoryKeywords] || 'food';

  return `https://source.unsplash.com/400x300/?${keyword}&${id}`;
};

export function menuHandler() {
  const categories = generateMockCategories();

  const mockMenuList: Menu[] = [];
  let menuId = 1;

  categories.forEach(category => {
    const menuNames = getMenusByCategory(category.name);
    const priceRange = PRICE_RANGES[
      category.name as keyof typeof PRICE_RANGES
    ] || {min: 5000, max: 20000};

    const menuCount = faker.number.int({min: 1, max: 4});

    for (let i = 0; i < menuCount && i < menuNames.length; i++) {
      const menuName = faker.helpers.arrayElement(menuNames);

      if (!mockMenuList.find(menu => menu.name === menuName)) {
        mockMenuList.push({
          id: menuId++,
          name: menuName,
          price: faker.number.int(priceRange),
          description: `${faker.food.description()}`,
          imageUrl: generateFoodImageUrl(category.name, menuName, menuId),
          totalSales: faker.number.int({min: 0, max: 500}),
          category: {
            id: category.id,
            name: category.name,
          },
        });
      }
    }
  });

  return http.get('/api/menu', () => {
    return HttpResponse.json(mockMenuList);
  });
}
