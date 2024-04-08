import githubLogo from '../../public/github-mark-white.svg';
import outlookLogo from '../../public/outlook.svg';
import linkedinLogo from '../../public/linkedin.svg';

export default function Contact() {
    return (
        <div className="flex flex-col w-full h-screen justify-center items-start select-none text-start">
            <h1 className="text-3xl font-bold">Contact Information</h1>
            <p className="text-xl">Let's connect!</p>
            <div className="flex flex-row justify-start gap-8 my-4">
                <ContactIcon icon={githubLogo} link="https://github.com/KobeZ123" alt="Github"/>
                <ContactIcon icon={outlookLogo} link="mailto:zheng.ko@northeastern.edu" alt="Outlook"/>
                <ContactIcon icon={linkedinLogo} link="https://www.linkedin.com/in/kobe-zheng/" alt="LinkedIn"/>
            </div>
            
        </div>
    )
}

function ContactIcon({icon, link, alt}: {icon: string, link: string, alt: string}) {
    return (
        <a href={link} target="_blank" className="flex flex-row items-center gap-4">
            <p className="font-bold">{alt}</p>
            <img src={icon} alt={alt ?? ""} className="w-[50px] h-[50px]"></img>
        </a>
    )
}