import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBarPhone from "./NavBarPhone";
import { useState } from "react";

const Header = () => {
  
  const location = useLocation();

  //Get path of WebBrowser
  const [userOnHomePage] = useState(location.pathname === "/");

  return (
      <>
        <MenuHiding>
        <NavBarPhone/>
        </MenuHiding>
        <HeaderContainer $useronhomepage={userOnHomePage}>
            {userOnHomePage ? <NavItems to="/"> Home</NavItems> : <NavItems to="/"> Back to Home</NavItems>}
            {userOnHomePage ? <NavItems to="/Aboutme"> About Me</NavItems> : null}
            {userOnHomePage ? <a className="header" href="#projectsSection">Projects</a> : null }
            {userOnHomePage ? <a className="header" href="#getInTouchSection">Get In Touch</a> : null}
          </HeaderContainer>
      </>   
    ) 
  } 
  
  export default Header;

  const HeaderContainer = styled.header`
    margin-top: 2%;
    display: flex;
    justify-content: ${props => props.useronhomepage ? "flex-end" : "left"};

    font-size: 1.4em; 
    
    a {
    scroll-behavior:smooth
    }

    a:hover, .header:hover {
    color: #fff3af;
    }

    //tablet view
    @media ( min-width: 580px) and (max-width:700px) {
      font-size: 0.9em;
    }
    //Phone view
    @media ( min-width: 320px) and (max-width:579px) {
      display: none;
    }
  `

  const MenuHiding = styled.div`
    display:none;

    //tablet view
    @media ( min-width: 580px) and (max-width:700px) {
      display:none;
    }
    //Phone view
    @media ( min-width: 320px) and (max-width:579px) {
      display: block;
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






