'use client';

import { BaseError } from 'viem';
import Link from 'next/link';
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi';

function shortAddress(address: string | undefined) {
  return address ? `0x${address.substring(3, 7)}...${address.substring(address.length - 4)}` : '';
}

export function Connect() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const metamask = connectors[0];

  return (
    <div>
      {isConnected && (
        <button onClick={() => disconnect()}>
          {ensName ?? shortAddress(address)}
        </button>
      )}

      {metamask.ready && connector?.id !== metamask.id && <button key={metamask.id} onClick={() => connect({ connector: metamask })}>
        Connect
        {isLoading && metamask.id === pendingConnector?.id && ' (connecting)'}
      </button>}

      {!metamask.ready && <Link href="https://metamask.io/" target="_blank">
        <button>Install Metamask</button>
      </Link>}

      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  );
}
