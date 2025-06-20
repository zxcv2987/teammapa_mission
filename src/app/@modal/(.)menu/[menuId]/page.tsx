import {getMenu} from '@/features/menu/api/menu';
import MenuDetail from '@/features/menu/components/detail/MenuDetail';
import {getQueryClient} from '@/lib/queryClient/getQueryClient';
import {queryKeys} from '@/lib/queryKeys';
import {dehydrate, HydrationBoundary} from '@tanstack/react-query';

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
      <MenuDetail menuId={params.menuId} enableAddOrder={true} />
    </HydrationBoundary>
  );
}
