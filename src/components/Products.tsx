import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './Products.css';

const Products = () => {
  const { t } = useTranslation();

  const productImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" // Education image
  ];

  // Cast the translated items to an array of objects
  const products = t('products.items', { returnObjects: true }) as Array<{title: string, description: string, learn_more?: string}>;
  const eduProducts = t('products.edu_items', { returnObjects: true }) as Array<{title: string, description: string, learn_more?: string}>;

  return (
    <section id="products" className="products-page">
      <div className="container">
        <div className="products-header">
          <h2 className="products-title">
            <span className="text-gradient">{t('products.title')}</span>
          </h2>
          <p className="products-subtitle">{t('products.subtitle')}</p>
        </div>
        
        <div className="products-categories">
          <div className="product-category">
            <h3 className="product-line-title">MED CLOUD</h3>
            <div className="products-list">
              {Array.isArray(products) && products.map((product, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="product-card glass-panel" style={{ cursor: 'default' }}>
                    <div className="product-img-wrapper">
                      <img src={productImages[index]} alt={product.title} className="product-img" />
                    </div>
                    <div className="product-content">
                      <h3 className="product-card-title">{product.title}</h3>
                      <p className="product-desc">{product.description}</p>
                      <span className="product-link-text" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        {t('products.coming_soon')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="product-category">
            <h3 className="product-line-title">EDU CLOUD</h3>
            <div className="products-list">
              {Array.isArray(eduProducts) && eduProducts.map((product, index) => (
                <div key={`edu-${index}`} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="product-card glass-panel" style={{ cursor: 'default' }}>
                    <div className="product-img-wrapper">
                      {/* Using the last image in the array for edu products */}
                      <img src={productImages[productImages.length - 1]} alt={product.title} className="product-img" />
                    </div>
                    <div className="product-content">
                      <h3 className="product-card-title">{product.title}</h3>
                      <p className="product-desc">{product.description}</p>
                      <span className="product-link-text" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        {t('products.coming_soon')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
