//Component of the ABout Me Page 

import PersonalPicture from "../assets/PersonalPicture.jpg"
import styled from "styled-components";

const AboutMe= () => {

  return (
<AboutMeStyling>
<h1>About me ....</h1>
<ImageStyling>
<img src={PersonalPicture}></img>
</ImageStyling>
<Description>
<p>
I am a dynamic and autonomous person who enjoys interacting with clients and colleagues. 
I had the opportunity, two years ago, to work on the small problems of the website, where I was working, at Les Affutés, Montréal. When i was there and really like it. I just finished my web development Bootcamp at COncordia University and am eager to know more and to take real life challenge on the technological market ! 
</p>
</Description>
</AboutMeStyling>
  )
}

export default AboutMe;

const AboutMeStyling = styled.section`
  h1{
    text-align: left;
  }

  p{
    width:40%;
    display:inline-block;
    margin:0 5%;
    font-size: 1.3em;
  }
`

const Description = styled.div`
margin:5%;
`

const ImageStyling = styled.div`
  width:45%;
  float:left;
  border-radius: 50px;

  img{
    width:100%;
    border-radius: 50px;
  }


`

