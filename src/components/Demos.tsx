import { useTranslation } from 'react-i18next';
import './Demos.css';

const Demos = () => {
  const { t } = useTranslation();

  return (
    <section id="demos" className="section demos">
      <div className="container">
        <div className="demos-header">
          <h2 className="section-title">
            <span className="text-gradient">{t('demos.title')}</span>
          </h2>
          <p className="demos-subtitle">{t('demos.subtitle')}</p>
        </div>
        
        <div className="demos-placeholder glass-panel">
          <p className="demos-empty-state">{t('demos.empty_state')}</p>
        </div>
      </div>
    </section>
  );
};

export default Demos;
