import { useParams } from "react-router-dom"
import { ReactElement, useEffect } from "react";
import NotFound from "./NotFound";
import SpotifyProject from "./projects/SpotifyProject";
import PcBuildProject from "./projects/PcBuildProject";
import RubiksCubeProject from "./projects/RubiksCubeProject";
import GameEngineProject from "./projects/GameEngineProject";

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
    "game-engine-project": <GameEngineProject />
}