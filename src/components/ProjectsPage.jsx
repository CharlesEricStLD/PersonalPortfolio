//Component of the description of Project Page

//Title
// Read time
//DescriptionOfProject (2 lines max)
//Type of Project
// Stack use/Technologies
// If project is live
//Project Purpose and Goal
//Web Stack and Explanation
//Problems and Thought Process

const ProjectsPage = () => {
  return (
    <ProjectsPage>
    <h1>{nameOfProject}</h1>
    <p>{readTime}</p>
    <p>{SmalldescriptionOfProject}</p>
    {/* table of 3 columns */}
    <h2>Type</h2>
    <h2>Stack</h2>
    <h2>Live</h2>
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

