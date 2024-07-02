//Component of the ABout Me Page 

import personalPicture from "../assets/personalPicture.jpg"
import styled from "styled-components";
import Header from "../components/Header";

const AboutMe= () => {

  return (
<>
<Header/>
<AboutMeStyling>
<h1>About me ....</h1>
<ImageStyling>
<img src={personalPicture}></img>
</ImageStyling>
<Description>
<p>
I am a dynamic and autonomous person who enjoys interacting with clients and colleagues. 
I just finished my web development Bootcamp at COncordia University and am eager to know more and to take real life challenge on the technological market ! 
</p>
</Description>
</AboutMeStyling>
</>
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
    font-size: 1.2em;
  }

   //tablet view
    @media ( min-width: 580px) and (max-width:700px) {
      h1 {
        font-size: 1em;
      }
      
      p{
        width:100%;
        font-size: 1em;
      }
    }
    //Phone view
    @media ( min-width: 320px) and (max-width:579px) {
      h1 {
        font-size: 0.9em;
      }
      
      p{
        width:100%;
        margin:10% 5%;
        font-size: 0.7em;
      }
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

  //Phone view
  @media ( min-width: 320px) and (max-width:579px) {
  img {
    display: none;
  }
  }

`

