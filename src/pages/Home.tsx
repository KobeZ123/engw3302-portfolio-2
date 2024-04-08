export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen justify-center items-start select-none text-start">
            <h1 className="text-2xl">Hello, I am</h1>
            <h2 className="text-6xl font-semibold">Kobe Zheng</h2>
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
    )
}