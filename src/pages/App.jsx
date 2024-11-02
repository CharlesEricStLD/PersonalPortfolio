//Hero Section 

import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Snackbar, Alert, Tooltip } from '@mui/material'
import homePagePhoto from "../assets/homePagePhoto.png"
import ToolsSection from "../components/ToolsSection"
import Header from '../components/Header'
import ProjectsSection from '../components/ProjectsSection'
import contactMeIcon from "../assets/contactMeIcon.png"
import {CrossCountryProject} from '../assets/translations/projectsList'
import {MediaIcons} from "../components/MediaIcons"
import { ScrollRestoration } from 'react-router-dom'
import Seo from "../components/Seo"
import { useTranslation } from 'react-i18next';

//Todo : integrate the browser language detector
//Todo : Add translation for al elmeent in the home page (DONE!)
//Todo : Add translation for the crossCountryProjectPage
//TOdo : Style the button.
//Todo LATER : Use multiple file for translation

const name = "Hi, I'm Charles- Eric";
const lettersArray = name.split('');



function App() {

const { t, i18n } = useTranslation();

const lngs = [
  { code: "en", native: "English" },
  { code: "fr", native: "Francais" },
];

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

const [open, SetOpen] = useState(false);


  return (
    <>
    <Seo title="Charles-Eric St-Louis-Dupuis FullStack developer"
    description="Looking for a passionate fullstack web developer from Montreal? Discover Charles-Eric St-Louis Dupuis’ journey, projects, and expertise in React, Node.js, and more."
    type="website" url="https://cstlouidupuis.com/"/>
      <ScrollRestoration/>
      <Header/>
      <IntroSection>
      <img src={homePagePhoto} alt='Picture of Charles-Eric'></img>
      <TitleSpacingSection>
      {lettersArray.map((letter, index) => <MySpan $index={index} key={index}>{letter}</MySpan>)}
      </TitleSpacingSection>

      <SubTitleSpacingSection>
      {lngs.map((lng, i) => {
        const { code, native } = lng;
        return <button onClick={() => handleTrans(code)}>{native}</button>;
      })}   
      <h2> {t('firstIntro')}</h2>
      <h3>{t ('secondIntro')}</h3>
      <MediaIcons/>
      </SubTitleSpacingSection>
      </IntroSection>

      <ToolsSectionStyling>
      <h2>{t ('myTools')}</h2>
      <ToolsSection/>
      </ToolsSectionStyling> 
  
      <ProjectSectionStyling id="projectsSection">
      <h2>{t ("projects")}</h2>
      <ProjectsSection project={CrossCountryProject}/>
      </ProjectSectionStyling>

      <GetInTouchSection id="getInTouchSection">
      <GetInTouchContainer>
      <h2 id="getInTouchTitle" className="GetInTouch">{t("contact")}</h2>
      <GetInTouchEmailContainer onClick={() => {navigator.clipboard.writeText("ce.stlouisdupuis@gmail.com") && SetOpen(true) }}>
      <p>ce.stlouisdupuis@gmail.com</p>
      </GetInTouchEmailContainer>
      <img src={contactMeIcon} alt="Icon of a guy with a telephone, source : https://www.flaticon.com/authors/leremy " />
      </GetInTouchContainer>
      <Snackbar open={open} autoHideDuration={4000} onClose={()=>SetOpen(null)}>
      <Alert severity="success">
      {t("emailToolTip")}
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
  margin-bottom: 6%;
  font-size: calc(1.45vw + 1.45vh);

  img{
    width:45%;
    position:relative;
    left:-8%;
    float: left;
  }

  //tablet view
  @media ( min-width: 580px) and (max-width:700px) {
    img[alt="Picture of Charles-Eric"] {
      padding-bottom:10%;
    }
  } 

  //Phone view 
  @media (max-width:579px) {
    
    img[alt="Picture of Charles-Eric"]{
      min-width:10em;
    }
  }
`

const TitleSpacingSection= styled.div`
  margin-top: 8%;
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
  }`

const SubTitleSpacingSection = styled.div`

font-size: 1.2em;
//Phone View
@media (max-width:579px) {
margin-top: 15%;
}
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
`

const GetInTouchSection = styled.footer`
  text-align: center;
  display:flex;
  flex-direction: column;
  padding:unset;
  margin:unset;

  img {
    filter: invert(41%) sepia(7%) saturate(3096%) hue-rotate(197deg) brightness(97%) contrast(92%);
  }

  h2 {
    margin-bottom: 0.3em;
    font-size: 2.5em;
  }

  p {
    margin:0;
    font-size: 1em;
  }
  //Tablet view
  @media ( min-width: 580px) and (max-width:700px)  {

    h2 {
    margin-bottom: 0.3em;
    font-size: 1.75em;
  }
  }   

  //phone view 
  @media (max-width:579px) {
    h2 {
    margin-bottom: 0.3em;
    font-size: 1.75em;
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
    left: 2.5em;
  }

   //phone view 
  @media (max-width:579px) {
    img {
      margin-top:0.7em;
      align-self: center;
      position: unset;
      max-width:50%;
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

    //phone view 
  @media (max-width:579px) {  
  p {
      font-size:5vw;
    }
  }
  `
