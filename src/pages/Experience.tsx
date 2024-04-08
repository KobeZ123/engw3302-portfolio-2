import { useState } from "react";

export default function Experience() {
    return (
        <div className="flex flex-col items-start justify-start text-start pt-32">
            <h1 className="text-3xl font-bold">Experiences</h1>
            <div className="flex flex-col gap-8 mt-4 w-full">
                {EXPERIENCES.map((experience, index) => (
                    <ExperienceCard key={index} {...experience}/>
                ))}
            </div>
        </div>
    )
}

interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    description: string[];
    technologies?: string[];
    link?: string;
}

function ExperienceCard({title, company, date, description, technologies, link}: ExperienceCardProps) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="flex flex-col gap-1 w-full max-w-[800px] text-start bg-red-500 p-8 rounded-2xl">
            <div className="flex flex-row justify-between items-center w-full">
                <div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <h3 className="text-xl italic">{company}</h3>
                </div>
                <h1 className="text-xl font-bold cursor-pointer" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Collapse" : "Expand"}
                </h1>
            </div>
            
            {expanded && 
                (<div>
                    {link && <a href={link} target="_blank" className="text-lg text-blue-700 cursor-pointer underline">Link To Project</a>}  
                    <h3 className="text-lg">{date}</h3>
                    <ul className="list-disc list-inside">
                        {description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                    <div className="flex flex-row gap-4">
                        {technologies?.map((tech, index) => (
                            <>
                            <p key={tech + "_" + index} className="italic">{tech}</p>
                            {index < technologies?.length - 1 && <p>•</p>}
                            </>
                        ))}
                    </div>
                </div>)
            }
            
        </div>
    )
}

const EXPERIENCES = [
    {
        title: "Technical Lead for GraduateNU",
        company: "Sandbox",
        date: "January 2024 - Present",
        description: [
            "I am working on building features that enhance the experience of GraduateNU, a drag-and-drop degree planning tool designed as a custom solution for Northeastern University students to simplify the process of meeting graduation requirements.",
            "As we approach our official release in April 2024, I have worked on enhancements to the plan creation flow by collaborating with fellow developers to implement better major search logic and increase visibility of warnings for currently unsupported majors. I have also created documents to centralize understanding of our data fetching pipeline to support the turnaround and onboarding of new developers on a semesterly basis. I am also exploring solutions for user analytics in an effort to gain insights on student needs."
        ],
        technologies: ["Typescript", "React", "ChakraUI"],
        link: "https://graduatenu.com/",
    },
    {
        title: "Android Software Engineering Co-op",
        company: "Priceline.com",
        date: "July 2023 - December 2023",
        description: [
            "I worked on delivering features to meet release deadlines, working with developers to follow Android development best practices, aligning with product and design team to meet feature specs, and communicating with QA to ensure smooth integration into the CI/CD pipeline.",
            "I focused on features aimed at increasing customer engagement and retention. I also completed tasks to help reduce tech debt in the codebase, from cleaning up completed A/B test experiments to completing a discovery exercise on how we can adopt a more modular app architecture. Additionally, I built a proof-of-concept Jetpack Compose toolkit  to integrate customer-facing AI features into the app."
        ],
        technologies: ["Java", "Kotlin", "Jetpack Compose", "Google Analytics", "Firebase"]
    },  
    {
        title: "Developer for ScoutTrek",
        company: "Sandbox",
        date: "September 2022 - May 2023",
        description: [
            "I was a developer on ScoutTrek, an event management app for Boys and Girls Scouts facilitating communication between Scouts leadership and parents. In the two semesters that our team took on this client project, our goal was to understand the codebase and find places to improve the scalability of the application while building new features.", 
            "I collaborated with other developers to refactor the architecture of existing React Native design system, adhering to React design patterns to provide a proof-of-concept for custom components that maps JSON schemas to optimize event form system scalability. I also contributed to overhauling the existing state management architecture for user state to decouple context dependencies and improve the development experience."
        ], 
        technologies: ["React Native", "Typescript", "MongoDB", "GraphQL"],
        link: "https://scouttrek.com/"
    },

]