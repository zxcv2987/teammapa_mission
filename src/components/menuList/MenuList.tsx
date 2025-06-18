import {Menu} from '@/types/menu';
import AddOrderButton from './AddOrderButton';

export default function MenuList({menuList}: {menuList: Menu[]}) {
  return (
    <div className="flex flex-col gap-4 p-8">
      {menuList.map(menu => (
        <AddOrderButton
          key={menu.id}
          menu={menu}
          className="flex flex-col w-full text-left cursor-pointer hover:bg-muted rounded-md p-2">
          <h1 className="text-2xl font-bold text-zinc-800">{menu.name}</h1>
          <span className="text-lg text-red-500">{`₩${menu.price.toLocaleString()}`}</span>
          <span className="text-sm text-zinc-600">{menu.description}</span>
        </AddOrderButton>
      ))}
    </div>
  );
}
