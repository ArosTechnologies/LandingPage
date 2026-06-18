import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Benefits from './components/Benefits';
import ProductsServices from './components/ProductsServices';
import Process from './components/Process';
import Demos from './components/Demos';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#/')) {
        // Scroll to standard anchor sections (e.g. #services, #contact) on home page
        const id = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Scroll to top for page transitions
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash.startsWith('#/about')) {
      return <About />;
    }
    if (currentHash.startsWith('#/demos')) {
      return <Demos />;
    }
    return (
      <>
        <Hero />
        <Metrics />
        <Benefits />
        <ProductsServices />
        <Process />
        <Contact />
      </>
    );
  };

  return (
    <>
      <Navbar />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </>
  );
}

export default App;
