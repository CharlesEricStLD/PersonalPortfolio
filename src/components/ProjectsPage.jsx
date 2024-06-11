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
nameOfProject : "crossCountryFinder",
readTime : "2 min", 
smalldescriptionOfProject : "This full-stack website is devoted to finding and presenting the current snow conditions for all cross-country ski centers in Quebec, ensuring users have quick access to the latest updates.",
type: "Outdoor utility platform",
stacks: ["JavaScript","React","Vite","NodesJS","MongoDB","OpenAi API","Puppeteer"],
githubLink : "https://github.com/CharlesEricStLD/FinalProject",
livelink: "To be deployed",
projectPurposeAndGoal: "In Quebec, cross-country centers are typically managed by private operators, each maintaining their own website and presenting snow conditions in varying formats. This fragmentation means that to check conditions across multiple centers, users must tediously search and navigate each website individually. The aim of this project is to address this issue by creating a centralized database for up-to-date snow conditions in all Quebec cross-country centers. Our platform offers users a streamlined experience, allowing them to easily find the latest conditions for their favorite centers, login in their profile and creating favorite.",
WebStackAndExplanation : "The stack for this project is JavaScript-based. For the front end, I chose React with Vite for its fast build times and efficient development experience. On the back end, I used Node.js due to my familiarity with it and its robust performance. To gather the necessary data from various websites, I implemented automation with Puppeteer, a powerful JavaScript tool for web scraping and automating web-based tasks. Finally, I selected MongoDB for the database to effectively manage and store the collected snow condition data and centers informations. To parse the conditions into a uniform format, I decided to leverage AI. Given my familiarity with the ChatGPT prompt style, I opted to use the OpenAI API for this purpose.",
ProblemsAndToughtProcess : [" My first problem was that there wasn't any database of all the cross-country centers in Quebec. So, my first task was to extract as much information as possible from other websites or blogs and confirm that each center still existed. To address this problem, I decided to use Puppeteer for its automation and scraping functionality. I first wrote a script to scrape an existing but very outdated database on the web and check if the web links were still active (i.e., they didn't lead to a dead or 404 page). After that, I needed to get the address, phone number, and email of each center. So, I created a second Puppeteer script to automate a Google search and scrape the data returned by the script. Once my database was validated and imported into MongoDB, I needed to find the snow conditions for each center. Some conditions were on the homepage, while others were on a specific URL on the website. For this part, I decided to divide my task into multiple groups. The first group was to create a function for websites hosted by the same server platform and to create a function for each of them. After that, for the rest that were too different, I did it manually by going through each site and finding the HTML elements to scrape to find the conditions. After that, I could just run my Puppeteer script to scrape all my website-specific HTML elements each day. My third big problem was to standardize all the data I scraped from the web because the goal of using a database of conditions was to be faster than visiting the websites directly. To achieve this, I decided to use the OpenAI API to parse my data. I first thought about the questions I wanted to answer in my condition report and the best way to display my data. I decided to ask these questions: Was it open or closed? Were there any closed tracks, snow conditions, or important warnings? And what was the last updated date? I decided to present this information in a table format for ease of understanding and efficiency. Finally, to ensure that I always received the same format of answers from the API, I asked the OpenAI API to return the data in JSON format and to add a null answer if the AI couldn't find the answer."],
lessonsLearned: "This project was substantial but highly engaging. I gained extensive knowledge about Puppeteer, automation, and web scraping. I've realized that some tasks, such as checking ski conditions at various cross-country centers, are better done manually, while others can be swiftly automated when website structures are consistent. Additionally, having never used the OpenAI API before, I learned about prompt structuring, various formulation techniques, and parameters like temperature to control response variability. This allowed me to leverage AI with greater precision for parsing large and diverse datasets."
}

// This project was really big but very interesting. I learn a lot about pupeteer, automation and web scraping. I now realise that some thing is better done by hand (like finding the ski condition for some of differents cross country centers) and some thing can be done really fast with automation when the website structure is the same. Also, I having never use the Open AI APi before, I learned about the structure of the prompt and the different ways to formulate it and the parameters like temperature to controll the difference between each answer to leverage AI with as much precision as possible to parse big and very different data. 



// MY ANSWER BEFORE AI of my tought and processs : 

// ["My first problem was that there wasn't any database of all the crossCountry centers in Quebec, So my first job was to extract much as I can from other website or blog and confirm that the center still exist. To assess this problem I decided to use Pupeteer and it's automation and scraping functionality. I first write a script to scrape an already, but very outdated database on the web and check if the web link was still inactive (don't end-up dead or give me a 404 page). After that, I need to get the address, phone and email of each center. So I create a second pupeteer script to automate a search on Google and to scrape the data return by the script.", "When I get my database validate and import into Mongo DB, I need to find the snow condition of each center. Some condition are on the home page, some condition are in a specific url on the website. For this part, I decide to divide my task in multiple group. First one was to create a function for the website host by the same server platform and to create a function for each of them. After that, for the rest that were too much different I did it manually by going throuigh each site and finding the html element to scrape to find the condition. After that I can just run my Pupeteer script to scrape all my website specific html element each day","My third big problem was to uniformise all my data that I sccrape from the web, because what is the goal of using a databsee of condition, if it's not faster than going into the website directly. To do that I decide to use Open AI API to parse my data. I first think about the questions I wanted answer in my condition report and what was the best way to display my data. I decide to ask these questions :  Is it open or closed? Any closed tracks, snow conditions, or important warnings and what is the last updated date? I decide to present it in a table format for ease of understanding and efficiency. Finaly, to be sure that I always receive from the API the same format of answer, I ask the Open AI API to return me a Json format and I add a null answer if the AI can't find the answer"] 
//

const ProjectsPage = () => {
  return (
    <ProjectsPage>
    <h1>{nameOfProject}</h1>
    <p>{readTime}</p>
    <p>{smalldescriptionOfProject}</p>
    {/* table of 3 columns */}
    <h2>Type</h2>
    <p>{type}</p>
    <h2>Stack</h2>
    {
    stacks.map(stack => {
      <p>{stack}</p>
    })
    }
    {githubLink ? 
    <><h2>Github</h2><p>{githubLink}</p></>: <> <h2>Live</h2> <p>{liveLink}</p> </>}
    {/* End of table of 3 columns */}
    
    {/* ScreenShot of the app*/}
    <img>{screenShot1}</img>
    <h2>Project Purpose and Goal</h2>
    <p>{projectPurposeAndGoal}</p>
    <h2>Web Stack and Explanation</h2>
    <p>{WebStackAndExplanation}</p>
    <h2>Problems and Thought Process</h2>
    <p>{ProblemsAndToughtProcess}</p>
    <h2>Lessons Learned & Future Work</h2>
    <p>{lessonsLearned}</p>    
    </ProjectsPage>
  )
}

