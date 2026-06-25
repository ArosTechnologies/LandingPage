import { useTranslation } from 'react-i18next';
import { Send, Phone, Mail } from 'lucide-react';
import './Contact.css';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-content grid-2">
          <div className="contact-info glass-panel">
            <h3 className="contact-info-title">{t('contact.info_title')}</h3>
            <p className="contact-info-desc">{t('contact.info_desc')}</p>

            <div className="contact-method mt-lg">
              <div className="contact-icon">
                <Phone size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="method-title">{t('contact.phone')}</h4>
                <p className="method-detail">+52 562 291 8477</p>
              </div>
            </div>

            <div className="contact-method mt-lg">
              <div className="contact-icon">
                <Mail size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="method-title">{t('contact.email_label')}</h4>
                <p className="method-detail">placeholder@arostechnologies.com</p>
              </div>
            </div>

            <div className="contact-method mt-lg">
              <div className="contact-icon">
                <LinkedinIcon size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="method-title">{t('contact.linkedin')}</h4>
                <p className="method-detail">linkedin.com/company/placeholder</p>
              </div>
            </div>

            <div className="contact-method mt-lg">
              <div className="contact-icon">
                <GithubIcon size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="method-title">{t('contact.github')}</h4>
                <p className="method-detail">github.com/placeholder</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t('contact.form.name')}</label>
                <input type="text" id="name" className="form-input" required placeholder={t('contact.form.name_placeholder')} />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('contact.form.email')}</label>
                <input type="email" id="email" className="form-input" required placeholder={t('contact.form.email_placeholder')} />
              </div>

              <div className="form-group-row">
                <div className="form-group" style={{ flex: 2 }}>
                  <label htmlFor="budget" className="form-label">{t('contact.form.budget')}</label>
                  <input
                    type="number"
                    id="budget"
                    className="form-input"
                    min="0"
                    onKeyDown={(e) => {
                      if (e.key === '-') {
                        e.preventDefault();
                      }
                    }}
                    placeholder={t('contact.form.budget_placeholder')}
                  />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label htmlFor="currency" className="form-label">{t('contact.form.currency')}</label>
                  <select id="currency" className="form-input">
                    <option value="USD">USD</option>
                    <option value="MXN">MXN</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inquiry" className="form-label">{t('contact.form.inquiry')}</label>
                <textarea 
                  id="inquiry" 
                  className="form-input form-textarea" 
                  required 
                  placeholder={t('contact.form.inquiry_placeholder')}
                  rows={4}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="requirements" className="form-label">{t('contact.form.requirements')}</label>
                <textarea 
                  id="requirements" 
                  className="form-input form-textarea" 
                  placeholder={t('contact.form.requirements_placeholder')}
                  rows={3}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                {t('contact.form.submit')} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
