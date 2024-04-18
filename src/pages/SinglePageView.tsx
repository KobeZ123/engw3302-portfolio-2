// import { NAVIGATION_LINKS } from "@/utils/constants";
import Home from "./Home";
import { useEffect, useRef, useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const NAVIGATION_LINKS = [
    { text: 'Home', ref: 'homeRef' },
    { text: 'About', ref: 'aboutRef' },
    { text: 'Projects', ref: 'projectsRef' },
    { text: 'Experience', ref: 'experienceRef' },
    { text: 'Contact', ref: 'contactRef' },
  ];


export default function SinglePageView() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const refs: React.MutableRefObject<HTMLDivElement | null>[] = [homeRef, aboutRef, projectsRef, experienceRef, contactRef];
  
    const [activeLink, setActiveLink] = useState(NAVIGATION_LINKS[0].text); // Initially set to first link
  
    useEffect(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust as needed, 0.5 means when 50% of the section is visible
      };
  
      const handleIntersection = (entries: any[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentRef = entry.target.id;
            const currentLink = NAVIGATION_LINKS.find(link => link.ref === currentRef);
            setActiveLink(currentLink?.text ?? NAVIGATION_LINKS[0].text);
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      
      // Observe all section refs
      refs.forEach(ref => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
  
      return () => {
        // Clean up the observer
        observer.disconnect();
      };
    }, []);

    // useEffect(() => { 
    //   console.log(activeLink);
    // }, [activeLink])

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="w-full h-screen flex flex-col items-center">
        {/* <nav className="flex flex-col md:flex-row items-center justify-center w-full p-4 gap-4 fixed top-0 bg-[#242424]">
          {NAVIGATION_LINKS.map((link, index) => (
            <div
              key={index}
              className={`text-white font-bold px-4 py-2 cursor-pointer hover:text-red-600 duration-200 ${
                activeLink == link.text ? 'text-red-600' : ''}`
              }
              onClick={() =>
                refs[index]?.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
              }
            >
              <h3>{link.text}</h3>
            </div>
          ))}
        </nav> */}
        <nav className="flex items-center justify-center w-full p-4 fixed top-0 bg-[#242424] z-50">
          <button
            className={`md:hidden text-white ${
              isOpen ? '' : 'w-full'}`}
            onClick={handleToggle}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <div className="flex flex-row justify-between">
                <h3 className="font-bold mx-8">Kobe Zheng</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 end-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
              
            )}
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex md:flex-row items-center justify-center md:gap-4`}
          >
            {NAVIGATION_LINKS.map((link, index) => (
              <div
                key={index}
                className={`font-bold px-4 py-2 cursor-pointer hover:text-red-400 duration-200 ${
                  activeLink == link.text ? 'text-red-600' : 'text-white'}`
                }
                onClick={() =>
                  refs[index]?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }
              >
                <h3>{link.text}</h3>
              </div>
            ))}
          </div>
        </nav>
        <div className="px-4 max-w-[960px] w-full flex flex-col">
          <div id="homeRef" ref={homeRef} className="my-16">
            <Home />
          </div>
  
          <div id="aboutRef" ref={aboutRef}>
            <About />
          </div>
  
          <div id="projectsRef" ref={projectsRef}>
            <Projects />
          </div>
  
          <div id="experienceRef" ref={experienceRef}>
            <Experience />
          </div>
  
          <div id="contactRef" ref={contactRef} className="my-16">
            <Contact />
          </div>
        </div>
    
        <footer className="flex flex-row justify-center items-center w-full text-white m-0 p-4">
          <h3>Built with React + TailwindCSS</h3>
        </footer>
      </div>
    );
}
