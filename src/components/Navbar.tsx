import Link from 'next/link';
import Image from 'next/image';
import { Connect } from '@/components';

import nerwo from '@/public/nerwo.svg';

export function Navbar() {
    return (
        <nav className="px-[10%]">
            <div className="flex items-center justify-between p-4 py-8 w-full">
                <Link href="https://nerwo.xyz/">
                    <Image
                        src={nerwo}
                        alt="Nerwo"
                        width={132}
                        height={32} />
                </Link>
                <div>
                    <ul>
                        <li>
                            <Link href={`https://sepolia.etherscan.io/address/${process.env.NEXT_PUBLIC_NERWO_TOKEN_ADDRESS}#code`}>
                                <div className='align-middle'>View Contract</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/sherpya/nerwo-token-faucet">
                                <div>GitHub Source</div>
                            </Link>
                        </li>
                        <li>
                            <Connect />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
