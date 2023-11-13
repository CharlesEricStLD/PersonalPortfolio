import { NavLink } from "react-router-dom";
import styled from "styled-components";

//Scroll to : https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n

const Header = () => {

  //About me should redirect me to another Page, but Project 
  // and get in touch should be in the same page
    return (
      <>
        <HeaderContainer>
            <NavItems to="/">Home</NavItems>
            <NavItems to="/Aboutme">About Me</NavItems>
            <NavItems>Projects</NavItems>
            <NavItems>Get In Touch</NavItems>
          </HeaderContainer>
      </> 
    ) 
  
  } 
  
  export default Header;

  const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-end;
  `

  const NavItems = styled(NavLink)`
    margin-right:5%;
  `



