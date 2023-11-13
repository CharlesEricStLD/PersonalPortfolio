//Hero Section 

import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import styled from "styled-components"
import NyanCatProject from "./assets/NyanCatImg.gif"
import FruitStoreProject from "./assets/FruitStoreWorkshop.png"
import CookieClickerProject from "./assets/CookieClickerProject.png"
import javascriptLogo from "./assets/javascriptLogo.png"
import css3Logo from "./assets/css3Logo.png"
import gitlogo from "./assets/gitLogo.png"
import reactLogo from "./assets/reactLogo.png"
import nodeJsLogo from "./assets/nodejsLogo.png"
import mongoDbLogo from "./assets/mongodbLogo.png"
import { SocialIcon } from 'react-social-icons'
import Tooltip from '@mui/material/Tooltip';

//Nic eportfolio exammple : https://sharon-yi.com///

function App() {

  return (
    <>
      <TitleSpacingSection>
      <h1> HI MY NAME IS CHARLES-ERIC </h1>
      </TitleSpacingSection>

      <SubTitleSpacingSection>
      <h2>I'm a passionate developper that like to work hard and build nices projects</h2>
      <h3>If you need a project well done, with passion and good vibes, I'm your dev !</h3>
      </SubTitleSpacingSection>


      <SpacingSection>
      <h2>Tools I work with</h2>
      <LogoSection>
        <Tooltip title="Javascript" placement="top">
        <img src={javascriptLogo} alt="Logo of Javascript" />
        </Tooltip>
        <Tooltip title="CSS" placement="top">
        <img src={css3Logo} alt="Logo of Css" />
        </Tooltip>

        <Tooltip title="Git" placement="top">
        <img src={gitlogo} alt="Logo of Git" />
        </Tooltip>

        <Tooltip title="React" placement="top">
        <img src={reactLogo} alt='Logo of React'></img>
        </Tooltip>

        <Tooltip title="Node JS" placement="top">
        <img src={nodeJsLogo} alt='Logo of NodeJs'></img>
        </Tooltip>

        <Tooltip title="Mongo Database" placement="top">
        <img src={mongoDbLogo} alt='Logo of MongoDb'></img>
        </Tooltip>
      </LogoSection>
      </SpacingSection>

      <SpacingSection>
      <h2>Down here you can see all my current projects...</h2>
      <ProjectGridContainer>
        
        
        <img src={NyanCatProject} alt= "Image of my NyanCat project"></img>
        
        <div style={{position:"relative"}}>
        <HoverlayEffect> <p>Simple Store to buy fruits from with a description page for each fruits</p> </HoverlayEffect>
        <img src={FruitStoreProject} alt= "Image of my Fruit Store webPage" ></img>
        </div>

        <div style={{position:"relative"}}>
        <HoverlayEffect> <p>The classic Cookie game clicker</p> </HoverlayEffect>
        <img src={CookieClickerProject} alt= "Image of my Cookie Clicker game"/>
        </div>

      </ProjectGridContainer>
      </SpacingSection>

      <GetInTouchSection>
      <h2 className="GetInTouch">Get in Touch</h2>
      <GetInTouchIcon>    
      <SocialIcon target="_blank" bgColor="blue" network="linkedin" href='https://www.linkedin.com/in/charles-%C3%A9ric-st-l-dupuis-2704981b9'></SocialIcon>
      <SocialIcon target="_blank" bgColor="blue" network="email" href='mailto:ce.stlouisdupuis@gmail.com'> </SocialIcon>
      <SocialIcon target="_blank" bgColor="blue" network="github" href='https://github.com/CharlesEricStLD'> </SocialIcon>
      <p>ce.stlouisdupuis@gmail.com</p>
      </GetInTouchIcon>
      </GetInTouchSection>
    </>
  )
}

export default App

const TitleSpacingSection= styled.section`
  padding-top: 10%;
`
const SubTitleSpacingSection = styled.section`
`

const SpacingSection = styled.div`
  padding-top:15%;
`

const LogoSection = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 5%;

img{
  width:50px;
}
`

const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2%;

  img {
  position:relative;
  width: 100%;
  height: 100%;
  z-index:-1;
  }
`

const HoverlayEffect = styled.div`
position:absolute;
width:100%;
height:100%;
display: flex;
justify-content: center;

&:hover, p:hover{
  background-color: blue;
  color: white;
  animation: BackgroundChange 0.5s ease-in-out;
}

& p{
  width:100%;
  text-align: center;
  padding-top:25%;
  font-size: 1.2em;
  color:#ffffff00
}

@keyframes BackgroundChange {
  from {opacity: 0;}
  to {opacity: 1;}
}
`

const GetInTouchSection = styled.footer`
  text-align: right;
  padding-top:20%;
`

const GetInTouchIcon = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;

  img{
    height:100px;
    margin-right:5%;
  }

`
