import type {Metadata} from 'next';
import {Noto_Sans_KR} from 'next/font/google';
import './globals.css';
import Providers from '@/providers/Providers';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'TeamMapa Mission',
  description: 'TeamMapa Mission',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} antialiased w-full`}>
        <Providers>
          <main className="w-full">{children}</main>
          <div id="modal-root">{modal}</div>
        </Providers>
      </body>
    </html>
  );
}
