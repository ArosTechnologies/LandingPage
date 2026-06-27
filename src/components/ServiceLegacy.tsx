import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './ServicePages.css';

const ServiceLegacy = () => {
  const { t } = useTranslation();

  return (
    <div className="service-detail-page animate-fade-in">
      <div className="container">
        <div className="service-detail-hero">
          <h1 className="service-detail-title text-gradient">{t('service_legacy.title')}</h1>
          <p className="service-detail-subtitle">{t('service_legacy.subtitle')}</p>
        </div>

        <div className="service-content-grid">
          <div className="service-text-content">
            <p>{t('service_legacy.desc1')}</p>
            <p>{t('service_legacy.desc2')}</p>
            <p>{t('service_legacy.desc3')}</p>
          </div>
          
          <div className="service-image-container glass-panel">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" 
              alt={t('service_legacy.title')} 
            />
          </div>
        </div>

        <div className="service-cta-section">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready to Modernize?</h2>
          <a href="#/contact" className="btn btn-primary">
            {t('service_legacy.cta')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceLegacy;
