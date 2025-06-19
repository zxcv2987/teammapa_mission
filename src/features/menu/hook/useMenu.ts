import {useSuspenseQuery} from '@tanstack/react-query';
import {Menu} from '../type/menu';
import {getAllMenuList} from '../api/menu';

export default function useMenu(categoryId?: number) {
  let menuList: Menu[] | undefined;

  const {data, isLoading, error} = useSuspenseQuery<Menu[]>({
    queryKey: ['menu'],
    queryFn: () => getAllMenuList(),
  });

  if (categoryId) {
    menuList = data?.filter(menu => menu.category.id === Number(categoryId));
  } else {
    menuList = data;
  }

  return {menuList, isLoading, error};
}
