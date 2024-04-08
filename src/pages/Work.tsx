import { useState } from "react";

export default function Work() {
    return (
        <div className="flex flex-col items-start justify-start text-start pt-32">
            <h1 className="text-3xl font-bold">Experiences</h1>
            <div className="flex flex-col gap-8 mt-4 w-full">
                {EXPERIENCES.map((experience, index) => (
                    <WorkCard key={index} {...experience}/>
                ))}
            </div>
        </div>
    )
}

interface WorkCardProps {
    title: string;
    description: string;
    points: string[];
    link?: string;
}

function WorkCard({title, description, points, link}: WorkCardProps) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="flex flex-col gap-1 w-full max-w-[800px] text-start bg-green-600 p-8 rounded-2xl">
            <div className="flex flex-row justify-between items-center w-full">
                <div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <h3 className="text-xl italic">{description}</h3>
                </div>
                <h1 className="text-xl font-bold cursor-pointer" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Collapse" : "Expand"}
                </h1>
            </div>
            
            {expanded && 
                (<div>
                    {link && <a href={link} target="_blank" className="text-lg text-blue-700 cursor-pointer underline">Link To Project</a>}  
                    <ul className="list-disc list-inside">
                        {points.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>)
            }
            
        </div>
    )
}

const EXPERIENCES = [
    {
        title: "Spotify Interval Playlist Maker",
        description: "web application that displays the user’s top items and generate personalized playlists",
        points: [
            "Collaborated with designer to build performant React+TailwindCSS UI, incorporating responsive design", 
            "Improve user experience and reduce webpage load times by developing solutions like pagination, content loaders, and custom hook cache mechanism, expediating algorithm runtime and reducing API calls by 80%"
        ],
        link: "https://github.com/KobeZ123/spotify-playlist-maker",
    },
    {
        title: "PC Build Catalog Web Application",
        description: "full-stack e-commerce site built with microservice architecture using modern technologies",
        points: [
            "Incorporated NextUI components to build online shop supporting 8+ categories and browsing of 10,000+ parts",
            "Experimented with architectural procedure to integrate external API with data necessities, employing Python Flask and configuring AWS Elastic Compute Cloud instance to serve backend service"
        ],
    },  
]