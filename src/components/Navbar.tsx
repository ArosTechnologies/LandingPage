import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../Identity/Logotipos/ISO-HOR-RED.png';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { label: t('nav.services'), href: '#/services' },
    { 
      label: t('nav.products'), 
      href: '#/products',
      dropdown: [
        { label: 'AROS PACS', href: '#/products/pacs' }
      ]
    },
    { label: t('nav.about'), href: '#/about' },
    { label: t('nav.contact'), href: '#/contact' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <a href="#/" className="navbar-brand">
          <img src={logo} alt="AROS Technologies" className="navbar-logo" />
        </a>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            const isActive = currentHash.startsWith(link.href) && link.href !== '#/';
            const hasDropdown = !!link.dropdown;

            return (
              <div 
                key={link.label} 
                className={`nav-item ${hasDropdown ? 'has-dropdown' : ''} ${openDropdown === link.label ? 'dropdown-open' : ''}`}
                onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(link.label)}
                onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(null)}
              >
                <div className="nav-link-wrapper">
                  <a 
                    href={link.href} 
                    className={`nav-link ${isActive ? 'active' : ''}`} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  {hasDropdown && (
                    <button 
                      className="dropdown-toggle"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenDropdown(openDropdown === link.label ? null : link.label);
                      }}
                    >
                      <ChevronDown size={16} />
                    </button>
                  )}
                </div>
                {hasDropdown && (
                  <div className="dropdown-menu glass-panel">
                    {link.dropdown?.map((dropLink) => (
                      <a 
                        key={dropLink.label}
                        href={dropLink.href}
                        className="dropdown-link"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {dropLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
