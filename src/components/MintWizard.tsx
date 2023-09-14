'use client';

import { Wizard } from 'react-use-wizard';

import { MintToken } from '../components/MintToken';
import { NetworkSwitcher } from '../components/NetworkSwitcher';
import Congrats from './Congrats';

export default function MintWizard() {
    return (
        <div className="flex flex-col gap-1 p-2">
            <Wizard>
                <NetworkSwitcher />
                <MintToken />
                <Congrats />
            </Wizard>
        </div>
    );
}
