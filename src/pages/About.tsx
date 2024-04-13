export default function About() {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-center items-start select-none text-start">
            <h1 className="text-3xl font-bold">About Page</h1>
            <p className="text-xl my-4">
                Growing up, I have always been a technology enthusiast that enjoys playing video games. 
                It is very compelling to engage with interactive experiences in software and application. 
                My love for these experiences have led me to pursue an education and career in software 
                engineering that enables me to build with the <span className="bg-gray-600 text-red-300">user/consumer/player</span> in mind. 
            </p>
            <p className="text-xl">
                My experiences consist mainly of front-end development work, implementing and shipping features for web applications and mobile applications. 
                I thrive while working in the tech space because I enjoy tackling multifaceted problems, testing iterative changes, and moving quickly while learning new technologies. 
            </p>
        </div>
    )
}