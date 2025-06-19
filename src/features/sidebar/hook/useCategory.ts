'use client';

import {useSuspenseQuery} from '@tanstack/react-query';
import {getCategoryList} from '../api/category';
import {Category} from '../type/category';
import {queryKeys} from '@/lib/queryKeys';

export default function useCategory() {
  const {
    data: categoryList,
    isLoading,
    error,
  } = useSuspenseQuery<Category[]>({
    queryKey: queryKeys.categories.list(),
    queryFn: () => getCategoryList(),
  });

  return {categoryList, isLoading, error};
}
