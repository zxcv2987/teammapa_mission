'use client';

import {useSuspenseQuery} from '@tanstack/react-query';
import {getMenu} from '../../api/menu';
import {Menu} from '../../type/menu';
import Image from 'next/image';
import {IMAGE_BLUR_DATA_URL} from '@/constants/assets/blurDataURL';
import {queryKeys} from '@/lib/queryKeys';
import AddOrderButton from '../AddOrderButton/AddOrderButton';
import {useRouter} from 'next/navigation';

export default function MenuDetail({
  menuId,
  enableAddOrder = false,
}: {
  menuId: string;
  enableAddOrder?: boolean;
}) {
  const {data: menu} = useSuspenseQuery<Menu>({
    queryKey: queryKeys.menus.detail(Number(menuId)),
    queryFn: () => getMenu(Number(menuId)),
  });
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="w-full h-[500px] relative rounded-md overflow-hidden">
        {menu?.imageUrl && (
          <Image
            src={menu.imageUrl}
            alt={menu.name}
            sizes="100dvw"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-zinc-800">{menu?.name}</h1>
        <span className="text-lg text-red-500">{`₩${menu?.price.toLocaleString()}`}</span>
        <span className="text-sm text-zinc-600">{menu?.description}</span>
      </div>
      {enableAddOrder && (
        <AddOrderButton menu={menu} onClick={() => router.back()}>
          주문하기
        </AddOrderButton>
      )}
    </div>
  );
}
