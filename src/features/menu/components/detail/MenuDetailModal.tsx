'use client';

import {Dialog, DialogContent} from '@/ui/dialog';
import {
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from '@radix-ui/react-dialog';
import {useRouter} from 'next/navigation';

export default function MenuDetailModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogOverlay>
        <DialogContent>
          <DialogTitle>메뉴 상세</DialogTitle>
          <DialogDescription />
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
