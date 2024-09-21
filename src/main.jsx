import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import AboutMe from './pages/AboutMe.jsx'
import {CrossCountryFinder} from "./pages/CrossCountryFinder.jsx"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}></Route>
    <Route path="about-me" element={<AboutMe/>}/>
    <Route path="cross-country-finder" element={<CrossCountryFinder/>}></Route>
    </>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    );
