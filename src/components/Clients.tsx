import { useTranslation } from 'react-i18next';
import './Clients.css';

const Clients = () => {
  const { t } = useTranslation();

  // 5 slots so the manual scrolling is immediately obvious
  const clientNames = [
    "RadiographXpress"
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <p className="clients-title">{t('clients.trusted_by')}</p>
      </div>
      <div className="marquee-wrapper">
        <div className="clients-list">
          {clientNames.map((name, i) => (
            <div key={i} className="client-logo-card">
              <span className="client-logo-placeholder">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
