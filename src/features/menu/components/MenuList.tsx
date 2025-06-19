'use client';

import {Skeleton} from '@/ui/skeleton';
import MenuItem from './MenuItem';
import useInfiniteMenu from '../hook/useInfiniteMenu';

export default function MenuList() {
  const {data, isFetching} = useInfiniteMenu();

  return (
    <div className="flex flex-col gap-4 p-8">
      {isFetching &&
        Array.from({length: 5}).map((_, index) => (
          <Skeleton key={index} className="h-72 w-full rounded-md my-2" />
        ))}
      {data &&
        data.pages.map(page =>
          page.data.map(menu => <MenuItem key={menu.id} menu={menu} />),
        )}
    </div>
  );
}
