import { useTranslation } from 'react-i18next';
import './Clients.css';

const Clients = () => {
  const { t } = useTranslation();

  const clientsData = [
    // { name: "RadiographXpress", url: "https://radiographxpress.com.mx/" },
    { name: "CAPA(S) Arquitectura" }
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <p className="clients-title">{t('clients.trusted_by')}</p>
      </div>
      <div className="marquee-wrapper">
        <div className="clients-list">
          {clientsData.map((client, i) => {
            if (client.url) {
              return (
                <a 
                  key={i} 
                  href={client.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="client-logo-card"
                >
                  <span className="client-logo-placeholder">{client.name}</span>
                </a>
              );
            }
            return (
              <div key={i} className="client-logo-card">
                <span className="client-logo-placeholder">{client.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
