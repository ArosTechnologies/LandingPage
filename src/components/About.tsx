import { useTranslation } from 'react-i18next';
import founderImg from '../../Identity/Team/ceo-founder.jpeg';
import { Star } from 'lucide-react';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* 1. Why Us - Hero style */}
      <section id="why-us" className="about-hero bg-primary">
        <div className="about-hero-bg-grid"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-hero-grid">
            <div className="about-hero-title-box">
              <h1 className="about-hero-title">
                <span className="text-gradient">{t('about.title')}</span>
              </h1>
            </div>
            <div className="about-hero-desc-box">
              <p className="about-hero-description">
                {t('about.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet the Team - Asymmetric layout */}
      <section id="team" className="section team-section">
        <div className="container">
          <div className="team-layout">
            <div className="team-header-col">
              <h2 className="section-title massive-title">{t('about.team_title')}</h2>
              <p className="section-subtitle team-subtitle">{t('about.team_subtitle')}</p>
            </div>

            <div className="team-cards-col">
              <div className="animate-fade-in">
                <div className="founder-card glass-panel">
                  <div className="founder-img-wrapper">
                    <img src={founderImg} alt={t('about.founder_name')} className="founder-img" />
                  </div>
                  <div className="founder-info">
                    <span className="founder-badge"><Star size={14} style={{ display: 'inline', marginRight: '4px' }} /> {t('about.founder_title')}</span>
                    <h3 className="founder-name">{t('about.founder_name')}</h3>
                    <p className="founder-role">{t('about.founder_role')}</p>
                    <p className="founder-bio">{t('about.founder_bio')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Background / History - Centered Layout */}
      <section id="history" className="history-section bg-primary">
        <div className="container">
          <div className="history-layout">
            <div className="history-header text-center">
              <h2 className="massive-title text-gradient">{t('about.history_title')}</h2>
            </div>
            
            <div className="history-content-center">
              <div className="history-content glass-panel">
                <p className="history-text lead-text">
                  {t('about.history_p1')}
                </p>
                <div className="history-divider mx-auto"></div>
                <p className="history-text lead-text">
                  {t('about.history_p2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
