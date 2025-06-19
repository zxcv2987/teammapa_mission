import {faker} from '@faker-js/faker';
import {
  generateMockCategories,
  getMenusByCategory,
  PRICE_RANGES,
} from './mockData';
import {Menu} from '@/features/menu/type/menu';

export const generateFoodImageUrl = () => {
  const foodIds = [312, 292, 431, 102, 225, 96, 175, 291, 365, 459];
  const randomId = foodIds[Math.floor(Math.random() * foodIds.length)];

  return `https://picsum.photos/id/${randomId}/300/200`;
};

export const generateMockMenuList = () => {
  const categories = generateMockCategories();

  const mockMenuList: Menu[] = [];
  let menuId = 1;

  categories.forEach(category => {
    const menuNames = getMenusByCategory(category.name);
    const priceRange = PRICE_RANGES[
      category.name as keyof typeof PRICE_RANGES
    ] || {min: 5000, max: 20000};

    const menuCount = faker.number.int({min: 1, max: 8});

    for (let i = 0; i < menuCount && i < menuNames.length; i++) {
      const menuName = faker.helpers.arrayElement(menuNames);

      if (!mockMenuList.find(menu => menu.name === menuName)) {
        mockMenuList.push({
          id: menuId++,
          name: menuName,
          price: Math.round(faker.number.int(priceRange) / 1000) * 1000,
          description: `${faker.food.description()}`,
          imageUrl: generateFoodImageUrl(),
          totalSales: faker.number.int({min: 0, max: 500}),
          isNew: faker.helpers.maybe(() => true, {probability: 0.3}) ?? false,
          category: {
            id: category.id,
            name: category.name,
          },
        });
      }
    }
  });
  return mockMenuList;
};
