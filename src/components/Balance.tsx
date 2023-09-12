'use client';

import { useAccount, useBalance } from 'wagmi';

export function AccountBalance() {
  const { address } = useAccount();
  const { data, refetch } = useBalance({
    address,
    token: process.env.NEXT_PUBLIC_NERWO_TOKEN_ADDRESS,
    watch: true,
  });

  return (
    <div>
      {data?.formatted}
      <button onClick={() => refetch()}>refetch</button>
    </div>
  );
}
