import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './ServicePages.css';

const ServiceCloud = () => {
  const { t } = useTranslation();

  return (
    <div className="service-detail-page animate-fade-in">
      <div className="container">
        <div className="service-detail-hero">
          <span className="service-badge">{t('service_cloud.badge')}</span>
          <h1 className="service-detail-title text-gradient">{t('service_cloud.title')}</h1>
          <p className="service-detail-subtitle">{t('service_cloud.subtitle')}</p>
        </div>

        <div className="service-content-grid">
          <div className="service-image-container glass-panel">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
              alt={t('service_cloud.title')} 
            />
          </div>
          
          <div className="service-text-content">
            <p>{t('service_cloud.desc1')}</p>
            <p>{t('service_cloud.desc2')}</p>
          </div>
        </div>

        <div className="service-cta-section">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready for the Cloud?</h2>
          <a href="#/contact" className="btn btn-primary">
            {t('service_cloud.cta')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCloud;
