import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export const Header = () => {
  
  const location = useLocation();

  //Get path of WebBrowser
  const [userOnHomePage] = useState(location.pathname === "/");

  return (
        <HeaderContainer $useronhomepage={userOnHomePage}>
            {userOnHomePage ? <NavItems to="/"> Home</NavItems> : <NavItems to="/"> Back to Home</NavItems>}
            {userOnHomePage ? <NavItems to="/Aboutme"> About Me</NavItems> : null}
            {userOnHomePage ? <a className="header" href="#projectsSection">Projects</a> : null }
            {userOnHomePage ? <a className="header" href="#getInTouchSection">Get In Touch</a> : null}
          </HeaderContainer>
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
      font-size  : 1em;
      position: fixed;
      inset : 0 0 0 50%;
      display: flex;
      flex-direction: column;
      gap:2em; 
      margin-top : 0;
      padding:0 0 0 1em; 
      background-color: hsl(100 0 0%/0.1);
      backdrop-filter: blur(1em);
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







