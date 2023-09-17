'use client';

import { useAccount } from 'wagmi';
import Image from 'next/image';

import faucet from '@/public/faucet.webp';

export function Connected({ children }: { children: React.ReactNode; }) {
  const { isConnected } = useAccount();

  return isConnected ? <>{children}</> : (
    <Image
      className="mx-auto w-auto opacity-75"
      src={faucet}
      alt="Token Faucet"
      width={1024} height={1024}
    />);
}
