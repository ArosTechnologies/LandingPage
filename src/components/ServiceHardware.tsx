import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './ServicePages.css';

const ServiceHardware = () => {
  const { t } = useTranslation();

  return (
    <div className="service-detail-page animate-fade-in">
      <div className="container">
        <div className="service-detail-hero">
          <h1 className="service-detail-title text-gradient">{t('service_hardware.title')}</h1>
          <p className="service-detail-subtitle">{t('service_hardware.subtitle')}</p>
        </div>

        <div className="service-content-grid">
          <div className="service-image-container glass-panel">
            <img 
              src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1200&q=80" 
              alt={t('service_hardware.title')} 
            />
          </div>
          
          <div className="service-text-content">
            <p>{t('service_hardware.desc1')}</p>
            <p>{t('service_hardware.desc2')}</p>
            <p>{t('service_hardware.desc3')}</p>
          </div>
        </div>

        <div className="service-cta-section">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready to Upgrade?</h2>
          <a href="#/contact" className="btn btn-primary">
            {t('service_hardware.cta')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceHardware;
