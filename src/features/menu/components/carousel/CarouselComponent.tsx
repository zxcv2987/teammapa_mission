import {dehydrate, HydrationBoundary} from '@tanstack/react-query';
import BestMenuCarousel from './BestMenuCarousel';
import {queryKeys} from '@/lib/queryKeys';
import {getBestMenuList} from '../../api/menu';
import {getQueryClient} from '@/lib/queryClient/getQueryClient';

export default async function CarouselComponent() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: queryKeys.menus.best(),
    queryFn: getBestMenuList,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BestMenuCarousel />
    </HydrationBoundary>
  );
}
