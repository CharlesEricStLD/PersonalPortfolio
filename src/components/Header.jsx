import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState,useEffect } from "react";
import { useTranslation } from 'react-i18next';


export const Header = () => {

  const location = useLocation();

  //Get path of WebBrowser
  const [userOnHomePage] = useState(location.pathname === "/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  //Get language used
  const [languageButtonText, setLanguageButtonText] = useState("Fr")
  const [nextLanguageToUse, setNextLanguageToUse] = useState("fr")

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    console.log("NEXT LANGUAGE TO USE FOR TRANSLATION " + i18n.language)
    i18n.changeLanguage(code);
    if (code === "en") {
      setLanguageButtonText("Fr")
      setNextLanguageToUse("fr")
    } else if (code === "fr") {
      setLanguageButtonText("En")
      setNextLanguageToUse("en")      
    }
  };  

  //Handle case where user move to a new page and language state don't follow.
  //todo Handle when the user came back to home page,.. nedd a gloab state for that stuck in the nav bar....
  useEffect(() => {
    if(i18n.language === languageButtonText.toLowerCase()) {
      if (languageButtonText === "Fr") {
        setLanguageButtonText("En")
        setNextLanguageToUse("en")
      } 
    }
  },[userOnHomePage])

  const openMenu = (event) => {
      if ((event.target.checked)) {
        setIsMobileMenuOpen(true);
      } else {
        setIsMobileMenuOpen(false);
      }
  }

  return (
    <HeaderContainer>
      <HamburgerMenu>
          <input id="mobileCheckbox" type="checkbox" onChange={openMenu}></input>
      </HamburgerMenu>
      <a className="languageModifier" onClick={() => handleTrans(nextLanguageToUse)}>{languageButtonText}</a>
      <NavigationMenu $ismobilemenuopen=
      
      {isMobileMenuOpen}>
        {userOnHomePage ? <NavItems to="/">{t("home")} </NavItems> : <NavItems to="/"> {t("backToHome")}</NavItems>}
        {userOnHomePage ? <NavItems to="/about-me">{t("aboutMe")} </NavItems> : null}
        {userOnHomePage ? <a className="header" href="#projectsSection">{t("projectsHeader")}</a> : null }
        {userOnHomePage ? <a className="header" href="#getInTouchSection">{t("getInTouch")}</a> : null}
        <a className="languageModifier" onClick={() => handleTrans(nextLanguageToUse)}>{languageButtonText}</a>
      </NavigationMenu>
    </HeaderContainer>


    )
  }

  export default Header;

  const HeaderContainer = styled.header`
    --bar-height: 6px;
    --hamburger-gap:6px;
    --animation-timing: 200ms ease-in-out;
    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
    --x-width: calc(var(--hamburger-height) * calc(sqrt(2)));
    --left-mobile-menu-padding: 1.5em;

    a.languageModifier{
      font-size: 1.4em;
      cursor:pointer;
    color:#646cff;
    display: flex;
    justify-content: flex-end;
    margin-right: 2.5%;
    }

    //Phone view
  @media (max-width:579px) {
    a.languageModifier {
      display:none;
    }
  }`

  const NavigationMenu = styled.div`
    margin-top: 2%;
    display: flex;
    justify-content: ${props => props.useronhomepage ? "" : "left"};
    font-size: 1.4em;

    a {
    scroll-behavior:smooth;
    width:max-content
    }

    a:hover, .header:hover {
    color: #fff3af;
    cursor:pointer;
    }

    a.languageModifier{
    display:none;
    color:#646cff;
    }

    //tablet view
    @media ( min-width: 580px) and (max-width:700px) {
      font-size: 0.9em;
    }
  //Phone view
  @media (max-width:579px) {
      z-index: 1;
      font-size  : 8vw;
      position: fixed;
      inset : 0 30% 0 0;
      display: flex;
      flex-direction: column;
      gap:2em;
      margin-top:0;
      padding-top:calc(var(--hamburger-height));
      padding-left:var(--left-mobile-menu-padding);
      background-color: #000000b3;
      background-color: hsl(100 0 0%/0.1);
      -webkit-backdrop-filter: blur(1em);
      backdrop-filter: blur(1em);

      translate: ${props => props.$ismobilemenuopen? "0" : "-100%"};
      transition: translate var(--animation-timing);

      a.languageModifier{
      display:block;
      }
    }

  `
  const HamburgerMenu = styled.label`
    box-sizing: border-box;
    display:none;
    width: max-content;
    position: fixed;
    top : 6.3em;
    right: 10vw;
    z-index: 1;
    cursor: pointer;
    background-color: black;
    padding:0.7em;
    border-radius: 15px;

    &:has(input:checked)::before {
      rotate: 45deg;
      width: var(--x-width);
      translate: 0 calc(var(--bar-height) / -2);
    }

    &:has(input:checked)::after {
      rotate: -45deg;
      width: var(--x-width);
      translate: 0 calc(var(--bar-height) / 2);
    }

    &:has(input:checked) {
      width:calc(var(--x-width) + 0.8em);
    }

    &:before, &:after, input {
      content: "";
      width: 50px;
      height: var(--bar-height);
      border-radius: 99999px;
      background-color: #fff3af;
      transition : opacity var(--animation-timing), width var(--animation-timing),rotate var(--animation-timing), translate var(--animation-timing), background-color var(--animation-timing);
      transform-origin: left center;
    }

    input {
      appearance: none;
      padding: 0;
      margin:0;
      outline: none;
      pointer-events: none;
    }

    input:checked{
      opacity:0;
      width:0;
    }

    //Phone view
    @media(min-width : 391px) and (max-width:579px) {
    display:flex;
    flex-direction: column;
    gap:var(--hamburger-gap)
    }

    //very small phone view
    @media(max-width:390px) {
    display:flex;
    flex-direction: column;
    gap:var(--hamburger-gap);
    right:2.5vw;
    z-index:10;
    }

  `

const NavItems = styled(NavLink)`
margin-right:5%;

& {
color: #646cff;
text-decoration: inherit;
font-family: "LarkenExtraBold";
}

&::after {
content: '';
display: block;
margin: auto;
width: 0;
height: 3px;
background: #fff3af;
border-radius: 5px;
}

@keyframes borderAnimation{
0%   {width:0;}
100% {width:100%;}
}


&:hover::after {
animation: borderAnimation 1s;;
width: 100%;
}
`







