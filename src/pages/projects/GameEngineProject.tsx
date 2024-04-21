import gameEngineArchitectureDiagram from "./../../../public/game_engine_architectural_diagram.png"
import youtubeLogo from "./../../../public/youtube-logo.png";
import gameEngineScene1 from "./../../../public/game-engine-scene-1.png";
import gameEngineScene2 from "./../../../public/game-engine-scene-2.png";
import gameEngineScene3 from "./../../../public/game-engine-scene-3.png";
import sceneMakerScreenshot1 from "./../../../public/scene-maker-tool.png";
import sceneMakerScreenshot2 from "./../../../public/scene-maker-tool-2.png";



export default function GameEngineProject() {
    // const [password, setPassword] = useState("");
    // const [authenticated, setAuthenticated] = useState(false);
    
    return (
        <div className="w-[960px] max-w-[90vw] my-16">
            <div className="flex flex-row w-full justify-start">
                <button
                    onClick={() => {
                        window.history.back();
                    }}
                    className="hover:text-red-600"
                    >
                    <p className="font-bold">Back</p>
                </button>
            </div>
            {/* {!authenticated ?
            (
                <div className="flex flex-col items-center">
                    <div className="w-[500px] max-w-[100vw]">
                        <h3 className="py-4">This is a password-protected project. Please ask administrator for password.</h3>
                        <input
                            className="text-black p-4"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={() => {
                            if (password == import.meta.env.VITE_GRAPHICS_PASSWORD) {
                                console.log("Authenticated");
                                setAuthenticated(true);
                            } else {
                                console.log("Not authenticated");
                            }
                        }}
                        className="p-4 bg-blue-600 text-white hover:bg-blue-800"
                        >Enter</button>
                    </div>
                </div>
            ):
            ( */}
                <div className="flex flex-col items-center select-text text-left">
                    <h2 className="font-bold my-8">CS4850 Building Game Engines Final Project</h2>

                    <section className="flex flex-col w-full max-w-[700px] items-center my-4 text-center">
                        <a href="https://youtu.be/ZRBvvDzReIY" target="_blank" className="flex flex-col items-center w-full underline font-semibold my-4 text-blue-600">
                            <h2 className="font-bold">Game Engine Trailer Video</h2>
                            <img src={youtubeLogo} alt="YouTube icon" className="max-w-[200px] h-auto my-2"/>
                        </a>
                        <p>Video Trailer Link</p>
                    </section>

                    <section className="flex flex-col w-full max-w-[700px] items-center my-4 text-center">
                        <h2 className="underline font-semibold my-4 w-full text-center">Game Engine Screenshots</h2>

                        <p>Here are scenes with various levels of difficulty passed into the game engine to run.</p>
                        <img src={gameEngineScene1} alt="Kobe's Game Engine Scene 1" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <img src={gameEngineScene2} alt="Kobe's Game Engine Scene 2" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <img src={gameEngineScene3} alt="Kobe's Game Engine Scene 3" className="w-[700px] h-auto my-2 border-4 border-white"/>

                        <p>Scenes can be generated using the GUI scene maker tool.</p>
                        <img src={sceneMakerScreenshot1} alt="Kobe's scene maker 1" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <img src={sceneMakerScreenshot2} alt="Kobe's scene maker 2" className="w-[700px] h-auto my-2 border-4 border-white"/>
                    </section>

                    <section className="flex flex-col w-full max-w-[700px] items-center my-4 bg-slate-300 text-black p-4 text-center">
                        <h2 className="underline font-semibold my-4 w-full text-center">Engine Architecture Diagram</h2>

                        <img src={gameEngineArchitectureDiagram} alt="Engine Architecture Diagram" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <p className="indent-8">The Kobe Game Engine provides a cohesive way to build 2D games, empowering the user to create game entities and provide scripting functionality.</p>
                    </section>


                    <section className="flex flex-col w-full max-w-[700px] items-center my-4 text-start">
                        <a href="https://kobez123.github.io/cs4850-game-engine-documentation/index.html" target="_blank" className="underline font-semibold my-4 text-blue-600">
                            <h2 className="font-bold">Doxygen Documentation</h2>
                        </a>
                        <p className="indent-8">Above is a link to the Doxygen documentation for Kobe's Game Engine. If the above link does not work, try copy-pasting the following website address:</p>
                        <p className="select-text w-full font-semibold">https://kobez123.github.io/cs4850-game-engine-documentation/index.html</p>

                    </section>

                    <section className="flex flex-col w-full max-w-[700px] items-center my-4 text-start">
                        <a href="https://drive.google.com/drive/folders/1jXLrZEf4ZQzYoTvwmdmYwpEfWWiVkkfY?usp=sharing" target="_blank" className="underline font-semibold my-4 text-blue-600">
                            <h2 className="font-bold">Build (binary files)</h2>
                        </a>
                   
                        <p className="indent-8">Above is a link to the Google Drive to a .zip file with the game engine compiled as a .so (shared object) file and python files to run the game and the scene maker. Attached in the .zip is a README.md file explaining how to run the build.  If the above link does not work, try copy-pasting the following Google Drive address:</p>
                        <p className="select-text w-full font-semibold">https://drive.google.com/drive/folders/1jXLrZEf4ZQzYoTvwmdmYwpEfWWiVkkfY?usp=sharing</p>

                    </section>

                
                    <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                        <h2 className="underline font-semibold my-4 w-full text-center">Post-mortem</h2>
                        <p className="indent-8">Looking back on my game engines final project, if I had an additional 8 weeks to work on this project, I would add functionality like more robust scripting support and introduce libraries to implement a better file parser and build UI components.</p>
                        <p className="indent-8">With my current implementation, I have support for each game entity to include one of each component. This means one game entity can run off one texture and one script. One of the limitations is rectangle sprites with linear movements. Ideally, I would want my game engine to be powerful enough to support different control schemes in 2D games. For example, rather than WASD and the arrow keys translating the player game entity, maybe the left and right keys rotates the game entity while the up key moves it forward in the direction it is facing. This would require a extension of my engine to allow scripts to be loaded and executed upon input.</p>
                        <p className="indent-8">Additionally, if I had more time, I would work on updating the way I load my scene to support the .json file type by using a C++ library for JSON parsing, so I have more structured and hierarchical data. This also opens up the option for nested game entities and components. Implementing this would require changes to the GUI tool so I can produce such a file. Therefore, I could also spend some more time learning how to make a better GUI and consider frameworks other than Tkinter.</p>
                        <p className="indent-8">For the UI components, I was looking into how I could display text and one solution would be to utilize SDL_TTF. This would be a useful addition since my game engine is already managing game states that can be accessed across entities and components. Therefore, the next step would be understanding how to integrate the text rendering library and thinking about how I can make some sort of UI component as well as where to hold them. Maybe the game application itself should hold a collection of components and therefore handle potential inputs like pausing the game and potential rendering like the scoreboard.  </p>
                    </section>
 
                    <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                        <h2 className="underline font-semibold my-4 w-full text-center">Game Engine Features</h2>
                        <p className="indent-8">The game engine provides game makers with an easy way to access global variables and share states across game entities. Each game entity is self-contained, allowing developers to add components and attach functionality through the most notable feature of the engine: the <code className="bg-gray-800 text-green-600 p-1 rounded-xl">ScriptComponent</code>.</p>
                        <p className="indent-8">The <code className="bg-gray-800 text-green-600 p-1 rounded-xl">ScriptComponent</code> is designed in a way that allows the developer to attach a Python file to the game entity, wielding the power of Python as a scripting language. The script will be called each iteration of the game loop -- during the Update function. The script file is given a handle to access the game entity it is attached to. By design, it is easy to directly access any of the game entity's other components and add behavior to it by using the <code className="bg-gray-800 text-blue-600 p-1 rounded-xl">GetComponent()</code> function exposed from the C++ engine to Python via pybind11.</p>
                        <p className="indent-8">Note that this design requires that the Python file is structured in a specific way to enable this behavior. All Python files used as scripts should be structured to the following standard: </p>

                        <div className="bg-gray-100 p-2 my-2 rounded-md overflow-x-auto w-full select-text">
                            <pre>
                                <code className="text-sm text-gray-900">
                                {`
import lib.kobegameengine as kobegameengine

class Script:
    def __init__(self):
        pass

    def init(self, entity): 
        pass

    def run(self, entity): 
        pass
      `}
                            </code>
                        </pre>
                    </div>
                
                    <p className="indent-8">First, the script needs to import the kobegameengine Python library to access all of the game engine functionality exposed via pybind. Then, a <code className="bg-gray-800 text-blue-600 p-1 rounded-xl">Script</code> class needs to be created with the <code className="bg-gray-800 text-blue-600 p-1 rounded-xl">init(self, entity)</code> and <code className="bg-gray-800 text-blue-600 p-1 rounded-xl">run(self, entity)</code> functions. These functions are called by the game engine when the script is loaded when the scene is set up and on every update of the game loop, respectively.</p>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <p className="indent-8">Now we will look at a simple script to program the behavior of a basic enemy in our 2D game with inline comments to explain what the code is doing and how easy it is to integrate with the game engine:</p>
                    <div className="bg-gray-100 p-2 my-2 rounded-md overflow-x-auto w-full select-text">
                            <pre>
                                <code className="text-sm text-gray-900">
                                {`
# This is the script for an easy enemy that will bounce around our game screen, 
# ricocheting off the walls and making the the player lose a life they collide with it

# Here, we need to import the kobegameengine library as well as any other libraries the script needs 
import lib.kobegameengine as kobegameengine
import random
import math

class Script:
    # We can use the __init__ constructor if we need to initialize 
    # some variables that survive the lifetime of the script
    def __init__(self):
        self.random_x = 0
        self.random_y = 0
    
    # This init() function is called when the script is loaded
    # so we can use it to initialize the enemy's velocity along the x and y axis
    # using some trigonometry to get a random direction, ensuring the enemy moves
    # at a constant speed. 
    # We will also grab instances of our global state manager, score manager, and the player
    # in the game scene because our enemy will interact with the game state and player. 
    def init(self, entity): 
        degree = random.uniform(0, 360)

        direction_angle = math.radians(degree)
        speed = 3.0

        self.random_x = speed * math.cos(direction_angle)
        self.random_y = speed * math.sin(direction_angle)

        self.state_manager = kobegameengine.GlobalStateManager.Instance()
        self.score_manager = kobegameengine.ScoreManager.Instance()

        current_scene = kobegameengine.SceneManager.Instance().GetCurrentScene()
        self.player = current_scene.GetPlayer()

    # In the run() function, we will make the enemy move around the screen by adding the 
    # random_x and random_y velocity values to the enemy's current position.
    # If the enemy hits the border of the screen, we will reverse the velocity
    # If the enemy hits the player, the player will lose a life and the enemy will disappear.
    def run(self, entity): 
        transform = entity.GetTransform()

        if (transform.GetX() > self.state_manager.GetVariable("width") - transform.GetW() and self.random_x > 0):
            self.random_x = -self.random_x
        if transform.GetX() < 0 and self.random_x < 0:
            self.random_x = -self.random_x
        if (transform.GetY() > self.state_manager.GetVariable("height") - transform.GetH() and self.random_y > 0):
            self.random_y = -self.random_y
        if transform.GetY() < 0 and self.random_y < 0:
            self.random_y = -self.random_y
        transform.SetXY(transform.GetX() + self.random_x, transform.GetY() + self.random_y)

        if entity.IsRenderable() and entity.Intersects(self.player) == True:  
            self.score_manager.SetVariable("lives", self.score_manager.GetVariable("lives") - 1)
            entity.SetRenderable(False)
      `}
                            </code>
                        </pre>
                    </div>

                    <p className="indent-8">Hopefully this provides a good explanation of the scripts in the demo attached in the Google Drive build link. Thank you for reading!</p>

                    </section>
                </div>
            {/* )} */}

        </div>
    )
}
