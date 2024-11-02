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
          firstIntro:" a passionate developper who likes to work hard and build nice projects",
          secondIntro:"If you need a project well done, with passion and good vibes, I'm your dev !",
          myTools: "Tools I work with",
          projects:"My current projects",
          contact:"Let's have a chat",
          emailToolTip:"email copied to clipboard",
          crossCountryDescription:"It's a pain to navigate multiple websites for snow conditions at Quebec’s cross-country centers. This project centralizes up-to-date information, providing a streamlined experience to quickly access conditions for your favorite locations. Say goodbye to the hassle and enjoy seamless planning for the next ski trip!",
          projectButton:"View project"
        }
      }, 
      fr:{
        translation: {
          firstIntro:"un développeur qui aime travailler dur et construire de beaux projets",
          secondIntro: "Si vous avez besoin d'un projet bien fait avec passion et professionnalisme je suis votre développeur!",
          myTools: "Mes outils",
          projects:"Mes projets actuels",
          emailToolTip:"Courriel copié dans le presse-papiers",
          contact:"Contactez-moi!",
          crossCountryDescription:"Il est fastidieux de naviguer sur plusieurs sites Web pour connaître les conditions de neige dans les centres de ski de fond du Québec. Ce projet centralise l'information à jour, offrant une expérience simplifiée pour accéder rapidement aux conditions de vos endroits préférés. Profitez d'une planification rapide et efficace pour votre prochain voyage de ski de fond.",
          projectButton:"En savoir plus"
        }
      }
    }
  });

export default i18n;

//todo Translation to add 
// Translation of my portfolio : 
// En : If you need a project well done, with passion and good vibes, I'm your dev !
// Si vous avez besoin d'un projet bien fait, avec passion et de bonnes vibrations, je suis votre dev !
// En : Tools I work with
// Fr : Mes outils 

// En : My current projectsEn : Let's have a chat !
// Fr : Contactez moi !   

// Fr : Mes projetsEn : Personal Project / Fr : Projets personnels En : It's a pain to navigate multiple websites for snow conditions at Quebec’s cross-country centers. This project centralizes up-to-date information, providing a streamlined experience to quickly access conditions for your favorite locations. Say goodbye to the hassle and enjoy seamless planning for the next ski trip!
// Fr :  Il est fastidieux de naviguer sur plusieurs sites Web pour connaître les conditions de neige dans les centres de ski de fond du Québec. Ce projet centralise l'information à jour, offrant une expérience simplifiée pour accéder rapidement aux conditions de vos endroits préférés. Profitez d'une planification rapide et efficace pour votre prochain voyage de ski de fond.

// En : email copied to clipboard
// Fr : Courriel copié dans le prwsse-papier


// DESCRIOTION DU PEIJET CROSS COUNTRY : 
// Recherche de pistes de ski de fond5 minCe site Web complet est consacré à la recherche et à la présentation des conditions de neige actuelles pour tous les centres de ski de fond au Québec, assurant aux utilisateurs un accès rapide aux dernières mises à jour.Type de sitePlate-forme utilitaire extérieurePileJavaScriptReactNodesJSEn savoir plusGithubGitHubCapture d'écran de la page d'accueil de l'applicationBut et objectif du projetAu Québec, les centres de ski de fond sont généralement gérés par des opérateurs privés, chacun maintenant son propre site web et présentant les conditions de neige dans des formats variés. Cette fragmentation signifie que pour vérifier les conditions dans plusieurs centres, les utilisateurs doivent effectuer des recherches fastidieuses et naviguer sur chaque site Web individuellement. L'objectif de ce projet est de résoudre ce problème en créant une base de données centralisée pour les conditions de neige à jour dans tous les centres de ski de fond du Québec. Notre plateforme offre aux utilisateurs une expérience simplifiée, leur permettant de trouver facilement les dernières conditions pour leurs centres préférés, de se connecter à leur profil et de créer leurs favoris.  

// Pile Web et explicationLa pile de ce projet est basée sur JavaScript. Pour le front-end, j'ai choisi React with Vite pour ses temps de construction rapides et son expérience de développement efficace. Pour le back-end, j'ai utilisé Node.js en raison de ma familiarité avec lui et de ses performances robustes. Pour collecter les données nécessaires à partir de divers sites web, j'ai mis en œuvre l'automatisation avec Puppeteer, un outil JavaScript puissant pour le web scraping et l'automatisation des tâches basées sur le web. Enfin, j'ai choisi MongoDB comme base de données pour gérer et stocker efficacement les données collectées sur les conditions d'enneigement et les informations sur les centres. Pour analyser les conditions dans un format uniforme, j'ai décidé d'utiliser l'IA. Étant donné ma familiarité avec le style d'invite ChatGPT, j'ai choisi d'utiliser l'API OpenAI à cette fin.Problèmes et processus de réflexionMon premier défi était l'absence d'une base de données complète pour les centres de ski de fond au Québec. Pour résoudre ce problème, j'ai utilisé Puppeteer pour récupérer des bases de données en ligne obsolètes, en vérifiant la validité des liens et en recueillant des informations de base sur les centres, telles que les adresses et les coordonnées.Pour récupérer les conditions d'enneigement, j'ai de nouveau utilisé Puppeteer. J'ai écrit des scripts pour extraire des données de sites web ayant des structures similaires et j'ai identifié manuellement les éléments HTML pour les sites plus complexes. Ces scripts étaient exécutés quotidiennement pour maintenir les données à jour.La normalisation des données a constitué un autre obstacle. J'ai utilisé l'API OpenAI pour analyser et formater les informations, en me concentrant sur des détails clés tels que le statut opérationnel, les pistes fermées, les conditions d'enneigement et la date de mise à jour
