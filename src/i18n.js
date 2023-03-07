import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './Translations/en.json';
import deTranslation from './Translations/de.json';

const resources = {
  en: { translation: enTranslation },
  de: { translation: deTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en", "de"],
  });

export default i18n;
