//Page with the description and the details of the Crosws Country Finder project

import crossCountryFinderScreenShot from  "../assets/screenShot1CrossCountryFinder.png"
import { ProjectsPage } from "./ProjectsPage";

//Component of the description of Project Page
//Alejandro model : https://www.aaspinwall.com/projects/ing

//Title
// Read time
//DescriptionOfProject (2 lines max)
//Type of Project
// Stack use/Technologies
// If project is live
//Project Purpose and Goal
//Web Stack and Explanation
//Problems and Thought Process

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

// This project was really big but very interesting. I learn a lot about pupeteer, automation and web scraping. I now realise that some thing is better done by hand (like finding the ski condition for some of differents cross country centers) and some thing can be done really fast with automation when the website structure is the same. Also, I having never use the Open AI APi before, I learned about the structure of the prompt and the different ways to formulate it and the parameters like temperature to controll the difference between each answer to leverage AI with as much precision as possible to parse big and very different data. 



// MY ANSWER BEFORE AI of my tought and processs : 

// ["My first problem was that there wasn't any database of all the crossCountry centers in Quebec, So my first job was to extract much as I can from other website or blog and confirm that the center still exist. To assess this problem I decided to use Pupeteer and it's automation and scraping functionality. I first write a script to scrape an already, but very outdated database on the web and check if the web link was still inactive (don't end-up dead or give me a 404 page). After that, I need to get the address, phone and email of each center. So I create a second pupeteer script to automate a search on Google and to scrape the data return by the script.", "When I get my database validate and import into Mongo DB, I need to find the snow condition of each center. Some condition are on the home page, some condition are in a specific url on the website. For this part, I decide to divide my task in multiple group. First one was to create a function for the website host by the same server platform and to create a function for each of them. After that, for the rest that were too much different I did it manually by going throuigh each site and finding the html element to scrape to find the condition. After that I can just run my Pupeteer script to scrape all my website specific html element each day","My third big problem was to uniformise all my data that I sccrape from the web, because what is the goal of using a databsee of condition, if it's not faster than going into the website directly. To do that I decide to use Open AI API to parse my data. I first think about the questions I wanted answer in my condition report and what was the best way to display my data. I decide to ask these questions :  Is it open or closed? Any closed tracks, snow conditions, or important warnings and what is the last updated date? I decide to present it in a table format for ease of understanding and efficiency. Finaly, to be sure that I always receive from the API the same format of answer, I ask the Open AI API to return me a Json format and I add a null answer if the AI can't find the answer"] 
//


export const CrossCountryFinder = () => {
  return (
    <ProjectsPage project={CrossCountryProject}/>
  ) 
}
