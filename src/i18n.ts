import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { I18N_DEFAULT_LNG } from 'shared/definitions/config';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: I18N_DEFAULT_LNG,
    ns: ['translation'],
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      allowMultiLoading: true,
    },
    saveMissing: false,
    initImmediate: false,
    load: 'languageOnly',
    fallbackLng: false,
  });

export default i18n;
