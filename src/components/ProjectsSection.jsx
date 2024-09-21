//Project Section 

import styled from "styled-components"
import crossCountryFinder from "../assets/crossCountryFinderScreenShot2.png"
import { useNavigate } from "react-router-dom"



const ProjectsSection = () => {
  
  const navigate = useNavigate();

  const goToNewPage = (path) => {
    navigate(path);
    window.scrollTo(0, 0)
  } 

  const techsUse = ["Javascript", "React", "Node.js", "MongoDB", "Open AI API"]
  
  return (
    <ProjectsGridContainer>
        
        <ProjectContainer>
        <ProjectDescription>
        <h5>Personal Project</h5>
        <h2>Cross Country Finder</h2>
        <TechsUsed>
          {techsUse.map(tech => 
          <TechUse><span>{tech}</span></TechUse>
          )}
        </TechsUsed>
        
        <ResumeOfProject>
        <p>It's a pain to navigate multiple websites for snow conditions at Quebec’s cross-country centers. This project centralizes up-to-date information, providing a streamlined experience to quickly find conditions for favorite spots. Say goodbye to the hassle and enjoy seamless planning for the next ski trip!</p>
        </ResumeOfProject>
        
        <ViewProjectButton onClick={() => goToNewPage("/CrossCountryFinder")}>View project</ViewProjectButton>
          </ProjectDescription>
        <ProjectImage onClick={() => goToNewPage("/CrossCountryFinder")}>
        {/* <HoverlayEffect> <p>Fullstack website to find update condition of all crossCountry center in Quebec (to deployed soon)</p> </HoverlayEffect> */}
        <img src={crossCountryFinder} alt= "Image of CrossCountry Finder" ></img>
        </ProjectImage>
        
        </ProjectContainer>
      </ProjectsGridContainer>
  )
}

export default ProjectsSection

const ProjectsGridContainer = styled.div`
  margin-bottom:4% ;

  h5 {
    margin:unset;
  }

  h2 {
    margin:unset
  }

//tablet view
@media ( min-width: 580px) and (max-width:700px) {
  grid-template-columns: 1fr;
}

//Phone view
@media(max-width:579px) {
  grid-template-columns: 1fr;
}`

const ProjectContainer = styled.div`
display: grid;
grid-template-columns: 3fr 2fr;
column-gap: 4%;

//tablet view
@media ( min-width: 580px) and (max-width:700px) {
  display:flex;
  flex-direction: column;
}

//Phone view
@media(max-width:579px) {
  display:flex;
  flex-direction: column;
}` 

const ProjectDescription = styled.div`
//tablet view
@media ( min-width: 580px) and (max-width:700px) {
  margin-bottom: 8%;
  h2 {
    margin: 2% 0 2% 0;
  }
}

//Phone view
@media(max-width:579px) {
  font-size: 0.7em;
  margin-bottom: 8%;
  h2 {
    margin: 2% 0 2% 0;
  }
}`

const TechsUsed = styled.div`
  display:flex;
  flex-wrap: wrap;`

const TechUse = styled.div`
  background-color: black;
  margin: 2% 2% 2% 0;
  padding:0.5% 2%;
  border-radius: 10px;

  span{
    display: inline-block;
    font-size: 0.8em;
  }`

const ResumeOfProject = styled.div`
  margin-top:4%;`

const ProjectImage = styled.div`
  margin:auto;
  cursor: pointer;
  width:fit-content;
  height:fit-content;

  img {
    object-fit: contain;
    width:100%;
    height:100%;
    border-radius:15px;
  }`

const ViewProjectButton = styled.button`
  padding:2%;
  text-align: center;
  font-size: 1.2em;
  background-color: black;
  color:#fff3af;
  border-radius: 10px;
  font-family: "Larken", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  border:none;

  &:hover, &:focus{
    color:#646cff
  }`
