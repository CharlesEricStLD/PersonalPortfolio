//Hero Section 

import './App.css'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import FruitStoreProject from "./assets/fruitStoreWorkshop.png"
import CookieClickerProject from "./assets/cookieClickerProject.png"
import javascriptLogo from "./assets/javascript.png"
import css3Logo from "./assets/css3.png"
import gitlogo from "./assets/git.png"
import reactLogo from "./assets/react.png"
import nodeJsLogo from "./assets/nodejsLogo.png"
import mongoDbLogo from "./assets/mongodbLogo.png"
import { SocialIcon } from 'react-social-icons'
import Tooltip from '@mui/material/Tooltip';
import { Snackbar, Alert } from '@mui/material'
import HomePagePhoto from "./assets/homePagePhoto.png"
import fizzGame from "./assets/fizzGame.png"
import Header from "./Components/Header"

const name = "Hi, I'm  Charles-Eric";
const lettersArray = name.split('');

function App() {

const [open, SetOpen] = useState(false);

  return (
    <>
      <Header/>
      <IntroSection>
      <img src={HomePagePhoto}></img>
      <TitleSpacingSection>
      {lettersArray.map((letter, index) => <MySpan $index={index} key={index}>{letter}</MySpan>)}
      </TitleSpacingSection>

      <SubTitleSpacingSection>
      <h2>a passionate developper that like to work hard and build nices projects</h2>
      <h3>If you need a project well done, with passion and good vibes, I'm your dev !</h3>
      </SubTitleSpacingSection>
      </IntroSection>

      <ToolsSection>
      <h2>Tools I work with</h2>
      <LogoSection>
        <Tooltip title="Javascript" placement="top" >
        <img src={javascriptLogo} alt="Logo of Javascript" />
        </Tooltip>

        <Tooltip title="CSS-3" placement="top">
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

        <Tooltip title="Mongo Database" placement="top" >
        <img src={mongoDbLogo} alt='Logo of MongoDb'></img>
        </Tooltip>
      </LogoSection>
      </ToolsSection>

      <ProjectSection id="projectsSection">
      <h2>My current projects</h2>
      <ProjectGridContainer>
        
      <div style={{position:"relative"}} onClick={()=> window.open("https://fizz-game.vercel.app/", "_blank")} >
        <HoverlayEffect> <p>The old Fizz Buzz game, made with vanilla Js and Html</p> </HoverlayEffect>
        <img src={fizzGame} alt= "Image of my FizzBuzz game" />
        </div>

        <div style={{position:"relative"}}>
        <HoverlayEffect> <p>Simple Store to buy fruits from with a description page for each fruits</p> </HoverlayEffect>
        <img src={FruitStoreProject} alt= "Image of my Fruit Store webPage" ></img>
        </div>

        <div style={{position:"relative"}}>
        <HoverlayEffect> <p>The classic Cookie game clicker</p> </HoverlayEffect>
        <img src={CookieClickerProject} alt= "Image of my Cookie Clicker game"/>
        </div>

      </ProjectGridContainer>
      </ProjectSection>

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
font-size: 1.2;
`

const LogoSection = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 5%;

  img{
    width:10%;
  }
`

const ToolsSection = styled.section`
  margin-top:10%;

   //tablet view
  @media ( min-width: 600px) and (max-width:768px)  {
  margin-top: 5%;
  }

`
const ProjectSection = styled.section`
  margin-top: 10%;
`

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
