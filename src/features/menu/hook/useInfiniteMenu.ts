'use client';

import {useInfiniteQuery} from '@tanstack/react-query';
import {getInfiniteMenuList} from '../api/menu';
import {useSearchParams} from 'next/navigation';

export default function useInfiniteMenu() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId') || 0;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isFetched,
  } = useInfiniteQuery({
    queryKey: ['menu', categoryId],
    queryFn: ({pageParam = 0}) =>
      getInfiniteMenuList({
        pageParams: pageParam,
        categoryId: Number(categoryId),
      }),
    getNextPageParam: lastPage => lastPage.pageParams,
    initialPageParam: 0,
    enabled: !!categoryId,
  });

  // console.log('---------------------', data, hasNextPage, isFetchingNextPage);

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isFetched,
  };
}
