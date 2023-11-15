import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBarPhone from "./NavBarPhone"

//Scroll to : https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n

const Header = () => {

    return (
      <>
        <MenuHiding>
        <NavBarPhone/>
        </MenuHiding>
        <HeaderContainer>
            <NavItems to="/">Home</NavItems>
            <NavItems to="/Aboutme">About Me</NavItems>
            <a className="header" href="#projectsSection" scroll>Projects</a> 
            <a className="header" href="#getInTouchSection">Get In Touch</a>
          </HeaderContainer>
      </> 
    ) 
  
  } 
  
  export default Header;

  const HeaderContainer = styled.header`
    margin-top: 2%;
    display: flex;
    justify-content: flex-end;
    font-size: 1.4em;  

    //tablet view
    @media ( min-width: 600px) and (max-width:768px) {
      font-size: 0.9em;
    }

    @media ( min-width: 375px) and (max-width:599px) {
      display: none;
    }
  `

  const MenuHiding = styled.div`
    display:none;

    @media ( min-width: 600px) and (max-width:768px) {
      display:none;
    }
    
    @media ( min-width: 375px) and (max-width:599px) {
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

&:hover {
  color: #fff3af;
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






