'use client';

import Link from 'next/link';
import { BaseError } from 'viem';
import { useState } from 'react';
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi';
import { metamask } from '../wagmi';

function shortAddress(address: string | undefined) {
  return address ? `0x${address.substring(3, 7)}...${address.substring(address.length - 4)}` : '';
}

export function Connect() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, error, isLoading, pendingConnector } = useConnect({ connector: metamask });
  const { disconnect } = useDisconnect();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropDown = () => setShowDropdown(!showDropdown);

  return (
    <div>
      {isConnected && (
        <div className="relative">
          <button className="button-submit" onClick={toggleDropDown} type="button">
            {ensName ?? shortAddress(address)}
            <svg className="inline w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
          </button>
          <div className={`absolute p-2 ${showDropdown ? 'block' : 'hidden'}`}>
            <button className="rounded text-primary bg-white border hover:bg-hover dark:hover:bg-hover"
              onClick={() => { setShowDropdown(false); disconnect(); }}>
              Disconnect
            </button>
          </div>
        </div>
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
