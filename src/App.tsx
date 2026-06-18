import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsServices from './components/ProductsServices';
import Demos from './components/Demos';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Demos />
        <ProductsServices />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
