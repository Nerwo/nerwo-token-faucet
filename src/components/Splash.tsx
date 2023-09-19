import Image from 'next/image';

import faucet from '@/public/faucet.svg';
import { Connect } from '@/components';

export function Splash() {
    return (
        <div className="wizard-content flex flex-row items-center">
            <div className="h-full ">
                <h1>Welcome to Nerwo Test Token Faucet!</h1>
                <div className="font-medium">This is the Nerwo&apos;s test-token faucet,
                    where you can get test tokens for free to start try Nerwo.</div>
                <div className="font-medium">The test token (<em>USDT.n</em>),
                    is an OpenZeppelin&apos;s ERC-20 token with just mint and burn functions added.
                    You can see the source by following the navbar <em>View Contract</em> link.</div>
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
