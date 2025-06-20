import {IMAGE_BLUR_DATA_URL} from '@/constants/assets/blurDataURL';
import {Menu} from '../../type/menu';
import AddOrderButton from '../AddOrderButton/AddOrderButton';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuItem({menu}: {menu: Menu}) {
  return (
    <div className="flex flex-col w-full text-left rounded-md p-2 gap-2 hover:bg-muted">
      <Link href={`/menu/${menu.id}`} className="flex flex-row gap-4">
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
          {menu.isNew && (
            <div className="absolute top-0 left-0 bg-red-400 text-white px-2 py-1 rounded-md">
              New
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-2xl font-bold text-zinc-800">{menu.name}</h1>
          <span className="text-lg text-red-500">{`₩${menu.price.toLocaleString()}`}</span>
          <span className="text-sm text-zinc-600">{menu.description}</span>
        </div>
      </Link>
      <div className="flex justify-end">
        <AddOrderButton
          menu={menu}
          className="bg-zinc-900 text-white hover:bg-orange-400 p-2 px-6 rounded-md w-fit">
          메뉴담기
        </AddOrderButton>
      </div>
    </div>
  );
}
