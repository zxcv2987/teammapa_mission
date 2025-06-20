import {getAllMenuList, getMenu} from '@/features/menu/api/menu';
import MenuDetail from '@/features/menu/components/detail/MenuDetail';
import {getQueryClient} from '@/lib/queryClient/getQueryClient';
import {queryKeys} from '@/lib/queryKeys';
import {dehydrate, HydrationBoundary} from '@tanstack/react-query';

export async function generateStaticParams() {
  const res = await getAllMenuList();
  const menuIdList = res.data.map(menu => menu.id.toString());
  return menuIdList.map(menuId => ({
    menuId: menuId,
  }));
}

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
