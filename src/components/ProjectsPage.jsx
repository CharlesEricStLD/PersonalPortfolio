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
projectPurposeAndGoal: "In Quebec, cross-country centers are typically managed by private operators, each maintaining their own website and presenting snow conditions in varying formats. This fragmentation means that to check conditions across multiple centers, users must tediously search and navigate each website individually. The aim of this project is to address this issue by creating a centralized database for up-to-date snow conditions in all Quebec cross-country centers. Our platform offers users a streamlined experience, allowing them to easily find the latest conditions for their favorite centers.",
WebStackAndExplanation : "The stack for this project is JavaScript-based. For the front end, I chose React with Vite for its fast build times and efficient development experience. On the back end, I used Node.js due to my familiarity with it and its robust performance. To gather the necessary data from various websites, I implemented automation with Puppeteer, a powerful JavaScript tool for web scraping and automating web-based tasks. Finally, I selected MongoDB for the database to effectively manage and store the collected snow condition data and centers informations. To parse the conditions into a uniform format, I decided to leverage AI. Given my familiarity with the ChatGPT prompt style, I opted to use the OpenAI API for this purpose.",
ProblemsAndToughtProcess : ""


}

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

