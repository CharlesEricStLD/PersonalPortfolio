//Hero Section 

import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Snackbar, Alert, Tooltip } from '@mui/material'
import homePagePhoto from "../assets/homePagePhoto.png"
import ToolsSection from "../components/ToolsSection"
import Header from '../components/Header'
import ProjectsSection from '../components/ProjectsSection'
import contactMeIcon from "../assets/contactMeIcon.png"
import {MediaIcons} from "../components/MediaIcons"

const name = "Hi, I'm Charles- Eric";
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
      <h2>a passionate developper that like to work hard and build nice projects</h2>
      <h3>If you need a project well done, with passion and good vibes, I'm your dev !</h3>
      <MediaIcons/>
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
      <GetInTouchContainer>
      <h2 id="getInTouchTitle" className="GetInTouch">Let's have a chat !</h2>
      <GetInTouchEmailContainer>
      <p onClick={() => {navigator.clipboard.writeText("ce.stlouisdupuis@gmail.com") && SetOpen(true) }}>ce.stlouisdupuis@gmail.com</p>
      </GetInTouchEmailContainer>
      <img src={contactMeIcon} alt="Icon of a guy with a telephone, source : https://www.flaticon.com/authors/leremy " />
      </GetInTouchContainer>
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
  font-size: calc(3.8vw + 3.8vh);
  animation: ${FlipAnimation} 1s;
  animation-delay: ${(props) => 0.1 * props.$index}s;
  white-space:pre;
  font-family: "LarkenExtraBold";

  //tablet view
  @media ( min-width: 580px) and (max-width:700px) {
    font-size: calc(3.5vw + 3.5vh);
  }

  //Phone view 
  @media(max-width:579px) {
    font-size: calc(3vw + 3vh);
  }
`

const IntroSection = styled.section`
  margin-bottom: 15%;
  font-size: calc(1.45vw + 1.45vh);
  img{
    width:45%;
    position:relative;
    left:-8%;
    float: left;
  }

  //tablet view
  @media ( min-width: 580px) and (max-width:700px) {
    img{
      padding-bottom:10%;
    }
  } 

  //Phone view 
  @media (max-width:579px) {
    
    img{
      width:40%;
      float:left;
      padding-bottom:10%;
    }
  }
`

const TitleSpacingSection= styled.div`
  margin-top: 10%;
  span:nth-child(8) {
    display: block;
    height:0;
    background-color: aliceblue;
  }
  span:nth-child(17) {
    display: none;
  }

  //Phone view 
    @media (max-width:579px) {
      span:nth-child(17) {
      display: block;
      height:0;
      background-color: aliceblue;
    }
  }

   //tablet view
  @media ( min-width: 580px) and (max-width:700px) {
    img{
      width:45%;
    }
  }
`

const SubTitleSpacingSection = styled.div`
font-size: 1.2em;
`

const ToolsSectionStyling = styled.section`

h2 {
  margin: 0;
}

  //tablet view
  @media ( min-width: 579px) and (max-width:700px)  {
  margin-top: 5%;
  }

`
const ProjectSectionStyling = styled.section`
  margin-top: 10%;
`

const GetInTouchSection = styled.footer`
  text-align: center;
  display:flex;
  flex-direction: column;
  padding:unset;
  margin:unset;

  h2 {
    margin-bottom: 0.3em;
    font-size: 2.5em;
  }

  p {
    margin:0;
    font-size: 1em;
  }

  button{
    font-family: "Larken";
    border-radius: 5px;
    font-size: 0.7em;
    margin-left: 2%;
    text-align: center;
    background-color: #646cff;
  }

  //Tablet view
  @media ( min-width: 580px) and (max-width:700px)  {

    h2 {
    margin-bottom: 0.3em;
    font-size: 1.75em;
  }

  p{
    font-size: 0.75em;
  }

    button {
      font-size: 0.7em;
      width:20%;
    }

  }   

  //phone view 
  @media (max-width:579px) {
    button {
      font-size: 0.7em;
      width:40%;
      margin-left:65%;
    }

    h2 {
    margin-bottom: 0.3em;
    font-size: 1.75em;
  }

  p {
    font-size: 0.75em;
  }

  }
`

const GetInTouchContainer = styled.div `
display: flex;
flex-direction: column;
img {
    max-width: 25%;
    align-self: flex-end;
    position: relative;
    bottom:3em;
  }

  @media ( min-width: 580px) and (max-width:700px){
  img {
      margin-top:0.7em;
      align-self: center;
      position: relative;
    }
  }

   //phone view 
  @media (max-width:579px) {
    p {
      font-size:calc(2vw + 2vh);
    }
    h2 {
      font-size:calc(5vw + 5vh)
    }
    img {
      margin-top:0.7em;
      align-self: center;
      position: unset;
      max-width:75%;
    }  
  }
`

const CustomTooltip = styled(Tooltip)`
  text-align: center;
  text-decoration: none;

  img {
    width:200px;
  }

   //phone view 
   @media (max-width:579px) {
   img {
    width: calc(20vw + 20vh);
   }
  }
`

const GetInTouchEmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p{
    cursor: pointer;
  }

  `


const SocialMediaIcon = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  p{
    font-size: 1.2em;
  }

  .linkedInIcon {
    margin-right:5%;
  }

  //tablet view
  @media ( min-width: 580px) and (max-width:700px)  {

    p{
    font-size: 0.8em;
  }
}

//Phone view
  @media (max-width:579px) {
    
    p{
    font-size: 0.8em;
  }

  div{
      display: flex;
    }

  }
`
