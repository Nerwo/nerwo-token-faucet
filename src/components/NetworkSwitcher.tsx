'use client';

import { useEffect } from 'react';
import { useWizard } from 'react-use-wizard';
import { sepolia, useNetwork, useSwitchNetwork } from 'wagmi';

export function NetworkSwitcher() {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
  const { nextStep } = useWizard();

  useEffect(() => {
    if (chain?.id === sepolia.id) {
      nextStep();
    }
  }, [chain, nextStep]);

  return (
    <div>
      {switchNetwork && (
        <div>
          Switch to:{' '}
          {chains.map((x) =>
            x.id === chain?.id ? null : (
              <button key={x.id} onClick={() => switchNetwork(x.id)}>
                {x.name}
                {isLoading && x.id === pendingChainId && ' (switching)'}
              </button>
            ),
          )}
        </div>
      )}

      <div>{error?.message}</div>
    </div>
  );
}
