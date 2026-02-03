import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enWrapper from './locales/en.json';
import arWrapper from './locales/ar.json';
import hiWrapper from './locales/hi.json';

const resources = {
    EN: {
        translation: enWrapper
    },
    AR: {
        translation: arWrapper
    },
    HI: {
        translation: hiWrapper
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'EN', // default language
        fallbackLng: 'EN',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
