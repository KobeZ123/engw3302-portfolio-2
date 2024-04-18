import rubiksCubeImage from "./../../../public/rubiks-cube-project.png"
import rubiksCubeGrayscale from "./../../../public/rubiks-cube-grayscale-ppm.png"
import rubiksCubeThumbnail from "./../../../public/CS5310 Computer Graphics.png"
// import rubiksCubeScrambled from "./../../../public/rubiks-cube-scrambled.png"
// import rubiksCubeTurning from "./../../../public/rubiks-cube-turning.png"

export default function RubiksCubeProject() {
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
            <div className="flex flex-col items-center select-none text-left">
                <h2 className="font-bold my-8">Rubik's Cube in OpenGL</h2>
                <h3>Tech Stack: C++, OpenGL</h3>
                {/* <a href="" className="mb-8">Link to Project</a> */}
                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">Project Description</h4>
                    <p className="indent-8">This was my final project for the graduate Computer Graphics course (CS5310) at Northeastern University. We were given an open-ended prompt to build anything within the scope of the OpenGL graphics API that we covered during the semester. The Rubik's Cube Simulator is an interactive rubik's cube program that the user can control with the keyboard and mouse. It features the six-sided cube with animated rotations and various abstractions to build a scalable 3D object.</p>
                </section>
                <img src={rubiksCubeThumbnail} alt="Rubik's cube grayscale ppm" className="w-[700px] h-auto my-2 border-4 border-white"/>


                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">Project Goals</h4>
                    <p className="indent-8">Throughout the semester, we learned about different components of the graphics rendering pipeline. For this project, I focused on and extended upon the rendering of geometric shapes and textures. I utilized some of the sample codes from the course and my work in previous assignments to implement file parsers for the .obj and .ppm file formats in order to render a 3D model and bind texture images to it. I also used a scene graph abstraction to render the individual cubies that make up the rubik's cube, handling translations and rotations in the world space.</p>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">Technical Acheivements</h4>
                    <div className="flex flex-col my-4">
                        <h4 className="text-lg font-bold">Texture Generation</h4>
                        <p className="indent-8 my-2">One of the problems that I needed to solve was creating all the rubik's cube textures. There are 26 cubies on the rubik's cube that all have different texture layouts. My solution involved the implementation of the singleton pattern to build a rubik's cube texture manager. This manager allows the user to load a grayscale 6-sided cube texture image. Similar to the concept of a height map, the manager distinguishes the different color values and exposes a function that allows each side to be mapped to a different color. With this manager, I did not need to create 26 individual texture images. Instead, I used one image as the texture map and programmatically load textures by running the function to paste different color combinations to the textures.</p>
                        <img src={rubiksCubeGrayscale} alt="Rubik's cube grayscale ppm" className="w-[700px] h-auto my-2 border-4 border-white"/>
                    </div>
                    <h4 className="text-lg font-bold">Position in the World Space</h4>
                    <p className="indent-8 my-2">Another problem that I needed to solve was the way I positioned each cube in the world space. One solution was to make a data structure for each cubie that tracked their position, but this would require a lot of conditional logic to update these positions each time a rotation happens. Instead, I utilized an abstraction that we had for rendering scene nodes. By building a scene tree, each child's position is based on the position of the parent. For my implementation, this meant that each cubie was a descendant of the unseen center cubie, our root node. Each child node is in charge of its local translation and rotation from its parent. To manage this correctly, I needed to manage how the cubies organized themselves. This is done situationally based on what rotation the user wants to do.</p>
                    <p className="indent-8 my-2">For example, if the user wanted to rotate the top face of the cube, all the cubies that compose the top face would organize themselves together, meaning that the 8 surrounding cubies will make the top center cubie their parent. To ensure each cubie only has one parent, I would rearrange all the cubes by the y-axis for a top face rotation. That means all the cubies that make up the top face make the top center cubie its parent, all the cubies that make up the bottom face make the bottom center cubie their parent and all the cubies along the middle slice make the center cubie their parent. Then, the top and bottom center cubies will make the center cubie their parent to connect the all the cubies to a tree originating at the center cubie. This adjustment is done before each rotation, and because it is done this way, rotation of all the cubies are easier to manage by rotating a center cubie and having other cubies follow suit rather than having each cubie map its own rotation-translation path.</p>
                </section>
                <p className="text-center">~</p>

                <section className="flex flex-col w-full max-w-[700px] items-center my-4">
                    <a href="https://youtu.be/2gkU19RPisc" target="_blank">
                        <h4 className="underline font-semibold my-4">Project Video (YouTube)</h4>
                    </a>
                    <div className="flex flex-col my-4">
                        <img src={rubiksCubeImage} alt="Rubik's cube grayscale ppm" className="w-[700px] h-auto my-2 border-4 border-white"/>

                    </div>
                </section>
            </div>
        </div>
    )
}