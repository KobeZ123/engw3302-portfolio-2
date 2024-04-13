import personalPicture from "./../../public/kobe-pfp.jpg"

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen justify-center lg:items-center select-none">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <img src={personalPicture} className="w-48 h-48 rounded-full lg:rounded-none m-8" />
                <div>
                    <h1 className="text-2xl">Hello, I am</h1>
                    <h2 className="text-6xl font-semibold">Kobe Zheng</h2>
                </div>
            </div>
            
            <div>
                
                <div className="flex flex-col gap-4 py-4">
                    <div>
                        <h3 className="text-2xl">Software Engineer</h3>
                    </div>
                    <div>
                        <h3>Computer Science and Game Development <br/>Student @ Northeastern University</h3>
                    </div>
                    <div>
                        <h3>Building features improving user experiences.</h3>
                        <h3>Writing code improving developer experiences.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}