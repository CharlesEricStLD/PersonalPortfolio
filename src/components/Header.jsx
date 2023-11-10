import { NavLink } from "react-router-dom";


const Header = () => {

  //About me should redirect me to another Page, but Project 
  // and get in touch should be in the same page
    return (
      <>
            <NavLink to="/Aboutme">About Me</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Get In Touch</NavLink>
      </>
    ) 
  
  } 
  
  export default Header;