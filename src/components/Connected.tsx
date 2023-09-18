'use client';

import { useAccount } from 'wagmi';
import { Splash } from './Splash';

export function Connected({ children }: { children: React.ReactNode; }) {
  const { isConnected } = useAccount();

  return isConnected ? <>{children}</> : <Splash />;
}
