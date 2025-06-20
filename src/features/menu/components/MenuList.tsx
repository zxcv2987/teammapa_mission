'use client';

import {Skeleton} from '@/ui/skeleton';
import MenuItem from './MenuItem/MenuItem';
import useInfiniteMenu from '../hook/useInfiniteMenu';
import {Loader2} from 'lucide-react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

export default function MenuList({categoryId}: {categoryId?: string}) {
  const {data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage} =
    useInfiniteMenu(categoryId);

  const {ref} = useInfiniteScroll({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <div className="flex flex-col gap-4 p-8">
      {isFetching &&
        !data &&
        Array.from({length: 5}).map((_, index) => (
          <Skeleton key={index} className="h-72 w-full rounded-md my-2" />
        ))}
      {data?.pages.map(page =>
        page.data.map(menu => <MenuItem key={menu.id} menu={menu} />),
      )}

      {data?.pages[0].data.length === 0 && (
        <div className="flex justify-center items-center py-8">
          <p className="text-zinc-600 dark:text-zinc-400">
            조회된 메뉴가 없습니다.
          </p>
        </div>
      )}

      <div ref={ref} className="h-1" />

      {isFetchingNextPage && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      )}
    </div>
  );
}
