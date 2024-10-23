import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          firstIntro:"to work hard and build nice projects",
          secondIntro:"If you need a project well done, with passion and good vibes, I'm your dev !"
        }
      }, 
      fr:{
        translation: {
          firstIntro:"travailler dur et construire de beaux projets",
          secondIntro: "Si vous avez besoin d'un projet bien fait avec passion et une belle attitude, je suis votre développeur!"
        }
      }
    }
  });

export default i18n;
