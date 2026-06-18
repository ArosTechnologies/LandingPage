import { useTranslation } from 'react-i18next';
import founderImg from '../../Identity/Team/ceo-founder.jpeg';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">
            <span className="text-gradient">{t('about.title')}</span>
          </h2>
          <p className="about-description">
            {t('about.description')}
          </p>
        </div>
        
        <div className="about-founder">
          <div className="founder-card glass-panel animate-fade-in">
            <div className="founder-img-wrapper">
              <img src={founderImg} alt={t('about.founder_name')} className="founder-img" />
            </div>
            <div className="founder-info">
              <span className="founder-badge">{t('about.founder_title')}</span>
              <h3 className="founder-name">{t('about.founder_name')}</h3>
              <p className="founder-role">{t('about.founder_role')}</p>
              <p className="founder-bio">{t('about.founder_bio')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
