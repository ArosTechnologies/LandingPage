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
import Services from './components/Services';
import Footer from './components/Footer';

import CallToAction from './components/CallToAction';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#/')) {
        // Scroll to standard anchor sections (e.g. #services) on home page
        const id = hash.replace('#', '');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Reset scroll position *after* React renders the new page component
  useEffect(() => {
    if (!currentHash || currentHash.startsWith('#/')) {
      // Use setTimeout to ensure DOM is fully repainted before snapping to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 0);
    }
  }, [currentHash]);

  const renderContent = () => {
    if (currentHash.startsWith('#/about')) {
      return <About />;
    }
    if (currentHash.startsWith('#/products') || currentHash.startsWith('#/demos')) {
      return <Demos />; // Temporarily still rendering Demos component for the products page
    }
    if (currentHash.startsWith('#/services')) {
      return <Services />;
    }
    if (currentHash.startsWith('#/contact')) {
      return <Contact />;
    }
    return (
      <>
        <Hero />
        <Metrics />
        <Benefits />
        <ProductsServices />
        <Process />
        <CallToAction />
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
