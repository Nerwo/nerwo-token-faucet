import { Connected, Footer, MintWizard, Navbar } from '@/components';

export default function Page() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main>
        <Connected>
          <MintWizard />
        </Connected>
      </main>
      <Footer />
    </div>
  );
}
