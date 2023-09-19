'use client';

import { useEffect, useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { BaseError, parseUnits } from 'viem';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { nerwoTokenConfig } from './contracts';
import { useDebounce } from '../hooks/useDebounce';

const DEFAULT_AMOUNT = '1000';

export function MintToken() {
  const [amount, setTokenId] = useState(DEFAULT_AMOUNT);
  const debouncedAmount = useDebounce(amount);
  const { nextStep } = useWizard();

  const { config } = usePrepareContractWrite({
    ...nerwoTokenConfig,
    functionName: 'mint',
    enabled: Boolean(debouncedAmount),
    args: [parseUnits(debouncedAmount, process.env.NEXT_PUBLIC_NERWO_TOKEN_DECIMALS)],
  });
  const { write, data, error, isLoading, isError } = useContractWrite(config);
  const { isLoading: isPending, isSuccess } = useWaitForTransaction({ hash: data?.hash });

  useEffect(() => {
    if (isSuccess) {
      nextStep();
    }
  }, [isSuccess, nextStep]);

  return (
    <div className="wizard-content">
      <h1 className="text-center">Mint Nerwo Test Tokens</h1>
      <div className="font-medium">Click the button below to mint as many as you want Nerwo test USDT like tokens (for free).
        These tokens are used to do testing inside the Nerwo platform.</div>
      <div className="text-center">
        <form onSubmit={(e) => {
          e.preventDefault();
          write?.();
        }}>
          <input
            placeholder="Amount"
            defaultValue={DEFAULT_AMOUNT}
            onChange={(e) => setTokenId(e.target.value)} />
          <button className="button-submit" disabled={!write || isLoading || isPending} type="submit">
            Mint
          </button>
        </form>
      </div>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </div>
  );
}
