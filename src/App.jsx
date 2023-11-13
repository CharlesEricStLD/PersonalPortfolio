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
import { useNavigate } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import ContactUs from './Components/Form'

//Nic eportfolio exammple : https://sharon-yi.com///

function App() {


  const navigate = useNavigate();

  const handleEmailClick =() => {
    window.open('mailto:ce.stlouisdupuis@gmail.com?subject=Subject&body=Body%20goes%20here')
  }


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
        <img src={javascriptLogo} alt="Logo of Javascript" />
        <img src={css3Logo} alt="Logo of Css" />
        <img src={gitlogo} alt="Logo of Git" />
        <img src={reactLogo} alt='Logo of React'></img>
        <img src={nodeJsLogo} alt='Logo of NodeJs'></img>
        <img src={mongoDbLogo} alt='Logo of MongoDb'></img>
      </LogoSection>
      </SpacingSection>

      <SpacingSection>
      <h2>Down here you can see all my current projects...</h2>
      <ProjectGridContainer>
        <img src={NyanCatProject} alt= "Image of my NyanCat project"></img>
        <img src={FruitStoreProject} alt= "Image of my Fruit Store webPage"></img>
        <img src={CookieClickerProject} alt= "Image of my Cookie Clicker game"/>
      </ProjectGridContainer>
      </SpacingSection>

      <GetInTouchSection>
      <h2 className="GetInTouch">Get in Touch</h2>
      <GetInTouchIcon>    
      <SocialIcon target="_blank" bgColor="blue" network="linkedin" href='https://www.linkedin.com/in/charles-%C3%A9ric-st-l-dupuis-2704981b9'></SocialIcon>
      <SocialIcon target="_blank" bgColor="blue" network="email" href='mailto:ce.stlouisdupuis@gmail.com'> </SocialIcon>
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

img{
  width:60px;
}
`

const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
