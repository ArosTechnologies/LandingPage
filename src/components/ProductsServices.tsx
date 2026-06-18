import { useTranslation } from 'react-i18next';
import { Package, Briefcase } from 'lucide-react';
import './ProductsServices.css';

const ProductsServices = () => {
  const { t } = useTranslation();

  const offerings = [
    {
      id: 'products',
      icon: <Package size={32} className="text-accent" />,
      title: t('products_services.products.title'),
      description: t('products_services.products.description'),
    },
    {
      id: 'services',
      icon: <Briefcase size={32} className="text-accent" />,
      title: t('products_services.services.title'),
      description: t('products_services.services.description'),
    }
  ];

  return (
    <section id="products-services" className="section products-services">
      <div className="container">
        <div className="ps-header">
          <h2 className="section-title">
            <span className="text-gradient">{t('products_services.title')}</span>
          </h2>
        </div>
        
        <div className="grid-2">
          {offerings.map((item) => (
            <div key={item.id} className="ps-card glass-panel">
              <div className="ps-icon">
                {item.icon}
              </div>
              <h3 className="ps-title">{item.title}</h3>
              <p className="ps-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
