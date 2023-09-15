import './globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <html lang="en">
      <body>
        <Providers>
          <Navbar />{children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
