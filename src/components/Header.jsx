import { NavLink } from "react-router-dom";

//Scroll to : https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n

const Header = () => {

  //About me should redirect me to another Page, but Project 
  // and get in touch should be in the same page
    return (
      <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Aboutme">About Me</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Get In Touch</NavLink>
      </>
    ) 
  
  } 
  
  export default Header;