//Componet to render the 404 page

import lostIcon from "../assets/lostIcon.png"
import styled from "styled-components";
import Header from "../components/Header";

const Page404 = () => {
  return(
<>
  <Header/>
  <Styling404>
    <h1>You gone too far in the wild ....</h1>
    <img alt="Icon of lost people" src={lostIcon} title="Lost icons created by Leremy - Flaticon"/>
    <Container>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <p>You should go back home or go outside!</p>
    </Container>
  </Styling404>
  </>
  )
}

const Styling404 = styled.section` 
  padding-bottom:8%;
  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 1.5em;
  }
  p{
    font-size: 1.3em;
  }
  img {
    float:left;
    width:32%
  }

  //tablet view
  @media ( min-width: 580px) and (max-width:700px) {
    padding-bottom:0;
    img {
    width:50%;
    }
    h1 {
    font-size: 2em;
    }
  }

  //Phone view 
  @media(max-width:579px) {
    padding-bottom:0;
    flex-direction: column;
    img {
    max-width:100%;
    min-width:50%;
    }
    h1 {
    font-size: 1.5em;
    }
  }
`

const Container = styled.div`
display: flex;
flex-direction: column;
`




export default Page404;
