'use client';

import {queryKeys} from '@/lib/queryKeys';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/ui/carousel';
import {useSuspenseQuery} from '@tanstack/react-query';
import Autoplay from 'embla-carousel-autoplay';
import {getBestMenuList} from '../../api/menu';
import Link from 'next/link';

export default function BestMenuCarousel() {
  const {data: bestMenus} = useSuspenseQuery({
    queryKey: queryKeys.menus.best(),
    queryFn: getBestMenuList,
  });
  return (
    <div className="w-full max-w-3xl mx-auto p-2">
      <h2 className="text-xl font-semibold"> best menu</h2>
      <Carousel
        plugins={[Autoplay({delay: 3000})]}
        className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {bestMenus.map(menu => (
            <CarouselItem key={menu.id}>
              <Link href={`/menu/${menu.id}`} className="p-1">
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 flex flex-col justify-center items-center text-center h-full">
                  <h3 className="text-2xl font-bold text-orange-500">
                    {menu.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                    {menu.description}
                  </p>
                  <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mt-4">
                    ₩{menu.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
