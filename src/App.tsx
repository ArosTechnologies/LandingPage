import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Metrics from './components/Metrics';
import Benefits from './components/Benefits';
import ProductsServices from './components/ProductsServices';
import Process from './components/Process';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import ProductPacs from './components/ProductPacs';
import ServiceEnterprise from './components/ServiceEnterprise';
import ServiceCloud from './components/ServiceCloud';
import ServiceLegacy from './components/ServiceLegacy';
import ServiceHardware from './components/ServiceHardware';

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
    if (currentHash.startsWith('#/products/pacs')) {
      return <ProductPacs />;
    }
    if (currentHash.startsWith('#/products') || currentHash.startsWith('#/demos')) {
      return <Products />; // Temporarily still rendering Products component for the products page
    }
    
    // Service Detail Pages
    if (currentHash.startsWith('#/services/enterprise')) {
      return <ServiceEnterprise />;
    }
    if (currentHash.startsWith('#/services/cloud')) {
      return <ServiceCloud />;
    }
    if (currentHash.startsWith('#/services/legacy')) {
      return <ServiceLegacy />;
    }
    if (currentHash.startsWith('#/services/hardware')) {
      return <ServiceHardware />;
    }
    
    // Fallback Services page
    if (currentHash.startsWith('#/services')) {
      return <Services />;
    }
    if (currentHash.startsWith('#/contact')) {
      return <Contact />;
    }
    return (
      <>
        <Hero />
        <Clients />
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
