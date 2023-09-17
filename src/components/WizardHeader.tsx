'use client';

import { useWizard } from 'react-use-wizard';

export function WizardHeader() {
    const { activeStep } = useWizard();

    return (
        <div className='wizard-header'>Step {activeStep + 1}</div>
    );
}
