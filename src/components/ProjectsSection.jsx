//Project Section 

import styled from "styled-components"

import FruitStoreProject from "../assets/fruitStoreWorkshop.png"
import CookieClickerProject from "../assets/cookieClickerProject.png"
import fizzGame from "../assets/fizzGame.png"


const ProjectsSection = () => {

  return (
    <ProjectGridContainer>
        
      <ProjectContainer style={{cursor:"pointer"}} onClick={()=> window.open("https://fizz-game.vercel.app/", "_blank")}  >
        <HoverlayEffect> <p>The old Fizz Buzz game, made with vanilla Js and Html</p> </HoverlayEffect>
        <img src={fizzGame} alt= "Image of my FizzBuzz game"/>
        </ProjectContainer>

        <ProjectContainer>
        <HoverlayEffect> <p>Simple Store to buy fruits from with a description page for each fruits</p> </HoverlayEffect>
        <img src={FruitStoreProject} alt= "Image of my Fruit Store webPage" ></img>
        </ProjectContainer>

        <ProjectContainer style={{position:"relative"}}>
        <HoverlayEffect> <p>The classic Cookie game clicker</p> </HoverlayEffect>
        <img src={CookieClickerProject} alt= "Image of my Cookie Clicker game"/>
        </ProjectContainer>

      </ProjectGridContainer>
  )

}

export default ProjectsSection

const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4%;
  width:100%;

  img {
  position:relative;
  width: 100%;
  height: 100%;
  z-index:-1;
  border-radius: 15px;
  }
`
const ProjectContainer = styled.div`
  position: relative;
`

const HoverlayEffect = styled.div`
position:absolute;
width:100%;
height:100%;
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
@media ( min-width: 600px) and (max-width:768px) {
  
  p{
    font-size: 0.9em;
  }
}

//Phone view
@media ( min-width: 375px) and (max-width:600px) {
  p{
    font-size: 0.5em;
  }
}
`
