'use client';

import { Wizard } from 'react-use-wizard';

import { MintToken } from '../components/MintToken';
import { NetworkSwitcher } from '../components/NetworkSwitcher';
import Congrats from './Congrats';
import WizardHeader from './WizardHeader';
import Balance from './Balance';

export default function MintWizard() {
    return (
        <div className="flex flex-col gap-1 p-2 w-full items-center">
            <div className="text-left">
                <Wizard header={<WizardHeader />}>
                    <NetworkSwitcher />
                    <Balance />
                    <MintToken />
                    <Congrats />
                </Wizard>
            </div>
        </div>
    );
}
