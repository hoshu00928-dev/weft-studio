import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, OGP_IMAGE } from '@/lib/site';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

const title = `${SITE_NAME} — ふたりらしい式をつくる、タペストリー`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: { type: 'website', siteName: SITE_NAME, title, description: SITE_DESCRIPTION, images: [OGP_IMAGE], locale: 'ja_JP' },
  twitter: { card: 'summary_large_image', title, description: SITE_DESCRIPTION, images: [OGP_IMAGE] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={geist.variable}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
