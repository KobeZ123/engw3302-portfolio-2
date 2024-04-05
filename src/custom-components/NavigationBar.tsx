import { NAVIGATION_LINKS } from "@/utils/constants";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
    return (
        <nav className="flex flex-row items-center justify-center p-4 gap-4">
            {NAVIGATION_LINKS.map((link, index) => (
                <NavLink key={index} to={link.path} className="text-white font-bold px-4 py-2 hover:text-red-600 duration-200" >
                    <LinkText text={link.text}/>
                </NavLink>
            ))}
        </nav>
    )
}

function LinkText({text}: {text: string}) {
    return (
        <h3>{text}</h3>
    )
}