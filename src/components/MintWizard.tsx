'use client';

import { Wizard } from 'react-use-wizard';
import { WizardHeader, NetworkSwitcher, Balance, MintToken, Congrats } from '@/components';

export function MintWizard() {
    return (
        <div className="flex items-center justify-between p-4 w-full">
            <div className="mx-auto w-full px-[10%]">
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
