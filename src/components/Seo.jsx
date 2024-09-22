import React from 'react';
import { Helmet } from 'react-helmet-async';
import portfolioImage from "../assets/portfolioMetaImage.png"

export const SEO = ({title, description, type, url}) => {
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
  <meta property="og:description" content={description} />
  { /* End Facebook tags */ }
  { /* Twitter tags */ }
  <meta name="twitter:title" content={title}/>
  <meta name="twitter:description" content={description}/>
  <meta name="twitter:image" content={image}/>
  { /* End Twitter tags */ }
  </Helmet>
  )
  }

