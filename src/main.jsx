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
import Page404 from "./pages/Page404.jsx"
import { HelmetProvider } from 'react-helmet-async'

const helmetContext = {};

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}></Route>
    <Route path="about-me" element={<AboutMe/>}/>
    <Route path="cross-country-finder" element={<CrossCountryFinder/>}></Route>
    <Route path="*" element={<Page404/>}></Route>
    </>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <HelmetProvider context={helmetContext}>
    <RouterProvider router={router} />
    </HelmetProvider>
    </React.StrictMode>
    );
