import { useState } from "react";

export default function Experience() {
    return (
        <div className="flex flex-col items-center justify-center text-start pt-32">
            <h1 className="text-3xl font-bold">Experiences</h1>
            <div className="flex flex-col gap-8 mt-4 w-full items-center">
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
        <div className="flex flex-col gap-1 w-full max-w-[800px] bg-red-500 px-8 py-4 md:py-8 rounded-2xl">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-full">
                <div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <h3 className="text-xl italic">{company}</h3>
                </div>
                <h1 className="text-xl font-bold cursor-pointer" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Collapse" : "Expand"}
                </h1>
            </div>
            
            {expanded && 
                (<div className="whitespace-normal">
                    {link && <a href={link} target="_blank" className="text-lg text-blue-700 cursor-pointer underline">Link To Project</a>}  
                    <h3 className="text-lg">{date}</h3>
                    <ul className="list-none list-inside my-2">
                        {description.map((desc, index) => (
                            <li key={index} className="indent-12 lg:mr-8">{desc}</li>
                        ))}
                    </ul>
                    <div className="flex flex-row gap-4 flex-wrap">
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
            "During my third year at Northeastern, I am working on GraduateNU, a drag-and-drop degree planning tool designed as a custom solution for Northeastern University students to simplify the process of meeting graduation requirements. As the technical lead on this project, I work closely with my project lead to scope out how we can ensure a smooth release, and I collaborate alongside fellow developers to implement features improving the user experience of the product.",
            "This semester, as we were approaching our official release in April 2024, I worked on enhancements to the plan creation flow by implementing better major search logic for our custom select component and increasing visibility of warnings across the application for currently unsupported majors. I also created documents to centralize understanding of our data fetching pipeline to support the turnaround and onboarding of new developers on a semesterly basis. I am also exploring solutions for user analytics in an effort to gain insights on student needs."
        ],
        technologies: ["Typescript", "React", "ChakraUI"],
        link: "https://graduatenu.com/",
    },
    {
        title: "Android Software Engineering Co-op",
        company: "Priceline.com",
        date: "July 2023 - December 2023",
        description: [
            "During my time as a software engineering co-op at Priceline, I was integrated onto the Android development team, working in Agile sprints. I worked with developers to deliver promotional front-end features, aligning with product and design team to meet feature specs, and communicating with QA to ensure smooth integration into the CI/CD pipeline. I focused on features aimed at increasing customer engagement and retention.",
            "I learned about Android development best practices and received constructive feedback through code reviews. I also completed tasks to help reduce tech debt in the codebase, from cleaning up completed A/B test experiments to completing a discovery exercise on modular app architecture. Additionally, I built a MVP Jetpack Compose toolkit to integrate customer-facing AI features into the app."
        ],
        technologies: ["Java", "Kotlin", "Jetpack Compose", "Google Analytics", "Firebase"]
    },  
    {
        title: "Developer for ScoutTrek",
        company: "Sandbox",
        date: "September 2022 - May 2023",
        description: [
            "During my second year at Northeastern, I was a developer on ScoutTrek, an event management app for Boys and Girls Scouts facilitating communication between Scouts leadership and parents. In the two semesters that our team adopted this client project, our goal was to find places to improve the scalability of the application while building new features.", 
            "I collaborated with other developers to refactor the architecture of existing React Native design system, adhering to React design patterns to provide a proof-of-concept for custom components that maps from JSON schemas in an effort to optimize event form system scalability. I also contributed to overhauling the existing state management architecture for user state to decouple context dependencies and improve the development experience."
        ], 
        technologies: ["React Native", "Typescript", "MongoDB", "GraphQL"],
        link: "https://scouttrek.com/"
    },

]