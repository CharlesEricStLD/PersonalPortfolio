//Component to render the Logo Section 
import styled from "styled-components"

import javascriptLogo from "../assets/javascript.png"
import css3Logo from "../assets/css3.png"
import gitlogo from "../assets/git.png"
import reactLogo from "../assets/react.png"
import nodeJsLogo from "../assets/nodejsLogo.png"
import mongoDbLogo from "../assets/mongodbLogo.png"
import Tooltip from '@mui/material/Tooltip';

const tools = [
  {
  name : "Javascript", 
  link : "https://en.wikipedia.org/wiki/JavaScript",
  image : javascriptLogo 
  },
  { 
  name : "Git",
  link : "https://git-scm.com/",
  image : gitlogo
  },
  {
    name : "CSS-3",
    link : "https://en.wikipedia.org/wiki/CSS",
    image :css3Logo
  },
  {
    name : "React", 
    link : "https://react.dev/",
    image : reactLogo
  }, 
  {
    name : "NodeJs",
    link: "https://nodejs.org/en",
    image : nodeJsLogo
  }, 
  {
    name : "Mongo Database",
    link : "https://www.mongodb.com/",
    image : mongoDbLogo
  }
]


const ToolsSection = () => {

  return (
    
    <LogoSection>
    {tools.map(tool => (
    <Tooltip interactive="true" key={tool.name}    
    title={<a href={tool.link} target='blank' style={{textDecoration:"none", color:"#fff3af"}}>{tool.name}</a>} placement="top">
    <img src={tool.image} alt={`Logo of ${tool}`}/>
    </Tooltip>
    ))
  }
  </LogoSection>
  )
}

const LogoSection = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 5%;

  img{
    width:10%;
  }
`

export default ToolsSection;
