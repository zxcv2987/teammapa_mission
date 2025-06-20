import {Skeleton} from '@/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Skeleton className="h-64 w-full rounded-md my-2" />
      <Skeleton className="h-64 w-full rounded-md my-2" />
      <Skeleton className="h-64 w-full rounded-md my-2" />
      <Skeleton className="h-64 w-full rounded-md my-2" />
    </div>
  );
}
