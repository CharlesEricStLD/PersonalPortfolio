//Page with the description and the details of the Crosws Country Finder project

import { ProjectsPage } from "./ProjectsPage";
import Seo from "../components/Seo"
import CrossCountryProject from "../assets/projectsList";


export const CrossCountryFinder = () => {
  return (
    <>
    <Seo title="Cross Country Finder project"
    description="Looking for the latest snow conditions at cross-country ski centers in Quebec? Discover Charles-Eric St-Louis Dupuis's fullstack project for quick updates!"
    type="website" url="https://cstlouidupuis.com/cross-country-finder"/>
    <ProjectsPage project={CrossCountryProject}/>
    </>
  ) 
}
