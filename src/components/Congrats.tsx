'use client';

import { useCallback, useEffect, useState } from 'react';
import { useWalletClient } from 'wagmi';

export function Congrats() {
    const [origin, setOrigin] = useState<string | null>(null);
    const { data: walletClient } = useWalletClient();
    const watchAsset = useCallback(async () => {
        if (origin) {
            try {
                await walletClient?.watchAsset({
                    type: 'ERC20',
                    options: {
                        address: process.env.NEXT_PUBLIC_NERWO_TOKEN_ADDRESS,
                        decimals: process.env.NEXT_PUBLIC_NERWO_TOKEN_DECIMALS,
                        symbol: process.env.NEXT_PUBLIC_NERWO_TOKEN_SYMBOL,
                        image: `${origin}/USDTn.svg`
                    },
                });
            } catch (_) { };
        }
    }, [walletClient, origin]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setOrigin(window.origin);
        }
    }, []);

    return (
        <div className="wizard-content">
            <h1 className="text-center">Congrats!</h1>
            <div className="font-medium">Thank you anon, you have do it all the process.</div>
            <div className="font-bold">Now you are ready to test Nerwo.</div>
            <div className="text-center">
                <button onClick={(e) => watchAsset()}>Add Token on Metamask</button>
            </div>
        </div>
    );
}
