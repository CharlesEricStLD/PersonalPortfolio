import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header";
import { ScrollRestoration } from "react-router-dom";

//Title
// Read time
//DescriptionOfProject (2 lines max)
//Type of Project
// Stack use/Technologies
// If project is live
//Project Purpose and Goal
//Web Stack and Explanation
//Problems and Thought Process


export const ProjectsPage = ({project}) => {
  let shortStacks = [];
  shortStacks = project.stacks.slice(0,3);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
    <ScrollRestoration />
    <Header/>
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
    
    {/* Affichage conditionnel des stacks */}
    {project.stacks.length > 3 && !showMore ? (
        shortStacks.map(stack => <p key={stack}>{stack}</p>)
      ) : (
        project.stacks.map(stack => <p key={stack}>{stack}</p>)
      )}
      
      {/* Bouton pour basculer entre 'Show more' et 'Show less' */}
      {<ShowMoreButton onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}
        </ShowMoreButton>
      }
    </div>

    <div>
    {project.githubLink ? 
    <><h2>Github</h2><p> <a href={project.githubLink}>GitHub</a> </p></>: <> <h2>Live</h2> <p>{project.liveLink}</p> </>}
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
    {project.lessonsLearned.map(lessonLearned => (
      <p>{lessonLearned}</p>))}   
    </ProjectDescription>
    </>
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

const ShowMoreButton = styled.button`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
  color: rgb(158, 158, 255);

  :focus {
    outline: revert;
  }
`
