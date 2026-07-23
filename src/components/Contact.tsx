import { useTranslation } from 'react-i18next';
import { Send, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

import { useState, useEffect } from 'react';

const Contact = () => {
  const { t } = useTranslation();
  const [interest, setInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // IMPORTANTE: Asegúrate de tener VITE_FORMSPREE_ID en tu archivo .env
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'REEMPLAZAR_CON_TU_ID';
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/${formspreeId}`;

  useEffect(() => {
    // Parse interest from hash e.g., #/contact?interest=aros_pacs
    const hash = window.location.hash;
    if (hash.includes('?')) {
      const queryString = hash.split('?')[1];
      const params = new URLSearchParams(queryString);
      const interestParam = params.get('interest');
      if (interestParam) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInterest(interestParam);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setInterest('');
        setTimeout(() => setSubmitStatus('idle'), 4000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 4000);
      }
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
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
                <input type="text" id="name" name="name" className="form-input" required placeholder={t('contact.form.name_placeholder')} />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('contact.form.email')}</label>
                <input type="email" id="email" name="email" className="form-input" required placeholder={t('contact.form.email_placeholder')} />
              </div>

              <div className="form-group">
                <label htmlFor="interest" className="form-label">{t('contact.form.interest', 'Product or Service of Interest')}</label>
                <select
                  id="interest"
                  name="interest"
                  className="form-input"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  required
                >
                  <option value="" disabled>{t('contact.form.interest_placeholder', 'Select an option...')}</option>
                  <option value="AROS PACS">AROS PACS</option>
                  <option value="PohuaScolar">PohuaScolar</option>
                  <option value="Custom Enterprise Software">{t('services_page.items.0.title', 'Custom Enterprise Software')}</option>
                  <option value="Cloud Architecture & DevSecOps">{t('services_page.items.1.title', 'Cloud Architecture & DevSecOps')}</option>
                  <option value="Legacy System Modernization">{t('services_page.items.2.title', 'Legacy System Modernization')}</option>
                  <option value="Specialized Hardware Selling">{t('services_page.items.3.title', 'Specialized Hardware Selling')}</option>
                  <option value="Other">{t('contact.form.interest_other', 'Other')}</option>
                </select>
              </div>

              <div className="form-group-row">
                <div className="form-group" style={{ flex: 2 }}>
                  <label htmlFor="budget" className="form-label">{t('contact.form.budget')}</label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
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
                  <select id="currency" name="currency" className="form-input">
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
                  name="inquiry"
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
                  name="requirements"
                  className="form-input form-textarea"
                  placeholder={t('contact.form.requirements_placeholder')}
                  rows={3}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={isSubmitting || submitStatus === 'success'}
                style={
                  submitStatus === 'success' ? { backgroundColor: '#22c55e', borderColor: '#22c55e', color: 'white' } :
                    submitStatus === 'error' ? { backgroundColor: '#ef4444', borderColor: '#ef4444', color: 'white' } :
                      {}
                }
              >
                {isSubmitting ? (
                  t('contact.form.submitting', 'Enviando...')
                ) : submitStatus === 'success' ? (
                  <>{t('contact.form.success_btn', '¡Enviado con éxito!')} <CheckCircle size={18} /></>
                ) : submitStatus === 'error' ? (
                  <>{t('contact.form.error_btn', 'Error al enviar')} <AlertCircle size={18} /></>
                ) : (
                  <>{t('contact.form.submit')} <Send size={18} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
