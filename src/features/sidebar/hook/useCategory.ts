'use client';

import {useSuspenseQuery} from '@tanstack/react-query';
import {getCategoryList} from '../api/category';
import {Category} from '../type/category';

export default function useCategory() {
  const {
    data: categoryList,
    isLoading,
    error,
  } = useSuspenseQuery<Category[]>({
    queryKey: ['category'],
    queryFn: () => getCategoryList(),
  });

  return {categoryList, isLoading, error};
}
