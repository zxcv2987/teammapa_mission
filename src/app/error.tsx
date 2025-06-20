'use client'; // Error boundaries must be Client Components

import {Button} from '@/ui/button';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 h-screen">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </Button>
      <Button variant="outline" onClick={() => router.back()}>
        Go back
      </Button>
    </div>
  );
}
