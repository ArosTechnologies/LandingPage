import { useTranslation } from 'react-i18next';
import { ArrowRight, Monitor, PenTool, Database } from 'lucide-react';
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
          <div className="service-image-container glass-panel animate-fade-in delay-200">
            <img 
              src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=80" 
              alt={t('service_hardware.title')} 
            />
          </div>
          
          <div className="service-text-content animate-fade-in delay-400">
            <p className="service-lead-text">{t('service_hardware.desc1')}</p>
            <p>{t('service_hardware.desc2')}</p>
            <p>{t('service_hardware.desc3')}</p>
            
            <div className="service-deployment-box glass-panel animate-fade-in delay-600">
              <h3><Monitor className="text-accent" size={24} /> {t('service_hardware.box_title')}</h3>
              <ul>
                <li><PenTool className="list-icon" size={20} /> {t('service_hardware.box_item1')}</li>
                <li><Monitor className="list-icon" size={20} /> {t('service_hardware.box_item2')}</li>
                <li><Database className="list-icon" size={20} /> {t('service_hardware.box_item3')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="service-cta-section">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{t('service_hardware.cta_header')}</h2>
          <a href="#/contact" className="btn btn-primary">
            {t('service_hardware.cta')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceHardware;
