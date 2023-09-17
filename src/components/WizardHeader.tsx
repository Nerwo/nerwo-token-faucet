'use client';

import { useWizard } from 'react-use-wizard';

export function WizardHeader() {
    const { activeStep } = useWizard();

    return (
        <div className='wizard-header'>
            <ul>
                <li>
                    <span className="marker-number">✓</span>
                    {activeStep > 0 && (<span className="marker-line"></span>)}
                    <span className="marker-text">Connect</span>
                </li>
                <li>
                    <span className="marker-number">{activeStep > 0 && '✓'}</span>
                    {activeStep > 1 && (<span className="marker-line"></span>)}
                    <span className="marker-text">Switch</span>
                </li>
                <li>
                    <span className="marker-number">{activeStep > 1 && '✓'}</span>
                    {activeStep > 2 && (<span className="marker-line"></span>)}
                    <span className="marker-text">Mint</span>
                </li>
                <li>
                    <span className="marker-number">{activeStep > 2 && '✓'}</span>
                    <span className="marker-text">Done</span>
                </li>
            </ul>
        </div>
    );
}
