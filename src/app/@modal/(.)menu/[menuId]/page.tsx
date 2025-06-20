import {getMenu} from '@/features/menu/api/menu';
import MenuDetail from '@/features/menu/components/detail/MenuDetail';
import {getQueryClient} from '@/lib/queryClient/getQueryClient';
import {queryKeys} from '@/lib/queryKeys';
import {Skeleton} from '@/ui/skeleton';
import {dehydrate, HydrationBoundary} from '@tanstack/react-query';
import {Suspense} from 'react';

export default async function MenuDetailModalPage({
  params,
}: {
  params: {menuId: string};
}) {
  const menuId = Number(params.menuId);

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.menus.detail(menuId),
    queryFn: () => getMenu(menuId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Skeleton className="h-72 w-full rounded-md my-2" />}>
        <MenuDetail menuId={params.menuId} enableAddOrder={true} />
      </Suspense>
    </HydrationBoundary>
  );
}
