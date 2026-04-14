import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';

import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Problems />

        <WhyUs />
        <Process />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
