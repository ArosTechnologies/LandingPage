import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <div className="cta-bg-grid"></div>
      <div className="container cta-container">
        <div className="cta-content glass-panel text-center">
          <h2 className="massive-title text-gradient">
            {t('cta.title')}
          </h2>
          <p className="cta-subtitle lead-text">
            {t('cta.subtitle')}
          </p>
          <a href="#/contact" className="btn btn-primary cta-btn">
            {t('cta.button')} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
