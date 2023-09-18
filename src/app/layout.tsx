import './globals.css';
import { Unbounded, Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Providers } from './providers';
import { Navbar, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const unbounded = Unbounded({ subsets: ['latin'], variable: '--font-unbounded' });

export const metadata: Metadata = {
  title: 'Nerwo Token Faucet',
  description: 'Nerwo platform test token faucet',
  openGraph: {
    type: 'website',
    title: 'Nerwo Token Faucet',
    siteName: 'Nerwo Token Faucet',
    description: 'Nerwo platform test token faucet',
    images: '/nerwo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${unbounded.variable} ${inter.variable}`} lang="en">
      <body>
        <Providers>
          <Navbar />{children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
