import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header";
import { ScrollRestoration } from "react-router-dom";
import { useTranslation } from 'react-i18next';


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
  
  const { t, i18n } = useTranslation();

  let shortStacks = [];
  shortStacks = project.stacks.slice(0,3);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
    <ScrollRestoration />
    <Header/>
    <ProjectDescription>
    <h1>{project.nameOfProject}</h1>
    <p>{t("readTime")}</p>
    <p>{t("smalldescriptionOfProject")}</p>
    {/* table of 3 columns */}
    <PropertyOfProject>
    <div>
    <h2>Type</h2>
    <p>{t("type")}</p>
    </div>
    <div>
    <h2>Stack</h2>
    
    {/* Affichage conditionnel des stacks */}
    {project.stacks.length > 3 && !showMore ? (
        shortStacks.map(stack => <p key={`${stack} short version`}>{stack}</p>)
      ) : (
        project.stacks.map(stack => <p key={`${stack} long version`}>{stack}</p>)
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
    
    <ScreenShot src={project.screenShot1Path} alt="Screeshot of the Home page of the app"></ScreenShot>
    <h2>{t("projectPurposeAndGoaltitle")}</h2>
    <p>{t("projectPurposeAndGoal")}</p>
    <h2>{t("WebStackAndExplanationtTitle")}</h2>
    <p>{t("WebStackAndExplanation")}</p>
    <h2>{t("ProblemsAndToughtProcessTitle")}</h2>
    {t("ProblemsAndToughtProcess", { returnObjects: true }).map(problem => (
      <p key={problem}>{problem}</p>
    ))}
    
    <h2>{t("lessonsLearnedTitle")}</h2>
    {t("lessonsLearned", { returnObjects: true }).map(lessonLearned => (
      <p key={lessonLearned}>{lessonLearned}</p>))}   
    </ProjectDescription>
    </>
  )
}

const PropertyOfProject = styled.div`
display : grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr;

//On smaller device (starting from tablet to phone
@media (max-width:390px) {
  grid-template-columns: 1fr;
}
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
