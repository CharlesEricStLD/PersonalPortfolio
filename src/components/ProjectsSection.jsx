//Project Section 

import styled from "styled-components"

import fruitStoreProject from "../assets/fruitStoreWorkshop.png"
import crossCountryFinder from "../assets/crossCountryFinderScreenShot2.png"
import fizzGame from "../assets/fizzGame.png"
import { useNavigate } from "react-router-dom"



const ProjectsSection = () => {
  
  const navigate = useNavigate();

  const goToNewPage = (path) => {
    navigate(path);
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

        
        {/* <ProjectImage style={{cursor:"pointer"}} onClick={()=> window.open("https://fizz-game.vercel.app/", "_blank")}  >
        <HoverlayEffect> <p>The old Fizz Buzz game, made with vanilla Js and Html</p> </HoverlayEffect>
        <img src={fizzGame} alt= "Image of my FizzBuzz game"/>
        </ProjectImage>
        
        <ProjectImage>
        <HoverlayEffect> <p>Simple Store to buy fruits from with a description page for each fruits</p> </HoverlayEffect>
        <img src={fruitStoreProject} alt= "Image of my Fruit Store webPage" ></img>
        </ProjectImage> */}

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
@media ( min-width: 320px) and (max-width:579px) {
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
@media ( min-width: 320px) and (max-width:579px) {
  display:flex;
  flex-direction: column;
}

` 
const ProjectDescription = styled.div`

//tablet view
@media ( min-width: 580px) and (max-width:700px) {
  margin-bottom: 8%;

  h2 {
    margin: 2% 0 2% 0;
  }
}

//Phone view
@media ( min-width: 320px) and (max-width:579px) {

  font-size: 0.7em;
  margin-bottom: 8%;

  h2 {
    margin: 2% 0 2% 0;
  }
}
`
const TechsUsed = styled.div`
  display:flex;
  flex-wrap: wrap;
`

const TechUse = styled.div`
  background-color: black;
  margin: 2% 2% 2% 0;
  padding:0.5% 2%;
  border-radius: 10px;

  span{
    display: inline-block;
    font-size: 0.8em;
  }
`
const ResumeOfProject = styled.div`
  margin-top:4%;
`

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
  }
`
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
  }
`

const HoverlayEffect = styled.div`
position:absolute;
max-width: 500px;
max-height: 500px;
min-width:100%;
min-height:100%;
display: flex;
justify-content: center;
border-radius: 15px;

&:hover, p:hover{
  background-color: #fff3af;
  color: #535bf2;
  animation: BackgroundChange 0.5s ease-in-out;
}

& p{
  width:100%;
  text-align: center;
  padding-top:25%;
  margin:0 8%;
  font-size: 1.2em;
  color:#ffffff00
}

@keyframes BackgroundChange {
  from {opacity: 0;}
  to {opacity: 1;}
}

//tablet view
@media ( min-width: 580px) and (max-width:700px) {

  p{
    font-size: 0.9em;
  }
}

//Phone view
@media ( min-width: 320px) and (max-width:579px) {
  p{
    font-size: 0.5em;
  }
}
`
