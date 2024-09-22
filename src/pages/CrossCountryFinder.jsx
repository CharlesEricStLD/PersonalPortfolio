//Page with the description and the details of the Crosws Country Finder project

import crossCountryFinderScreenShot from  "../assets/screenShot1CrossCountryFinder.png"
import { ProjectsPage } from "./ProjectsPage";
import Seo from "../components/Seo"

const CrossCountryProject = 
{
nameOfProject : "Cross Country Finder",
screenShot1 : crossCountryFinderScreenShot,
readTime : "5 min", 
smalldescriptionOfProject : "This full-stack website is devoted to finding and presenting the current snow conditions for all cross-country ski centers in Quebec, ensuring users have quick access to the latest updates.",
type: "Outdoor utility platform",
stacks: ["JavaScript","React","NodesJS","Vite","MongoDB","OpenAi API","Puppeteer"],
githubLink : "https://github.com/CharlesEricStLD/FinalProject",
liveLink: "To be deployed",
projectPurposeAndGoal: "In Quebec, cross-country centers are typically managed by private operators, each maintaining their own website and presenting snow conditions in varying formats. This fragmentation means that to check conditions across multiple centers, users must tediously search and navigate each website individually. The aim of this project is to address this issue by creating a centralized database for up-to-date snow conditions in all Quebec cross-country centers. Our platform offers users a streamlined experience, allowing them to easily find the latest conditions for their favorite centers, login in their profile and creating favorite.",
WebStackAndExplanation : "The stack for this project is JavaScript-based. For the front end, I chose React with Vite for its fast build times and efficient development experience. On the back end, I used Node.js due to my familiarity with it and its robust performance. To gather the necessary data from various websites, I implemented automation with Puppeteer, a powerful JavaScript tool for web scraping and automating web-based tasks. Finally, I selected MongoDB for the database to effectively manage and store the collected snow condition data and centers informations. To parse the conditions into a uniform format, I decided to leverage AI. Given my familiarity with the ChatGPT prompt style, I opted to use the OpenAI API for this purpose.",
ProblemsAndToughtProcess : [
  "My first challenge was the lack of a comprehensive database for cross-country centers in Quebec. To resolve this, I used Puppeteer to scrape outdated online databases, checking link validity and collecting basic center information such as addresses and contact details.",
  
  "For retrieving snow conditions, I employed Puppeteer again. I wrote scripts to extract data from websites with similar structures and manually identified HTML elements for more complex sites. These scripts ran daily to keep the data up-to-date.",
  
  "Standardizing the data was another hurdle. I utilized the OpenAI API to parse and format the information, focusing on key details like operational status, closed tracks, snow conditions, and update dates. The API responses were standardized in JSON format, ensuring consistency and clarity.",
  
  "This approach effectively addressed the data collection and standardization challenges, resulting in a reliable and organized database."
],
lessonsLearned: ["This project was substantial but highly engaging. I gained extensive knowledge about Puppeteer, automation, and web scraping. I've realized that some tasks, such as checking ski conditions at various cross-country centers, are better done manually, while others can be swiftly automated when website structures are consistent. Additionally, having never used the OpenAI API before, I learned about prompt structuring, various formulation techniques, and parameters like temperature to control response variability. This allowed me to leverage AI with greater precision for parsing large and diverse datasets.","For future updates, I plan to add notifications to inform users when their favorite centers open and to collect additional information, such as rental possibilities and entry prices. Afterward, the next step will be to transition the app to mobile using React Native."] 
}


export const CrossCountryFinder = () => {
  return (
    <>
    <Seo title="Cross Country Finder project"
    description="Looking for the latest snow conditions at cross-country ski centers in Quebec? Discover Charles-Eric St-Louis Dupuis's fullstack project for quick updates!"
    type="website" url="https://cstlouidupuis.com/cross-country-finder"/>
    <ProjectsPage project={CrossCountryProject}/>
    </>
  ) 
}
