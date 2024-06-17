import styled from "styled-components";
import crossCountryFinderScreenShot from  "../../public/ScreenShot1CrossCountryFinder.png"

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


// This project was really big but very interesting. I learn a lot about pupeteer, automation and web scraping. I now realise that some thing is better done by hand (like finding the ski condition for some of differents cross country centers) and some thing can be done really fast with automation when the website structure is the same. Also, I having never use the Open AI APi before, I learned about the structure of the prompt and the different ways to formulate it and the parameters like temperature to controll the difference between each answer to leverage AI with as much precision as possible to parse big and very different data. 



// MY ANSWER BEFORE AI of my tought and processs : 

// ["My first problem was that there wasn't any database of all the crossCountry centers in Quebec, So my first job was to extract much as I can from other website or blog and confirm that the center still exist. To assess this problem I decided to use Pupeteer and it's automation and scraping functionality. I first write a script to scrape an already, but very outdated database on the web and check if the web link was still inactive (don't end-up dead or give me a 404 page). After that, I need to get the address, phone and email of each center. So I create a second pupeteer script to automate a search on Google and to scrape the data return by the script.", "When I get my database validate and import into Mongo DB, I need to find the snow condition of each center. Some condition are on the home page, some condition are in a specific url on the website. For this part, I decide to divide my task in multiple group. First one was to create a function for the website host by the same server platform and to create a function for each of them. After that, for the rest that were too much different I did it manually by going throuigh each site and finding the html element to scrape to find the condition. After that I can just run my Pupeteer script to scrape all my website specific html element each day","My third big problem was to uniformise all my data that I sccrape from the web, because what is the goal of using a databsee of condition, if it's not faster than going into the website directly. To do that I decide to use Open AI API to parse my data. I first think about the questions I wanted answer in my condition report and what was the best way to display my data. I decide to ask these questions :  Is it open or closed? Any closed tracks, snow conditions, or important warnings and what is the last updated date? I decide to present it in a table format for ease of understanding and efficiency. Finaly, to be sure that I always receive from the API the same format of answer, I ask the Open AI API to return me a Json format and I add a null answer if the AI can't find the answer"] 
//

const allStack = CrossCountryProject.stacks;


export const ProjectsPage = ({project}) => {
  return (
    <ProjectDescription>
    <h1>{project.nameOfProject}</h1>
    <p>{project.readTime}</p>
    <p>{project.smalldescriptionOfProject}</p>
    {/* table of 3 columns */}
    <PropertyOfProject>
    <div>
    <h2>Type</h2>
    <p>{project.type}</p>
    </div>
    <div>
    <h2>Stack</h2>
    {
    project.stacks.map(stack => (
    <p>{stack}</p>
    ))
    }
    </div>
    <div>
    {project.githubLink ? 
    <><h2>Github</h2><p> <a href="{project.githubLink}">GitHub</a> </p></>: <> <h2>Live</h2> <p>{project.liveLink}</p> </>}
    </div>
    </PropertyOfProject>
    {/* End of table of 3 columns */}
    
    {/* ScreenShot of the app*/}
    
    <ScreenShot src={project.screenShot1} alt="Screeshot of the Home page of the app"></ScreenShot>
    <h2>Project Purpose and Goal</h2>
    <p>{project.projectPurposeAndGoal}</p>
    <h2>Web Stack and Explanation</h2>
    <p>{project.WebStackAndExplanation}</p>
    <h2>Problems and Thought Process</h2>
    {project.ProblemsAndToughtProcess.map(problem => (
      <p>{problem}</p>
    ))}
    
    <h2>Lessons Learned & Future Work</h2>
    <p>{project.lessonsLearned}</p>    
    </ProjectDescription>
  )
}

const PropertyOfProject = styled.div`
display : grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;
`

const ProjectDescription = styled.div`
p {
  font-size: 0.8em;
}
`
const ScreenShot = styled.img`
  max-width:100%;
  max-height: auto;
`
