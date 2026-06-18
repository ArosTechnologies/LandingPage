import { useTranslation } from 'react-i18next';
import './Footer.css';
import logo from '../../Identity/Logotipos/ISO-HOR-RED.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src={logo} alt="AROS Technologies" className="footer-logo" />
        </div>
        <div className="footer-copyright">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
