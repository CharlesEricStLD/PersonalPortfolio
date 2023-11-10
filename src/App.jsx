//Hero Section 

import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import styled from "styled-components"
import NyanCatProject from "./assets/NyanCatImg.gif"
import FruitStoreProject from "./assets/FruitStoreWorkshop.png"
import CookieClickerProject from "./assets/CookieClickerProject.png"


//Nic eportfolio exammple : https://sharon-yi.com///

function App() {

  return (
    <>
      <h1> HI MY NAME IS CHARLES-ERIC </h1>

      <div>
      <h2>I'm a passionate developper that like to work hard and build nices projects</h2>
      <h3>If you need a project well done, with passion and good vibes, I'm your dev !</h3>
      </div>

      <h2>Tools I work with</h2>
      //List of all the icons I work with will go here ... ...//

      <h2>Down here you can see all my current projects...</h2>
      <ProjectGridContainer>
        <img src={NyanCatProject} alt= "Image of my NyanCat project"></img>
        <img src={FruitStoreProject} alt= "Image of my Fruit Store webPage"></img>
        <img src={CookieClickerProject} alt= "Image of my Cookie Clicker game"/>
      </ProjectGridContainer>

      <h2>Get in Touch</h2>
      LinkedIN Logo (With Link)
      GitHub LOgo (with Link)
      
      
    </>
  )
}

export default App

const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  img {
    width:100%;
  }

`
