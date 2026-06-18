import { useTranslation } from 'react-i18next';
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
        <div className="about-visual">
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="visual-circle circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
