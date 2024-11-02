import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  i18n.use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  i18n.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  await i18n.init({
    debug: true,
    react: { useSuspense: false },
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
          shortCrossCountryDescription:"It's a pain to navigate multiple websites for snow conditions at Quebec’s cross-country centers. This project centralizes up-to-date information, providing a streamlined experience to quickly access conditions for your favorite locations. Say goodbye to the hassle and enjoy seamless planning for the next ski trip!",
          projectButton:"View project",
          shortType: "Personal project",
    nameOfProject: "Cross Country Finder",
    shortDescription:
      "It's a pain to navigate multiple websites for snow conditions at Quebec’s cross-country centers. This project centralizes up-to-date information, providing a streamlined experience to quickly access conditions for your favorite locations. Say goodbye to the hassle and enjoy seamless planning for the next ski trip!",
    readTime: "5 min",
    smalldescriptionOfProject:
      "This full-stack website is devoted to finding and presenting the current snow conditions for all cross-country ski centers in Quebec, ensuring users have quick access to the latest updates.",
    type: "Outdoor utility platform",
    stacks: [
      "JavaScript",
      "React",
      "NodesJS",
      "Vite",
      "MongoDB",
      "OpenAi API",
      "Puppeteer",
    ],
    liveLinkTitle: "To be deployed",
    projectPurposeAndGoaltitle:"Project purpose and goal",
    projectPurposeAndGoal:
      "In Quebec, cross-country centers are typically managed by private operators, each maintaining their own website and presenting snow conditions in varying formats. This fragmentation means that to check conditions across multiple centers, users must tediously search and navigate each website individually. The aim of this project is to address this issue by creating a centralized database for up-to-date snow conditions in all Quebec cross-country centers. Our platform offers users a streamlined experience, allowing them to easily find the latest conditions for their favorite centers, login in their profile and creating favorite.",
      WebStackAndExplanationtTitle:"Web stack And explanation",
      WebStackAndExplanation:
      "The stack for this project is JavaScript-based. For the front end, I chose React with Vite for its fast build times and efficient development experience. On the back end, I used Node.js due to my familiarity with it and its robust performance. To gather the necessary data from various websites, I implemented automation with Puppeteer, a powerful JavaScript tool for web scraping and automating web-based tasks. Finally, I selected MongoDB for the database to effectively manage and store the collected snow condition data and centers informations. To parse the conditions into a uniform format, I decided to leverage AI. Given my familiarity with the ChatGPT prompt style, I opted to use the OpenAI API for this purpose.",
      ProblemsAndToughtProcessTitle:"Problems and tought process",
    ProblemsAndToughtProcess: [
      "My first challenge was the lack of a comprehensive database for cross-country centers in Quebec. To resolve this, I used Puppeteer to scrape outdated online databases, checking link validity and collecting basic center information such as addresses and contact details.",

      "For retrieving snow conditions, I employed Puppeteer again. I wrote scripts to extract data from websites with similar structures and manually identified HTML elements for more complex sites. These scripts ran daily to keep the data up-to-date.",

      "Standardizing the data was another hurdle. I utilized the OpenAI API to parse and format the information, focusing on key details like operational status, closed tracks, snow conditions, and update dates. The API responses were standardized in JSON format, ensuring consistency and clarity.",

      "This approach effectively addressed the data collection and standardization challenges, resulting in a reliable and organized database.",
    ],
    lessonsLearnedTitle:"Lessons learned", 
    lessonsLearned: [
      "This project was substantial but highly engaging. I gained extensive knowledge about Puppeteer, automation, and web scraping. I've realized that some tasks, such as checking ski conditions at various cross-country centers, are better done manually, while others can be swiftly automated when website structures are consistent. Additionally, having never used the OpenAI API before, I learned about prompt structuring, various formulation techniques, and parameters like temperature to control response variability. This allowed me to leverage AI with greater precision for parsing large and diverse datasets.",
      "For future updates, I plan to add notifications to inform users when their favorite centers open and to collect additional information, such as rental possibilities and entry prices. Afterward, the next step will be to transition the app to mobile using React Native.",
    ],
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
          shortCrossCountryDescription:"Il est fastidieux de naviguer sur plusieurs sites Web pour connaître les conditions de neige dans les centres de ski de fond du Québec. Ce projet centralise l'information à jour, offrant une expérience simplifiée pour accéder rapidement aux conditions de vos endroits préférés. Profitez d'une planification rapide et efficace pour votre prochain voyage de ski de fond.",
          projectButton:"En savoir plus",
          shortType: "Projet personnel",
    nameOfProject: "Cross Country Finder",
    shortDescription:
      "It's a pain to navigate multiple websites for snow conditions at Quebec’s cross-country centers. This project centralizes up-to-date information, providing a streamlined experience to quickly access conditions for your favorite locations. Say goodbye to the hassle and enjoy seamless planning for the next ski trip!",
    readTime: "5 minutes",
    smalldescriptionOfProject:
    "Ce site est consacré à la recherche et à la présentation des conditions de neige pour tous les centres de ski de fond au Québec, assurant aux utilisateurs un accès rapide aux dernières mises à jour de ces dernières",
    type: "Plateforme de plein-air",
    liveLinkTitle: "Déploiement à venir",
    projectPurposeAndGoaltitle:"Objectif du projet",
    projectPurposeAndGoal:
      "Au Québec, les centres de ski de fond sont généralement gérés par des opérateurs privés, chacun maintenant son propre site web et présentant les conditions de neige dans des formats variés. Cette fragmentation des différents sites a comme conséquence que le fondeur moyen doit vérifier plusieurs site web différents et analyser les conditions de ceux-ci plusieurs fois pour obtenir les conditions de neige. L'objectif de ce projet est de résoudre ce problème en créant une base de données centralisée pour les conditions de neige à jour dans tous les centres de ski de fond du Québec. Notre plateforme offre aux utilisateurs une expérience simplifiée, leur permettant de trouver facilement les dernières conditions pour leurs centres préférés rapidement ainsi que de se créer un profil s'ils souhaitenet sauvegardr ceux-ci et se créer des favoris.",
      WebStackAndExplanationtTitle:"Stack technologique choisi et raisons de son utilisation",
    WebStackAndExplanation:
      "Le stack pour ce projet est une construit sur une base JavaScript, en utilisant React et Vite. J'ai choisi React avec Vite pour ses temps de construction rapides et son expérience de développement efficace. Pour le back-end, j'ai utilisé Node.js en raison de ma familiarité avec celui-ci et de ses performances robustes. Pour collecter les données nécessaires à partir de divers sites web, j'ai mis en œuvre l'automatisation avec Puppeteer, un outil JavaScript puissant pour le web scraping et l'automatisation des tâches basées sur le web. Enfin, j'ai choisi MongoDB comme base de données pour gérer et stocker efficacement les données collectées sur les conditions d'enneigement et les informations sur les centres. Pour analyser les conditions dans un format uniforme, j'ai décidé d'utiliser l'intelligence artificiel. Étant donné ma familiarité avec le style de formulation de ChatGPT, j'ai choisi d'utiliser l'API OpenAI à cette fin.",
      ProblemsAndToughtProcessTitle:"Problèmes et processus de réflexion",
      ProblemsAndToughtProcess: [
      "Mon premier défi était l'absence d'une base de données complète pour les centres de ski de fond au Québec. Pour résoudre ce problème, j'ai utilisé Puppeteer pour récupérer des bases de données en ligne obsolètes, en vérifiant la validité des liens et en recueillant des informations de base sur les centres, telles que les adresses et les coordonnées de ceux-ci.", "Pour récupérer les conditions d'enneigement, j'ai de nouveau utilisé Puppeteer. J'ai conçu des scripts pour extraire des données de sites web ayant des structures similaires et j'ai identifié manuellement les éléments HTML pour les sites plus complexes. Ces scripts sont exécutés quotidiennement pour maintenir les données à jour.", "L'uniformisation des données a constitué un autre obstacle. J'ai utilisé l'API OpenAI pour analyser et formater les informations, en me concentrant sur des détails clés tels que le fait que le centre soit ouvert ou fermé, les pistes fermées, les conditions d'enneigement et la dernière date de mise à jour. Les réponses de l'API ont été normalisées au format JSON, ce qui a permis d'assurer la cohérence et l'uniformité lors de l'utilisation de celle-ci ",
      " Cette approche a permis de relever efficacement les défis liés à la collecte et à la standardisation des données, ce qui s'est traduit par une base de données fiable et organisée."
    ],
    lessonsLearnedTitle:"Apprentissages", 
    lessonsLearned: ["Ce projet était substantiel mais très engageant. J'ai acquis des connaissances approfondies sur Puppeteer, l'automatisation et le web scraping. J'ai réalisé que certaines tâches, telles que la vérification des conditions de ski dans différents centres de ski de fond, sont mieux réalisées manuellement, tandis que d'autres peuvent être rapidement automatisées lorsque les structures des sites web sont cohérentes. En outre, n'ayant jamais utilisé l'API OpenAI auparavant, j'ai découvert la structuration des messages, diverses techniques de formulation et des paramètres tels que la température pour contrôler la variabilité de la réponse. Cela m'a permis d'exploiter l'IA avec une plus grande précision pour analyser des ensembles de données vastes et diversifiés",
"Pour les prochaines améliorations, je prévois d'ajouter des notifications pour informer les utilisateurs de l'ouverture de leurs centres préférés et de collecter des informations supplémentaires, telles que les possibilités de location et les prix d'entrée. Ensuite, si le projet se développe bien, je souhaiterais offrir l'application sous forme d'application mobile en transitant le code sur React Native.",
    ],
        }
      }
    }
  });

export default i18n;

//todo Translation to add 
// DESCRIOTION DU PEIJET CROSS COUNTRY : 
// Recherche de pistes de ski de fond5 minCe site Web complet est consacré à la recherche et à la présentation des conditions de neige actuelles pour tous les centres de ski de fond au Québec, assurant aux utilisateurs un accès rapide aux dernières mises à jour.Type de sitePlate-forme utilitaire extérieurePileJavaScriptReactNodesJSEn savoir plusGithubGitHubCapture d'écran de la page d'accueil de l'applicationBut et objectif du projetAu Québec, les centres de ski de fond sont généralement gérés par des opérateurs privés, chacun maintenant son propre site web et présentant les conditions de neige dans des formats variés. Cette fragmentation signifie que pour vérifier les conditions dans plusieurs centres, les utilisateurs doivent effectuer des recherches fastidieuses et naviguer sur chaque site Web individuellement. L'objectif de ce projet est de résoudre ce problème en créant une base de données centralisée pour les conditions de neige à jour dans tous les centres de ski de fond du Québec. Notre plateforme offre aux utilisateurs une expérience simplifiée, leur permettant de trouver facilement les dernières conditions pour leurs centres préférés, de se connecter à leur profil et de créer leurs favoris.  

// Pile Web et explicationLa pile de ce projet est basée sur JavaScript. Pour le front-end, j'ai choisi React with Vite pour ses temps de construction rapides et son expérience de développement efficace. Pour le back-end, j'ai utilisé Node.js en raison de ma familiarité avec lui et de ses performances robustes. Pour collecter les données nécessaires à partir de divers sites web, j'ai mis en œuvre l'automatisation avec Puppeteer, un outil JavaScript puissant pour le web scraping et l'automatisation des tâches basées sur le web. Enfin, j'ai choisi MongoDB comme base de données pour gérer et stocker efficacement les données collectées sur les conditions d'enneigement et les informations sur les centres. Pour analyser les conditions dans un format uniforme, j'ai décidé d'utiliser l'IA. Étant donné ma familiarité avec le style d'invite ChatGPT, j'ai choisi d'utiliser l'API OpenAI à cette fin.Problèmes et processus de réflexionMon premier défi était l'absence d'une base de données complète pour les centres de ski de fond au Québec. Pour résoudre ce problème, j'ai utilisé Puppeteer pour récupérer des bases de données en ligne obsolètes, en vérifiant la validité des liens et en recueillant des informations de base sur les centres, telles que les adresses et les coordonnées.Pour récupérer les conditions d'enneigement, j'ai de nouveau utilisé Puppeteer. J'ai écrit des scripts pour extraire des données de sites web ayant des structures similaires et j'ai identifié manuellement les éléments HTML pour les sites plus complexes. Ces scripts étaient exécutés quotidiennement pour maintenir les données à jour.La normalisation des données a constitué un autre obstacle. J'ai utilisé l'API OpenAI pour analyser et formater les informations, en me concentrant sur des détails clés tels que le statut opérationnel, les pistes fermées, les conditions d'enneigement et la date de mise à jour
