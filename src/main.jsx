import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import AboutMe from './pages/AboutMe.jsx'
import {ProjectsPage} from "./pages/ProjectsPage.jsx"
import {CrossCountryFinder} from "./pages/CrossCountryFinder.jsx"
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<App/>}> </Route>
        <Route path="/AboutMe" element={<AboutMe/>}></Route>
        <Route path="/CrossCountryFinder" element={<CrossCountryFinder/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
)
