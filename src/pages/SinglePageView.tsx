// import { NAVIGATION_LINKS } from "@/utils/constants";
import Home from "./Home";
import { useEffect, useRef, useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";
import Contact from "./Contact";

const NAVIGATION_LINKS = [
    { text: 'Home', ref: 'homeRef' },
    { text: 'About', ref: 'aboutRef' },
    { text: 'Work', ref: 'workRef' },
    { text: 'Experience', ref: 'experienceRef' },
    { text: 'Contact', ref: 'contactRef' },
  ];


export default function SinglePageView() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const workRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const refs: React.MutableRefObject<HTMLDivElement | null>[] = [homeRef, aboutRef, workRef, experienceRef, contactRef];
  
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

    return (
      <div className="w-full h-screen flex flex-col items-center">
        <nav className="flex flex-row items-center justify-center w-full p-4 gap-4 fixed top-0 bg-[#242424]">
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
        </nav>
        <div className="px-4 max-w-[960px] w-full flex flex-col">
          <div id="homeRef" ref={homeRef}>
            <Home />
          </div>
  
          <div id="aboutRef" ref={aboutRef}>
            <About />
          </div>
  
          <div id="workRef" ref={workRef}>
            <Work />
          </div>
  
          <div id="experienceRef" ref={experienceRef}>
            <Experience />
          </div>
  
          <div id="contactRef" ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    );
}
