import './globals.css';
import { Providers } from './providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Nerwo Token Faucet',
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
