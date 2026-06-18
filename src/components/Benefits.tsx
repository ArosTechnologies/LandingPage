import { useTranslation } from 'react-i18next';
import { Layers, ShieldAlert, Cpu } from 'lucide-react';
import './Benefits.css';

const Benefits = () => {
  const { t } = useTranslation();

  const benefitsData = [
    {
      icon: <Layers size={32} />,
      title: t('benefits.card1_title'),
      desc: t('benefits.card1_desc'),
    },
    {
      icon: <ShieldAlert size={32} />,
      title: t('benefits.card2_title'),
      desc: t('benefits.card2_desc'),
    },
    {
      icon: <Cpu size={32} />,
      title: t('benefits.card3_title'),
      desc: t('benefits.card3_desc'),
    },
  ];

  return (
    <section className="benefits-section section">
      <div className="container">
        <div className="benefits-header">
          <h2 className="section-title">
            <span className="text-gradient">{t('benefits.title')}</span>
          </h2>
          <p className="benefits-subtitle">{t('benefits.subtitle')}</p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((item, idx) => (
            <div key={idx} className="benefit-card glass-panel">
              <div className="benefit-icon-box">{item.icon}</div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
