'use client';

import { Wizard } from 'react-use-wizard';
import { WizardHeader, NetworkSwitcher, Balance, MintToken, Congrats } from '@/components';

export function MintWizard() {
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
