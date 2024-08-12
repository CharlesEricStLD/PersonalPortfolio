//Component of the ABout Me Page

import personalPicture from "../assets/personalPicture.jpg";
import styled from "styled-components";
import Header from "../components/Header";

const AboutMe = () => {
  return (
    <>
      <Header />
      <AboutMeStyling>
        <h1>About me</h1>
        <p>
          To see my <a
            href="https://drive.google.com/file/d/1kPz0HB6j4SeOb2UHKOsr48wxW50W5APH/view?usp=sharing"
            target="_blank"
          >CV</a>     
        .</p> 
        {/* <ImageStyling>
          <img src={personalPicture}></img>
        </ImageStyling> */}
        <Description>
          <h2>My quick story</h2>
          <p>
            I have always loved tech from a young age. My journey began with
            tinkering on the family computer, which sometimes led to unintended
            mishaps. But just like in coding, breaking things often leads to the
            best learning experiences. As I often say, even Bill Gates was a
            novice once! </p>
            
            <p>My early fascination with technology eventually guided
            me towards studying Biology to better understand and connect with
            the natural world. This passion for the outdoors led me to work as
            an outdoor guide, creating meaningful experiences for clients.
            However, my love for tech remained strong, and I naturally became
            the tech go-to wherever I went. This passion culminated in my
            decision to dive fully into the tech world, leading me to pursue a
            FullStack Engineering course at Concordia University.
          </p>

          <h2>As a developer</h2>
          <p>
            My coding ethos revolves around clarity and reusability. I work hard
            to ensure that my code is not only functional but also easily
            reusable by me and my collaborators. I strive to find the best
            balance between functionality and maintainability, making sure my
            code is both efficient and adaptable.
          </p>

          <h2>As a person</h2>
          <p>
            I’m deeply empathetic and thrive on challenges. I approach problems
            with a creative mindset, breaking them down and finding innovative
            solutions. My passion for learning—whether from others or through
            self-discovery—drives my creativity and helps me navigate complex
            situations. Curiosity is my constant companion, and I’m always eager
            to expand my knowledge and skills, which enriches my life and fuels
            my professional growth.
          </p>

          <h2>As a colleague</h2>
          <p>
            I’m dedicated to supporting my team and fostering a collaborative
            environment. I’m always ready to lend a hand, help with tasks, or
            keep morale high. My background as a guide and trainer enables me to
            break down complex concepts into understandable chunks, making me a
            reliable and approachable teammate. I’m always down for a coffee or
            a beer after work. As an outdoor enthusiast at heart, I’m your go-to
            for your next adventure, and I can cook up a storm both in the
            kitchen and the forest!
          </p>

          <p>
            Even as a new developer, I strive to make my work as high quality
            and impactful as possible. I’m committed to delivering excellence
            and am eager to connect and collaborate with others who share this
            passion.
          </p>
        </Description>
      </AboutMeStyling>
    </>
  );
};

export default AboutMe;

const AboutMeStyling = styled.section`

  h2 {
    font-weight: bold;
    text-decoration: underline;
  }

  //tablet view
  @media (min-width: 580px) and (max-width: 700px) {
    h1 {
      font-size: 1em;
    }

    p {
      width: 100%;
      font-size: 1em;
    }
  }
  //Phone view
  @media(max-width: 579px) {
    h1 {
      font-size: 0.9em;
    }

    p {
      width: 100%;
      margin: 10% 5%;
      font-size: 0.7em;
    }
  }
`;

const Description = styled.div`
  margin: 5%;
`;

const ImageStyling = styled.div`
  width: 45%;
  float: left;
  border-radius: 50px;

  img {
    width: 100%;
    border-radius: 50px;
  }

  //Phone view
  @media(max-width: 579px) {
    img {
      display: none;
    }
  }
`;
