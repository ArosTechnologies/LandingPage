import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';

const getBrowserLanguage = (): string => {
  if (typeof window === 'undefined' || !navigator.language) return 'en';
  const lang = navigator.language.split('-')[0].toLowerCase();
  return ['en', 'es'].includes(lang) ? lang : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      es: esTranslations,
    },
    lng: getBrowserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },
  });

export default i18n;
