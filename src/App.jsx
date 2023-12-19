//Hero Section 

import './App.css'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import { Snackbar, Alert } from '@mui/material'
import homePagePhoto from "./assets/homePagePhoto.png"
import ToolsSection from "./components/ToolsSection"
import Header from "./components/Header"
import ProjectsSection from './components/ProjectsSection'

const name = "Hi, I'm  Charles-Eric";
const lettersArray = name.split('');

function App() {

const [open, SetOpen] = useState(false);

  return (
    <>
      <Header/>
      <IntroSection>
      <img src={homePagePhoto}></img>
      <TitleSpacingSection>
      {lettersArray.map((letter, index) => <MySpan $index={index} key={index}>{letter}</MySpan>)}
      </TitleSpacingSection>

      <SubTitleSpacingSection>
      <h2>a passionate developper that like to work hard and build nices projects</h2>
      <h3>If you need a project well done, with passion and good vibes, I'm your dev !</h3>
      </SubTitleSpacingSection>
      </IntroSection>

      <ToolsSectionStyling>
      <h2>Tools I work with</h2>
      <ToolsSection/>
      </ToolsSectionStyling> 
  
      <ProjectSectionStyling id="projectsSection">
      <h2>My current projects</h2>
      <ProjectsSection/>
      </ProjectSectionStyling>

      <GetInTouchSection id="getInTouchSection">
      <h2 id="getInTouchTitle" className="GetInTouch">Get in Touch</h2>
      <GetInTouchIcon>    
      <SocialIcon style={{ height: 100, width: 100, marginRight:40 }} target="_blank" bgColor="black" network="linkedin" href='https://www.linkedin.com/in/charles-%C3%A9ric-st-l-dupuis-2704981b9'   ></SocialIcon>
      <SocialIcon style={{ height: 100, width: 100, marginRight:40 }} target="_blank" bgColor="black" nstyle={{ height: 100, width: 100 }} network="github" href='https://github.com/CharlesEricStLD'  > </SocialIcon>
      </GetInTouchIcon>
      <p>ce.stlouisdupuis@gmail.com</p>
      <button  variant="contained" onClick={() => {navigator.clipboard.writeText("ce.stlouisdupuis@gmail.com") && SetOpen(true) }}>Copy Email</button>
      <Snackbar open={open} autoHideDuration={4000} onClose={()=>SetOpen(null)}>
      <Alert severity="success">
      Email copied to clipboard!
      </Alert>
      </Snackbar> 
      
      </GetInTouchSection>
    </>
  )
}

export default App



const FlipAnimation = keyframes`
  
  100% {
    transform: rotateY(360deg) 
  }

`
const MySpan = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-size: 2.5em;
  animation: ${FlipAnimation} 2s;
  animation-delay: ${(props) => 0.2 * props.$index}s;
  white-space:pre;
  font-family: "LarkenExtraBold";
`

const IntroSection = styled.section`
  
  margin-bottom: 20%;

  img{
    width:50%;
    position:relative;
    left:-8%;
    float: left;
  }

  //tablet view
  @media ( min-width: 600px) and (max-width:768px) {
    font-size: 0.70em;
    h2 {
      font-size: 1.1em;
      margin:0;
      text-align: center;
    }
    h3{
      font-size: 0.9em;
    }
    span:nth-of-type(9) {
    height:0;
    }
    span:nth-of-type(9) {
    display: block;
    }
    img{
      padding-bottom:10%;
    }
  }

  //Phone view 
  @media ( min-width: 375px) and (max-width:600px) {
    font-size: 0.6em;
    h2 {
      font-size: 1.1em;
      margin:0;
      text-align: center;
    }
    h3{
      font-size: 0.9em;
    }
    span:nth-of-type(9) {
    height:0;
    }
    span:nth-of-type(9) {
    display: block;
    }
    img{
      width:40%;
      float:left;
      padding-bottom:10%;
    }
  }
`

const TitleSpacingSection= styled.div`
  margin-top: 10%;

  img{
    width:50%;
    position:relative;
    left:-8%;
    float: left;
  }

  @media ( min-width: 600px) and (max-width:768px) {
    img{
      width:45%;
    }
  }
`


const SubTitleSpacingSection = styled.div`
font-size: 1.2em;
`

const ToolsSectionStyling = styled.section`
  margin-top:10%;

   //tablet view
  @media ( min-width: 600px) and (max-width:768px)  {
  margin-top: 5%;
  }

`
const ProjectSectionStyling = styled.section`
  margin-top: 10%;
`

const GetInTouchSection = styled.footer`
  text-align: right;
  margin-top:20%;
  display:flex;
  flex-direction: column;

  button{
    font-family: "Larken";
    border-radius: 5px;
    font-size: 0.7em;
    padding:0.5% 1%;
    margin: auto;
    text-align: center;
    margin-left:85%;
    background-color: #646cff;
  }

  //Tablet view
  @media ( min-width: 600px) and (max-width:768px)  {

    #getInTouchTitle  {
      margin:none;
    }

  }   

  //phone view 
  @media ( min-width: 375px) and (max-width:767px) {

  }

`

const GetInTouchIcon = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;

  img{
    height:100px;
    margin-right:5%;
  }

  p{
    font-size: 1.2em;
  }

  div{
    display: flex;
  }

  //tablet view
  @media ( min-width: 600px) and (max-width:768px)  {

    p{
    font-size: 0.8em;
  }

  div{
    display: flex;
  }
}

  //Phone view
  @media ( min-width: 375px) and (max-width:767px) {
    
    p{
    font-size: 0.8em;
  }

  div{
      display: flex;
    }

  }
`
