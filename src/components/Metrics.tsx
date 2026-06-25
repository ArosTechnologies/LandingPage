import { useTranslation } from 'react-i18next';
import { Activity, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import './Metrics.css';

const Metrics = () => {
  const { t } = useTranslation();

  const metricsData = [
    {
      icon: <Activity className="metric-icon" size={24} />,
      value: t('metrics.uptime_value'),
      label: t('metrics.uptime_label'),
    },
    {
      icon: <ShieldCheck className="metric-icon" size={24} />,
      value: t('metrics.compliance_value'),
      label: t('metrics.compliance_label'),
    },
    {
      icon: <Zap className="metric-icon" size={24} />,
      value: t('metrics.speed_value'),
      label: t('metrics.speed_label'),
    },
    {
      icon: <HeartHandshake className="metric-icon" size={24} />,
      value: t('metrics.support_value'),
      label: t('metrics.support_label'),
    },
  ];

  return (
    <section className="metrics-section section">
      <div className="container">
        <div className="metrics-header">
          <h2 className="section-title">
            <span className="text-gradient">{t('metrics.title')}</span>
          </h2>
          <p className="metrics-subtitle">{t('metrics.subtitle')}</p>
        </div>
        <div className="metrics-grid">
          {metricsData.map((item, idx) => (
            <div key={idx} className="metric-card glass-panel">
              <div className="metric-icon-wrapper">{item.icon}</div>
              <div className="metric-details">
                <h3 className="metric-value">{item.value}</h3>
                <p className="metric-label">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
