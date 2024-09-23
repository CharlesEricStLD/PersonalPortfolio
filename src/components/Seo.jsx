import React from 'react';
import { Helmet } from 'react-helmet-async';
import {fill} from "@cloudinary/url-gen/actions/resize";
import {Cloudinary} from "@cloudinary/url-gen";

const Seo = ({title, description, type, url}) => {

  
// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dpz0d94hw'
  }
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
const myImage = cld.image('portfolioMetaImage_z9nbot'); 

const portfolioImageSrc = myImage.resize(fill().width(250).height(250)).toURL();

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
  <meta property="og:image" content={portfolioImageSrc}/>
  <meta property="og:image:width" content="1920" />
  <meta property="og:image:height" content="1520" />

  <meta property="og:description" content={description} />
  { /* End Facebook tags */ }
  { /* Twitter tags */ }
  <meta name="twitter:title" content={title}/>
  <meta name="twitter:description" content={description}/>
  <meta name="twitter:image" content={portfolioImageSrc}/>
  { /* End Twitter tags */ }
  </Helmet>
  )
  }

  export default Seo;

