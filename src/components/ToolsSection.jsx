//Component to render the Logo Section 
import styled from "styled-components"

import javascriptLogo from "../assets/javascript.png"
import css3Logo from "../assets/css3.png"
import gitlogo from "../assets/git.png"
import reactLogo from "../assets/react.png"
import nodeJsLogo from "../assets/nodejsLogo.png"
import mongoDbLogo from "../assets/mongodbLogo.png"
import html5Logo from "../assets/html5Logo.png"
import wordpressLogo from "../assets/wordpressLogo.png"
import shopifyLogo from "../assets/shopifyLogo.png"

const tools = [
  {
    name : "React", 
    link : "https://react.dev/",
    image : reactLogo
  },
  {
  name : "Javascript", 
  link : "https://en.wikipedia.org/wiki/JavaScript",
  image : javascriptLogo 
  },
  {
    name : "CSS-3",
    link : "https://en.wikipedia.org/wiki/CSS",
    image :css3Logo
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
  },
  {
    name : "HTML",
    link: "https://en.wikipedia.org/wiki/HTML5",
    image: html5Logo
  },
  {
    name: "Wordpress",
    link : "https://wordpress.com/",
    image : wordpressLogo
  }, 
  {
    name: "Shopify",
    link : "https://www.shopify.com/ca", 
    image : shopifyLogo 
  }, 
  { 
    name : "Git",
    link : "https://git-scm.com/",
    image : gitlogo
  }
]


const ToolsSection = () => {

  return (
    
    <LogoSection>
    {tools.map(tool => (
    <ToolContainer key={tool.name}>
    <img src={tool.image} alt={`Logo of ${tool}`}/>
    <p>{tool.name}</p>
    </ToolContainer>
    ))
  }
  </LogoSection>
  )
}

const LogoSection = styled.ul`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5%;
  padding:unset;
`

const ToolContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding:0 2.5% 0 2.5%;
  max-width: 100px;
  

  p{
    text-align: center;
  }

  img{
    object-fit:contain;
    width:100%;
    height:100%;
  }

  //tablet view
@media ( min-width: 580px) and (max-width:700px) {

  p{
    font-size:0.8em;
  }
}

//Phone view
@media ( min-width: 320px) and (max-width:579px) {

  p{
    font-size:0.5em;
  }
}
`


export default ToolsSection;
