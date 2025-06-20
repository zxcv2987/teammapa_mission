import MenuDetailModal from '@/features/menu/components/detail/MenuDetailModal';

export default function ModalLayout({children}: {children: React.ReactNode}) {
  return <MenuDetailModal>{children}</MenuDetailModal>;
}
