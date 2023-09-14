import { Unbounded } from 'next/font/google';
import { Connected } from '../components/Connected';
import MintWizard from '../components/MintWizard';

const unbounded = Unbounded({ subsets: ['latin'] });

export default function Page() {
  return (
    <main className={unbounded.className}>
      <Connected>
        <MintWizard />
      </Connected>
    </main>
  );
}
