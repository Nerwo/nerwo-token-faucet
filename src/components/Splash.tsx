import Image from 'next/image';

import faucet from '@/public/faucet.svg';
import { Connect } from '@/components';

export function Splash() {
    return (
        <div className="wizard-content flex flex-row items-center">
            <div className="h-full ">
                <h1>Welcome to Nerwo Test Token Faucet!</h1>
                <div className="font-medium">This is the Nerwo’s test-token faucet,
                    where you can get tokens for free to start try Nerwo.</div>
                <div className="font-medium">The test-token (USDT.n),
                    is an ERC-20 of OpenZeppelin with only mint and burn functions added.</div>
                <Connect />
            </div>
            <div className="h-full">
                <Image
                    className="mx-auto w-auto"
                    src={faucet}
                    alt="Token Faucet" />
            </div>
        </div>
    );
}
