import { useTranslation } from 'react-i18next';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import './Process.css';

const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Search size={28} />,
      title: t('process.step1_title'),
      desc: t('process.step1_desc'),
    },
    {
      icon: <PenTool size={28} />,
      title: t('process.step2_title'),
      desc: t('process.step2_desc'),
    },
    {
      icon: <Code size={28} />,
      title: t('process.step3_title'),
      desc: t('process.step3_desc'),
    },
    {
      icon: <Rocket size={28} />,
      title: t('process.step4_title'),
      desc: t('process.step4_desc'),
    },
  ];

  return (
    <section className="process-section section">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">
            <span className="text-gradient">{t('process.title')}</span>
          </h2>
          <p className="process-subtitle">{t('process.subtitle')}</p>
        </div>

        <div className="process-list">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step-item glass-panel">
              <div className="step-icon-box">{step.icon}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
