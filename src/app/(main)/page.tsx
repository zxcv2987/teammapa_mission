import {getInfiniteMenuList} from '@/features/menu/api/menu';
import MenuList from '@/features/menu/components/MenuList';
import {MenuResponse} from '@/features/menu/type/menu';
import {getQueryClient} from '@/lib/queryClient/getQueryClient';
import {queryKeys} from '@/lib/queryKeys';
import {dehydrate, HydrationBoundary} from '@tanstack/react-query';

export default async function MenuPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: queryKeys.menus.list('all'),
    queryFn: () => getInfiniteMenuList({pageParams: 0}),
    initialPageParam: 0,
    getNextPageParam: (lastPage: MenuResponse) => lastPage.nextCursor,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MenuList />
    </HydrationBoundary>
  );
}
