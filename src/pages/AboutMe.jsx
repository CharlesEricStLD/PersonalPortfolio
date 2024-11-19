//Component of the ABout Me Page

import styled from "styled-components";
import Header from "../components/Header";
import { ScrollRestoration } from "react-router-dom";
import Seo from "../components/Seo"
import { useTranslation } from "react-i18next";

const AboutMe = () => {

  const { t, i18n } = useTranslation();

  return (
    <>
    <Seo title="About: Charles-Eric St-Louis-Dupuis"
    description="Looking for a passionate fullstack web developer from Montreal? Discover Charles-Eric St-Louis Dupuis’ journey, projects, and expertise in React, Node.js, and more."
    type="website" url="https://cstlouidupuis.com/about-me"/>
    <ScrollRestoration/>
      <Header />
      <AboutMeStyling>
        <h1>{t("aboutMe")}</h1>
        <p>
          {t("cv")}<a
            href="https://docs.google.com/document/d/16KF_GCG93zHNhRrJZPxIEdToPayID48ZEeMVgLKWGiA/edit?usp=sharing"
            target="_blank"
          >CV</a>     
        .</p> 
        <Description>
          <h2>{t("storyTitle")}</h2>
          <p>
            {t("storyText1")}</p>
            
            <p>{t("storyText2")}</p>

          <h2>{t("developerTitle")}</h2>
          <p>{t("developerEthos")}
          </p>

          <h2>{t("personTitle")}</h2>
          <p>{t("personTraits")}
            </p>

          <h2>{t("colleagueTitle")}</h2>
          <p>{t("colleagueDescription")}
          </p>

          <p>
            {t("developerMotivation")}
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

  p {
    font-size: 0.8em;
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
