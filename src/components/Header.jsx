//Components for Headers 
import react from "@vitejs/plugin-react-swc"
import { NavLink } from "react-router-dom";
import React, { useState } from 'react'
import styled from "styled-components";

const Header = () => {


//About me should redirect me to another Page, but Project 
// and get in touch should be in the same page
  return (
    <>
          <NavLink to="/">About Me</NavLink>
          <NavLink to="/order">Project</NavLink>
          <NavLink to ="/GetInTouch"> Get In Touch </NavLink>
    </>
  ) 

} 

export default Header;