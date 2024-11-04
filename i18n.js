import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  i18n.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  i18n.init({
    lng: 'en',
    debug: true,
    react: { useSuspense: false },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          home : "Home",
          backToHome : "Back To Home",
          aboutMe : "About Me",
          projectsHeader : "Projects",
          getInTouch : "Get In Touch",
          name : ["H", "i", ",", " ", "I", "'", "m", " ", "C", "h", "a", "r", "l", "e", "s", "-", " ", "E", "r", "i", "c"]
          ,
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
    cv: "To see my ",
      storyTitle: "My quick story",
      storyText1: "I have always loved tech from a young age. My journey began with tinkering on the family computer, which sometimes led to unintended mishaps. But just like in coding, breaking things often leads to the best learning experiences. As I often say, even Bill Gates was a novice once!",
      storyText2:"My early fascination with technology eventually guided me towards studying Biology to better understand and connect with the natural world. This passion for the outdoors led me to work as an outdoor guide, creating meaningful experiences for clients. However, my love for tech remained strong, and I naturally became the tech go-to wherever I went. This passion culminated in my decision to dive fully into the tech world, leading me to pursue a FullStack Engineering course at Concordia University.",
      developerTitle: "As a developer",
      developerEthos: "My coding ethos revolves around clarity and reusability. I work hard to ensure that my code is not only functional but also easily reusable by me and my collaborators. I strive to find the best balance between functionality and maintainability, making sure my code is both efficient and adaptable.",
      personTitle: "As a person",
      personTraits: "I’m deeply empathetic and thrive on challenges. I approach problems with a creative mindset, breaking them down and finding innovative solutions. My passion for learning—whether from others or through self-discovery—drives my creativity and helps me navigate complex situations. Curiosity is my constant companion, and I’m always eager to expand my knowledge and skills, which enriches my life and fuels my professional growth.",
      colleagueTitle: "As a colleague",
      colleagueDescription: "I’m dedicated to supporting my team and fostering a collaborative environment. I’m always ready to lend a hand, help with tasks, or keep morale high. My background as a guide and trainer enables me to break down complex concepts into understandable chunks, making me a reliable and approachable teammate. I’m always down for a coffee or a beer after work. As an outdoor enthusiast at heart, I’m your go-to for your next adventure, and I can cook up a storm both in the kitchen and the forest!",
      developerMotivation: "Even as a new developer, I strive to make my work as high quality and impactful as possible. I’m committed to delivering excellence and am eager to connect and collaborate with others who share this passion."    
        }
      }, 
      fr:{
        translation: {
          home : "Accueil",
          backToHome : "Accueil",
          aboutMe : "Mon parcours",
          projectsHeader : "Projets",
          getInTouch : "Me contacter",
          name : ["B", "o", "n", "j", "o", "u", "r,", " ", "j", "e", " ", "s", "u", "i", "s", " "," ", "C", "h", "a", "r", "l", "e", "s", "-", "E", "r", "i", "c"]
          ,
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
"Pour les prochaines améliorations, je prévois d'ajouter des notifications pour informer les utilisateurs de l'ouverture de leurs centres préférés et de collecter des informations supplémentaires, telles que les possibilités de location et les prix d'entrée. Ensuite, si le projet se développe bien, je souhaiterais offrir l'application sous forme d'application mobile en transitant le code sur React Native."],
  cv: "Pour voir mon ",
  storyTitle: "Mon parcours",
  storyText1: "J'ai toujours aimé la technologie depuis mon plus jeune âge. J'ai commencé par bricoler sur l'ordinateur familial, ce qui a parfois eu des conséquences plus ou moins graves. Mais comme pour le codage, c'est souvent en cassant les choses que l'on apprend le mieux. Comme on le dit souvent, même Bill Gates a été novice un jour !",
  storyText2: "Ma fascination précoce pour la technologie et les sciences m'a finalement poussé à étudier la biologie afin de mieux comprendre le monde qui m'entourait. À cette fascination pour la biologie, il s'est rapidement greffé une passion pour le plein air qui m'a conduit à travailler comme guide devant créé les expériences les plus significatives possibles pour les clients. Cependant, mon amour pour la technologie est resté fort, et je suis naturellement devenu la personne à qui s'adresser en matière de technologie partout où j'allais. Cette passion a culminé dans ma décision de lancer pleinement dans le monde de la technologie, ce qui m'a finalement fait suivre un cours de développeur FullStack à l'Université Concordia en 2024.",
  developerTitle: "Comme développeur",
  developerEthos: "Mon éthique de codage tourne autour de la clarté et de la réutilisation. Je travaille fort pour m'assurer que mon code est non seulement fonctionnel, mais aussi facilement réutilisable par moi et mes collaborateurs. Je m'efforce de trouver le meilleur équilibre entre fonctionnalité et maintenabilité, en m'assurant que mon code est à la fois efficace, compréhensible et adaptable.",
  personTitle: "Comme personne",
  personTraits: "Je suis profondément empathique et j'aime relever les défis. J'aborde les problèmes avec un esprit créatif, en les décomposant et en trouvant des solutions innovantes. Ma passion pour l'apprentissage - que ce soit auprès des autres ou par la découverte personnelle - alimente ma créativité et m'aide à naviguer dans des situations complexes. La curiosité est ma compagne de tous les instants, et je suis toujours prêt à me dépasser.",
  colleagueTitle: "Comme collègue",
  colleagueDescription: "Je suis dédié à soutenir mon équipe et à favoriser un environnement collaboratif. Je suis toujours prêt à donner un coup de main, à aider dans les tâches ou à maintenir une bonne ambiance. Mon expérience en tant que guide et formateur me permet de décomposer des concepts complexes en parties compréhensibles, ce qui fait de moi un collègue fiable et accessible. Après le travail, je suis toujours partant pour socialiser autour d'un café ou d'une bière. En tant que passionné de plein air, je suis votre référence pour votre prochaine aventure. Je sais cuisiner comme un chef dans la cuisine comme en forêt !",
  developerMotivation: "Finalement, même en étant nouveau développeur, je m'efforce de rendre mon travail aussi qualitatif et impactant que possible. Je suis déterminé à atteindre l'excellence et je suis impatient de me connecter et de collaborer avec d'autres personnes partageant cette passion."
        }
      }
    }
  });

export default i18n;
