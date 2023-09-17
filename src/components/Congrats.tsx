export function Congrats() {
    return (
        <div className="wizard-content">
            <h1 className="text-center">Congrats!</h1>
            <div>Thank you anon, you have do it all the process.</div>
            <div className="font-bold">Now you are ready to test Nerwo.</div>
            <div className="text-center">
                <button onClick={(e) => alert('TODO')}>Add Token on Metamask</button>
            </div>
        </div>
    );
}
