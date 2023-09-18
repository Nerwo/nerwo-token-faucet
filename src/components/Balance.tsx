'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useWizard } from 'react-use-wizard';
import { sepolia, useAccount, useBalance, useNetwork } from 'wagmi';

const MIN_ETH = BigInt(2 * 10 ** 17);

export function Balance() {
    const { chain } = useNetwork();
    const account = useAccount();
    const { data } = useBalance({ chainId: sepolia.id, address: account.address, watch: true });

    const { nextStep } = useWizard();

    useEffect(() => {
        if ((chain?.id === sepolia.id) && (data && (data.value >= MIN_ETH))) {
            nextStep();
        }
    }, [chain, data, nextStep]);

    return (
        <div className="wizard-content">
            <h1 className="text-center">You need Sepolia ETH for gas</h1>
            <div className="text-center font-medium">Click the button below to go the Sepolia faucet and earn some tokens.
                These tokens are used to do any kind of testing within Nerwo.</div>
            <div className="text-center font-bold">Once you have it, come back here for the final step.</div>
            <div className="text-center">
                <Link href="https://sepoliafaucet.com/" target="_blank">
                    <button>Go to Sepolia Faucet</button>
                </Link>
            </div>
        </div>
    );
}
