import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  const serviceImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  ];

  // Cast the translated items to an array of objects
  const services = t('services_page.items', { returnObjects: true }) as Array<{title: string, description: string}>;

  return (
    <section id="services-page" className="services-page">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">
            <span className="text-gradient">{t('services_page.title')}</span>
          </h2>
          <p className="services-subtitle">{t('services_page.subtitle')}</p>
        </div>
        
        <div className="services-list">
          {Array.isArray(services) && services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <a href="#" className="service-card glass-panel">
                <div className="service-img-wrapper">
                  <img src={serviceImages[index]} alt={service.title} className="service-img" />
                </div>
                <div className="service-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <span className="service-link-text">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
