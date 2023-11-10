import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutMe from './components/AboutMe.jsx'
import Header from './components/Header.jsx'


import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element ={<App/>}> </Route>
        <Route path="/AboutMe" element={<AboutMe/>}></Route> 
    </Routes>
    </BrowserRouter>
</React.StrictMode>,
)
