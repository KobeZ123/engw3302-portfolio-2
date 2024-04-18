import pcpartpickerImage from "./../../../public/pcpartpicker.png";
import neweggImage from "./../../../public/newegg.png";
import homepageImage from "./../../../public/pc-build-home.png";
import homepage1Image from "./../../../public/pc-build-home-2.png";
import catalogImage from "./../../../public/pc-build-browse-catalog-interaction.png";
import cartImage from "./../../../public/pc-build-cart-page-item-preview.png";

export default function PcBuildProject() {
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
                <h2 className="font-bold my-8">PC Builder Catalog</h2>
                <h3>Tech Stack: React, Next.js, TailwindCSS, Firebase, Python, AWS</h3>
                {/* <a href="" className="mb-8">Link to Project</a> */}
                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">Project Description</h4>
                    <p className="indent-8">The PC Builder Catalog is a full-stack web app that simulates a list maker and online retailer for computer parts, similar to platforms like PCPartPicker and Newegg.</p>
                    <div>
                        <img src={pcpartpickerImage} alt="PCPartPicker website homepage" className="w-full h-auto my-4" style={{ filter: 'grayscale(50%)' }}/>
                        <img src={neweggImage} alt="Newegg website homepage" className="w-full h-auto my-4" style={{ filter: 'grayscale(50%)' }}/>
                    </div>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">Inspiration</h4>
                    <p className="indent-8">The inspriation for this project comes from my interest in hardware like computer parts and peripherals. In high school, I was given a budget to buy my own computer parts to build a personal computer. This was a huge upgrade from the hand-me-down PC that my parents gave me, which was still running Windows Vista.</p>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-start my-4">
                    <h4 className="underline font-semibold my-4">Explaining the Tech Stack</h4>
                    <p className="indent-8 my-2"><span className="font-bold">Frontend: </span>I used the React framework Next.js and the CSS framework TailwindCSS, so I can take advantages of features like the app router and style classes to build quickly. I implemented features like pagination and used NextUI library components to build tables for the product catalogs.</p>
                    <p className="indent-8 my-2"><span className="font-bold">Database: </span>I handled the authentication and the database using Google's Firebase service, allowing users to create accounts to save items to their carts.</p>
                    <p className="indent-8 my-2"><span className="font-bold">Backend: </span>For the backend, I found a <a href="https://github.com/JonathanVusich/pcpartpicker" className="text-blue-400">unoffical PCPartPicker Python API library</a>, which was the original reason I thought building a project like this would be fun and feasible. I needed a way to incorporate the data from this Python API into my web app, so I built a backend using Python Flask and learned to host the backend on an Amazon Elastic Computer Cloud (EC2) instance.</p>
                </section>

                <section className="flex flex-col w-full max-w-[700px] items-center my-4">
                    <h4 className="underline font-semibold my-4">Project Images</h4>
                    <div className="flex flex-col my-4">
                        <img src={homepageImage} alt="PC Builder Catalog homepage" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <img src={homepage1Image} alt="PC Builder Catalog homepage bottom" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <p className="text-center">This is the home page, with a responsive navigation bar, a carousel featuring top PC builds, a contacts form, and a footer with a directory of the website.</p>
                    </div>
                    <p className="text-center">~</p>

                    <div className="flex flex-col my-4">
                        <img src={catalogImage} alt="PC Builder Catalog product table" className="w-[700px] h-auto my-4 border-4 border-white"/>
                        <p className="text-center">This is the catalog page where the user can search for specific part types, supporting 8+ part categories from CPUs and video cards to cases and monitors. There is a pagination feature that allows user to choose how many products are displayed per page at the top and the buttons to navigate to different pages at the bottom.</p>
                        <p className="text-center">Product specs are displayed neatly in the table, allowing simple comparisons of spec differences. The action buttons on the right allows the user to add an item into their cart or remove an existing item from their cart and view more details about the product. When a user adds or removes an item from their cart, an appropiate Toast message will pop up to provide confirmation.</p>
                    </div>

                    <p className="text-center">~</p>

                    <div className="flex flex-col my-4">
                        <img src={cartImage} alt="PC Builder Catalog cart" className="w-[700px] h-auto my-2 border-4 border-white"/>
                        <p className="text-center">This is the cart page where the user can view all the products they added to their cart and remove them if necessary. In this screenshot, the modal after pressing "View Product" is shown. This gives the user a detailed breakdown of the part specs.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}