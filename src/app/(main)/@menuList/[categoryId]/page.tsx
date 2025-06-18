import {getMenuListByCategory} from '@/api/menu';
import MenuList from '@/components/menuList/MenuList';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{categoryId: number}>;
}) {
  const {categoryId} = await params;
  const menuList = await getMenuListByCategory(categoryId);
  return <MenuList menuList={menuList} />;
}
