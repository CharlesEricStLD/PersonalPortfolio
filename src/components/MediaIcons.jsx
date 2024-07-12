//Component to render the Logo Section

import { useState } from 'react'
import styled from "styled-components"
import githubIcon from "../assets/githubIcon.png"
import linkedIcon from "../assets/linkedin.png"
import emailIcon from "../assets/emailIcon.png"
import { Snackbar, Alert} from '@mui/material'


export const MediaIcons = () => {
  
  const [open, SetOpen] = useState(false);

  return (
    <LogoSection>
    
    <IconContainer>
    <a href="mailto:ce.stlouisdupuis@gmail.com" onClick={() => {navigator.clipboard.writeText("ce.stlouisdupuis@gmail.com") && SetOpen(true) }}>
    <img src={emailIcon} alt={`Icon of email`}/>
    </a>
    </IconContainer>

    <IconContainer>
    <a href="https://www.linkedin.com/in/charleseric-stlouisdupuis/" target="blank">
    <img src={linkedIcon} alt={`Icon of Linked In`}/>
    </a>
    </IconContainer>

    <IconContainer>
    <a href="https://github.com/CharlesEricStLD" target="blank">
    <img src={githubIcon} alt={`Logo of GitHub`}/>
    </a>
    </IconContainer>
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
  flex-wrap: wrap;
  padding:unset;
`

const IconContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding:0 2.5% 0 2.5%;
  max-width: 50px;
  

  p{
    text-align: center;
  }

  a > img{
    object-fit:contain;
    width:100%;
    height:100%;
  }

  //tablet view
@media ( min-width: 580px) and (max-width:700px) {
  max-width: 75px;

  p{
    font-size:0.8em;
  }
}

//Phone view
@media ( min-width: 320px) and (max-width:579px) {
  max-width: 60px;

  p{
    font-size:0.5em;
  }
}
`
