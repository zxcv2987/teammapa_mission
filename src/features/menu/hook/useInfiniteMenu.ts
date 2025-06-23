'use client';

import {useInfiniteQuery} from '@tanstack/react-query';
import {getInfiniteMenuList} from '../api/menu';
import {queryKeys} from '@/lib/queryKeys';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

export default function useInfiniteMenu(categoryId?: string) {
  const {ref, inView} = useInView();

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching} =
    useInfiniteQuery({
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

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    ref,
  };
}
