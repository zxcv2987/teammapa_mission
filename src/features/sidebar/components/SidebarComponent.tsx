import {getCategoryList} from '@/features/sidebar/api/category';
import CategorySidebar from '@/features/sidebar/components/CategorySidebar';
import {getQueryClient} from '@/lib/queryClient/getQueryClient';
import {queryKeys} from '@/lib/queryKeys';
import {HydrationBoundary, dehydrate} from '@tanstack/react-query';

export default async function SidebarComponent() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.categories.list(),
    queryFn: getCategoryList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategorySidebar />
    </HydrationBoundary>
  );
}
