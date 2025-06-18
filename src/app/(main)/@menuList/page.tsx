import {getMenuList} from '@/api/menu';
import MenuList from '@/components/menuList/MenuList';

export default async function MenuListPage() {
  const menuList = await getMenuList();

  return <MenuList menuList={menuList} />;
}
