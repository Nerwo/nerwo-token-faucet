import { Account } from '../components/Account';
import { AccountBalance } from '../components/Balance';
import { Connect } from '../components/Connect';
import { Connected } from '../components/Connected';
import { MintToken } from '../components/MintToken';
import { NetworkSwitcher } from '../components/NetworkSwitcher';

export default function Page() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">Nerwo Test Token Faucet</h1>
      <Connect />
      <Connected>
        <h2>Account</h2>
        <Account />
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <h2>Balance</h2>
        <AccountBalance />
        <h2>Mint</h2>
        <MintToken />
      </Connected>
    </div>
  );
}
