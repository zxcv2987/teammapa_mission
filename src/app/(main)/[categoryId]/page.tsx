import {getAllMenuList, getInfiniteMenuList} from '@/features/menu/api/menu';
import MenuList from '@/features/menu/components/MenuList';
import {MenuResponse} from '@/features/menu/type/menu';
import {getQueryClient} from '@/lib/queryClient/getQueryClient';
import {queryKeys} from '@/lib/queryKeys';
import {dehydrate, HydrationBoundary} from '@tanstack/react-query';

export async function generateStaticParams() {
  const res = await getAllMenuList();
  const categoryList = res.data.map(menu => menu.category);

  return categoryList.map(category => ({
    categoryId: category.id.toString(),
  }));
}

export default async function MenuListPage({
  params,
}: {
  params: {categoryId: string};
}) {
  const {categoryId} = params;
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: queryKeys.menus.list(categoryId),
    queryFn: () =>
      getInfiniteMenuList({
        pageParams: 0,
        categoryId: categoryId,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage: MenuResponse) => lastPage.nextCursor,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MenuList categoryId={categoryId} />
    </HydrationBoundary>
  );
}
