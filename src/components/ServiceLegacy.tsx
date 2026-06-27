import { useTranslation } from 'react-i18next';
import { ArrowRight, TerminalSquare, Shield, Cpu } from 'lucide-react';
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
          <div className="service-text-content animate-fade-in delay-200">
            <p className="service-lead-text">{t('service_legacy.desc1')}</p>
            <p>{t('service_legacy.desc2')}</p>
            <p>{t('service_legacy.desc3')}</p>
            
            <div className="service-deployment-box glass-panel animate-fade-in delay-400">
              <h3><TerminalSquare className="text-accent" size={24} /> {t('service_legacy.box_title')}</h3>
              <ul>
                <li><TerminalSquare className="list-icon" size={20} /> {t('service_legacy.box_item1')}</li>
                <li><Shield className="list-icon" size={20} /> {t('service_legacy.box_item2')}</li>
                <li><Cpu className="list-icon" size={20} /> {t('service_legacy.box_item3')}</li>
              </ul>
            </div>
          </div>
          
          <div className="service-image-container glass-panel animate-fade-in delay-600">
            <img 
              src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80" 
              alt={t('service_legacy.title')} 
            />
          </div>
        </div>

        <div className="service-cta-section">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{t('service_legacy.cta_header')}</h2>
          <a href="#/contact" className="btn btn-primary">
            {t('service_legacy.cta')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceLegacy;
