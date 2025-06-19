import {IMAGE_BLUR_DATA_URL} from '@/contants/assets/blurDataURL';
import {Menu} from '../type/menu';
import AddOrderButton from './AddOrderButton';
import Image from 'next/image';

export default function MenuItem({menu}: {menu: Menu}) {
  return (
    <AddOrderButton
      key={menu.id}
      menu={menu}
      className="flex flex-col w-full text-left cursor-pointer hover:bg-muted rounded-md p-2">
      <div className="flex flex-row gap-4">
        <div className="w-[300px] h-[200px] relative rounded-md overflow-hidden">
          <Image
            className="object-cover"
            src={menu.imageUrl}
            alt={menu.name}
            sizes="300px"
            fill
            placeholder="blur"
            blurDataURL={IMAGE_BLUR_DATA_URL}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-2xl font-bold text-zinc-800">{menu.name}</h1>
          <span className="text-lg text-red-500">{`₩${menu.price.toLocaleString()}`}</span>
          <span className="text-sm text-zinc-600">{menu.description}</span>
        </div>
      </div>
    </AddOrderButton>
  );
}
