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
    margin-top: 2%;
    display: flex;
    justify-content: flex-end;
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






