import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../Identity/Logotipos/ISO-HOR-RED.png';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="AROS Technologies" className="navbar-logo" />
        </a>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
            <Globe size={20} />
            <span className="lang-text">{i18n.language.toUpperCase()}</span>
          </button>
          
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
