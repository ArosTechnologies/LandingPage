import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './ServicePages.css';

const ServiceEnterprise = () => {
  const { t } = useTranslation();

  return (
    <div className="service-detail-page animate-fade-in">
      <div className="container">
        <div className="service-detail-hero">
          <span className="service-badge">{t('service_enterprise.badge')}</span>
          <h1 className="service-detail-title text-gradient">{t('service_enterprise.title')}</h1>
          <p className="service-detail-subtitle">{t('service_enterprise.subtitle')}</p>
        </div>

        <div className="service-content-grid">
          <div className="service-text-content">
            <p>{t('service_enterprise.desc1')}</p>
            <p>{t('service_enterprise.desc2')}</p>
            
            <div className="service-deployment-box glass-panel">
              <h3>{t('service_enterprise.deployment_title')}</h3>
              <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>{t('service_enterprise.deployment_desc')}</p>
              <ul>
                <li>{t('service_enterprise.deploy_cloud')}</li>
                <li>{t('service_enterprise.deploy_hybrid')}</li>
                <li>{t('service_enterprise.deploy_local')}</li>
              </ul>
            </div>
          </div>
          
          <div className="service-image-container glass-panel">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
              alt={t('service_enterprise.title')} 
            />
          </div>
        </div>

        <div className="service-cta-section">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready to build?</h2>
          <a href="#/contact" className="btn btn-primary">
            {t('service_enterprise.cta')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceEnterprise;
