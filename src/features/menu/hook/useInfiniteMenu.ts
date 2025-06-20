'use client';

import {useInfiniteQuery} from '@tanstack/react-query';
import {getInfiniteMenuList} from '../api/menu';
import {queryKeys} from '@/lib/queryKeys';

export default function useInfiniteMenu(categoryId?: string) {
  return useInfiniteQuery({
    queryKey: queryKeys.menus.list(categoryId),
    queryFn: ({pageParam = 0}) =>
      getInfiniteMenuList({
        pageParams: Number(pageParam),
        categoryId: categoryId,
      }),
    getNextPageParam: lastPage => lastPage.nextCursor,
    initialPageParam: 0,
    enabled: !!categoryId,
  });
}
