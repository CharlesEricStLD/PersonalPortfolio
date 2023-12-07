import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutMe from './components/AboutMe.jsx'
import Header from './Components/Header.jsx'
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import ScrollToAnchor from './Components/ScrollToAnchor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
    <ScrollToAnchor/>
    <Routes>
        <Route path="/" element ={<App/>}> </Route>
        <Route path="/AboutMe" element={<AboutMe/>}></Route> 
    </Routes>
    </BrowserRouter>
    </>
)
