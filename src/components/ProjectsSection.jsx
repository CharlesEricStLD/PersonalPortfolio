//Project Section 

import styled from "styled-components"

import fruitStoreProject from "../assets/fruitStoreWorkshop.png"
import crossCountryFinder from "../assets/crossCountryFinder.png"
import fizzGame from "../assets/fizzGame.png"
import { useNavigate } from "react-router-dom"



const ProjectsSection = () => {
  
  const navigate = useNavigate();

  const goToNewPage = (path) => {
    navigate(path);
  } 
  
  return (
    <ProjectGridContainer>
        
      <ProjectContainer style={{cursor:"pointer"}} onClick={()=> window.open("https://fizz-game.vercel.app/", "_blank")}  >
        <HoverlayEffect> <p>The old Fizz Buzz game, made with vanilla Js and Html</p> </HoverlayEffect>
        <img src={fizzGame} alt= "Image of my FizzBuzz game"/>
        </ProjectContainer>
        
        <ProjectContainer style={{cursor:"pointer"}} onClick={() => goToNewPage("/CrossCountryFinder")}>
        <HoverlayEffect> <p>Fullstack website to find update condition of all crossCountry center in Quebec (to deployed soon)</p> </HoverlayEffect>
        <img src={crossCountryFinder} alt= "Image of CrossCountry Finder" ></img>
        </ProjectContainer>

        <ProjectContainer>
        <HoverlayEffect> <p>Simple Store to buy fruits from with a description page for each fruits</p> </HoverlayEffect>
        <img src={fruitStoreProject} alt= "Image of my Fruit Store webPage" ></img>
        </ProjectContainer>


      </ProjectGridContainer>
  )

}

export default ProjectsSection

const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4%;
  width:100%;

  img {
  position:relative;
  min-width: 100%;
  min-height: 100%;
  max-width: 500px;
  max-height: 500px;
  z-index:-1;
  border-radius: 15px;
  }

//tablet view
@media ( min-width: 580px) and (max-width:700px) {

  grid-template-columns: 1fr;
}

//Phone view
@media ( min-width: 320px) and (max-width:579px) {
  grid-template-columns: 1fr;

  img {
  min-width: 100%;
  min-height: 100%;
  max-width: 300px;
  max-height: 300px;
  }

}

`
const ProjectContainer = styled.div`
  position: relative;
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
