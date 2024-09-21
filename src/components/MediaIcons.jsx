//Component to render the Logo Section

import { useState } from 'react'
import styled from "styled-components"
import githubIcon from "../assets/githubIcon.png"
import linkedIcon from "../assets/linkedin.png"
import emailIcon from "../assets/emailIcon.png"
import resumeIcon from "../assets/resumeIcon.png"
import { Snackbar, Alert} from '@mui/material'


export const MediaIcons = () => {
  
  const icons = [
    {
      file: emailIcon,
      altName: "email",
      link : ""
    },
    {
      file: linkedIcon,
      altName: "LinkedIn",
      link : "https://www.linkedin.com/in/charleseric-stlouisdupuis/"
    },
    {
      file: githubIcon,
      altName: "Github",
      link : "https://github.com/CharlesEricStLD"
    },
    {
      file : resumeIcon,
      altName : "resume",
      link : "https://docs.google.com/document/d/16KF_GCG93zHNhRrJZPxIEdToPayID48ZEeMVgLKWGiA/edit"
    },
  ]

  const [open, SetOpen] = useState(false);

  return (
    <LogoSection>
    
    {icons.map(icon => (
      (icon.altName === "email")? (
        <IconContainer key={icon.altName}>
        <a href="mailto:ce.stlouisdupuis@gmail.com" onClick={() => {navigator.clipboard.writeText("ce.stlouisdupuis@gmail.com") && SetOpen(true) }}>
        <img src={emailIcon} alt={`Icon of email`}/>
        </a>
        </IconContainer>
      ) : (
      <IconContainer key={icon.altName}>
      <a href={icon.link} target="blank">
      <img src={icon.file} alt={`Icon of ${icon.altName}`}/>
      </a>
      </IconContainer>
      )
))}
      <Snackbar open={open} autoHideDuration={4000} onClose={()=>SetOpen(null)}>
      <Alert severity="success">
      Email copied to clipboard! 
      </Alert>
      </Snackbar> 
  </LogoSection>
  
)
}

const LogoSection = styled.ul`
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  padding:unset;
  justify-content: flex-start;
`

const IconContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 2.5% 0 2.5%;
  min-width: 1em;
  min-height: 1em;
  max-width: 2.5em;
  max-height: 2.5em;

  p{
    text-align: center;
  }

  a > img {
    width:100%;
    height:100%;
    filter: invert(41%) sepia(7%) saturate(3096%) hue-rotate(197deg) brightness(97%) contrast(92%);
  }
    a > img[alt='Icon of email'] {
    min-height:140%;
    min-width:140%;
  }
  &:has(img[alt='Icon of LinkedIn']) {
    margin-left: 2%;
  }

//tablet view
@media ( min-width: 580px) and (max-width:700px) {
  max-width: 3em;  

  &:has(img[alt='Icon of LinkedIn']) {
    margin-left: 5%;
  }

  p{
    font-size:0.8em;
  }
}

//Phone view
@media(max-width:579px) {
  max-width: 3em;
  padding:2.5%;
  margin-top: 5%;

  &:has(img[alt='Icon of LinkedIn']) {
    margin-left: 5%;
  }

  p{
    font-size:0.5em;
  }
}
`
