//Component to render the Logo Section 
import styled from "styled-components"

export const IconsSection = ({icons}) => {
  return (
    icons? (
    <LogoSection>
    {icons.map(icon => (
    <IconContainer key={icon.name}>
    <img src={icon.image} alt={`Logo of ${icon.name}`}/>
    <p>{icon.name}</p>
    </IconContainer>
    ))
  }
  </LogoSection>
  ): null
)
}

const LogoSection = styled.ul`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5%;
  padding:unset;
`

const IconContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding:0 2.5% 0 2.5%;
  max-width: 100px;
  min-width:60px;
  

  p{
    text-align: center;
  }

  img{
    object-fit:contain;
    width:100%;
    height:100%;
    filter: invert(41%) sepia(7%) saturate(3096%) hue-rotate(197deg) brightness(97%) contrast(92%);
  }

  //tablet view
@media ( min-width: 580px) and (max-width:700px) {
  max-width: 75px;

  p{
    font-size:0.8em;
  }
}

//Phone view
@media(max-width:579px) {
  max-width: 60px;

  p{
    font-size:0.5em;
  }
}
`

