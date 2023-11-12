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
import linkedInLogo from "./assets/linkedin.png"
import emailIcon from "./assets/emailIcon.png"


//Nic eportfolio exammple : https://sharon-yi.com///

function App() {

  return (
    <>
      <h1> HI MY NAME IS CHARLES-ERIC </h1>

      <section>
      <h2>I'm a passionate developper that like to work hard and build nices projects</h2>
      <h3>If you need a project well done, with passion and good vibes, I'm your dev !</h3>
      </section>

      <section>
      <h2>Tools I work with</h2>
      <LogoSection>
        <img src={javascriptLogo} alt="Logo of Javascript" />
        <img src={css3Logo} alt="Logo of Css" />
        <img src={gitlogo} alt="Logo of Git" />
        <img src={reactLogo} alt='Logo of React'></img>
        <img src={nodeJsLogo} alt='Logo of NodeJs'></img>
        <img src={mongoDbLogo} alt='Logo of MongoDb'></img>
      </LogoSection>
      </section>

      <h2>Down here you can see all my current projects...</h2>
      <ProjectGridContainer>
        <img src={NyanCatProject} alt= "Image of my NyanCat project"></img>
        <img src={FruitStoreProject} alt= "Image of my Fruit Store webPage"></img>
        <img src={CookieClickerProject} alt= "Image of my Cookie Clicker game"/>
      </ProjectGridContainer>

      <GetInTouchSection>
      <h2 className="GetInTouch">Get in Touch</h2>
      <GetInTouchIcon>
      <img src={linkedInLogo} alt='Logo of LinkedIn'></img>
      <img src={emailIcon} alt="icon of email"/>
      </GetInTouchIcon>
      </GetInTouchSection>

      
    </>
  )
}

export default App

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

const GetInTouchSection = styled.section`
  text-align: right;
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
