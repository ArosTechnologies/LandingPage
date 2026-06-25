import { useTranslation } from 'react-i18next';
import { Send, Phone, Mail } from 'lucide-react';
import './Contact.css';


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
                <p className="method-detail">+52 462 291 8477</p>
              </div>
            </div>

            <div className="contact-method mt-lg">
              <div className="contact-icon">
                <Mail size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="method-title">{t('contact.email_label')}</h4>
                <p className="method-detail">ivivas@arostech.com.mx</p>
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
