import React from 'react';
import { Helmet } from 'react-helmet-async';
import portfolioImage from "../public/portfolioMetaImage.png"

const Seo = ({title, description, type, url}) => {
  return (
  <Helmet>
  { /* Standard metadata tags */ }
  {<meta name="description" content={description}/>}
  {<meta name="author" content="Charles-Eric St-Louis-Dupuis"/>}
  { /* End standard metadata tags */ }
  { /* Facebook tags */ }
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:image" content={portfolioImage} />
  <meta property="og:image:width" content="1920" />
  <meta property="og:image:height" content="1520" />

  <meta property="og:description" content={description} />
  { /* End Facebook tags */ }
  { /* Twitter tags */ }
  <meta name="twitter:title" content={title}/>
  <meta name="twitter:description" content={description}/>
  <meta name="twitter:image" content={portfolioImage}/>
  { /* End Twitter tags */ }
  </Helmet>
  )
  }

  export default Seo;

