export default function About() {
    return (
        <div className="flex flex-col"> 
            <h1 className="text-3xl font-bold my-4">About Me</h1>
            <div className="flex flex-col lg:flex-row w-full justify-center items-start select-none text-start">
            
            <p className="text-xl m-8 text-pretty">
                Growing up, I have always been a technology enthusiast that enjoys playing video games. 
                It is very compelling to engage and interact with software and applications. 
                My love for these experiences have led me to pursue an education and career in software 
                engineering that enables me to build with the <span className="text-red-300">user/consumer/player</span> in mind. 
            </p>
            <p className="text-xl m-8 text-pretty">
                My expertise is focused on front-end development work, implementing and shipping features for web applications and mobile applications. 
                I thrive working in the tech space because I enjoy tackling real-world problems, testing iterative changes, and moving quickly while learning new technologies. 
            </p>
        </div>
        </div>
        
    )
}