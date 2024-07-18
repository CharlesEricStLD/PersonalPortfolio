//Component to render the Logo Section 
import styled from "styled-components"
import {IconsSection} from "./IconSection"
import {toolsList} from "../assets/toolsList"

const ToolsSection = () => {
  return (
    <LogoSection>
    <IconsSection icons={toolsList}></IconsSection>
  </LogoSection>
  )
}

const LogoSection = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding:unset;
`


export default ToolsSection;
