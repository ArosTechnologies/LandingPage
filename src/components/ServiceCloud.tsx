import { useTranslation } from 'react-i18next';
import { ArrowRight, CloudLightning } from 'lucide-react';
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
          <div className="service-image-container glass-panel animate-fade-in delay-200">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80" 
              alt={t('service_cloud.title')} 
            />
          </div>
          
          <div className="service-text-content animate-fade-in delay-400">
            <p className="service-lead-text">{t('service_cloud.desc1')}</p>
            <p>{t('service_cloud.desc2')}</p>
            
            <div className="service-deployment-box glass-panel animate-fade-in delay-600">
              <h3><CloudLightning className="text-accent" size={24} /> {t('service_cloud.box_title')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('service_cloud.box_desc')}</p>
            </div>
          </div>
        </div>

        <div className="service-cta-section">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{t('service_cloud.cta_header')}</h2>
          <a href="#/contact" className="btn btn-primary">
            {t('service_cloud.cta')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCloud;
