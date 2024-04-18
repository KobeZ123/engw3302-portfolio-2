import { useParams } from "react-router-dom"
import Home from "./Home";
import { ReactElement, useEffect } from "react";
import NotFound from "./NotFound";
import SpotifyProject from "./projects/SpotifyProject";
import PcBuildProject from "./projects/PcBuildProject";
import RubiksCubeProject from "./projects/RubiksCubeProject";

export default function ProjectInfo() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
      
    const { projectId } = useParams();

    return (
        ((projectId === undefined) ? <NotFound /> : PROJECTS[projectId])
    ) 
}

interface Projects {
    [key: string]: ReactElement;
}

const PROJECTS: Projects = {
    "spotify-project": <SpotifyProject />,
    "pc-build-project": <PcBuildProject />,
    "rubiks-cube-project": <RubiksCubeProject />,
    "custom-game-engine": <Home />
}