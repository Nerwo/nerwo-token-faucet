import { Unbounded } from 'next/font/google';
import { Connected, MintWizard } from '@/components';

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
