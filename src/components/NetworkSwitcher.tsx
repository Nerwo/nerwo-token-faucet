'use client';

import { useEffect } from 'react';
import { useWizard } from 'react-use-wizard';
import { sepolia, useNetwork, useSwitchNetwork } from 'wagmi';

export function NetworkSwitcher() {
  const { chain } = useNetwork();
  const { error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
  const { nextStep } = useWizard();

  useEffect(() => {
    if (chain?.id === sepolia.id) {
      nextStep();
    }
  }, [chain, nextStep]);

  return (
    <div className="wizard-content">
      <h1 className="text-center">Switch to Sepolia Network</h1>
      <div>Switch to Sepolia network clicking the button below.</div>
      {switchNetwork && (
        <div className="text-center">
          <button key={sepolia.id} onClick={() => switchNetwork(sepolia.id)}>
            Switch
            {isLoading && sepolia.id === pendingChainId && ' (switching)'}
          </button>
        </div>
      )}
      <div>{error?.message}</div>
    </div>
  );
}
