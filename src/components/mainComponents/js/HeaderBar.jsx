import { useEffect, useState } from 'react';
import '../css/headerBar.css';

function HeaderBar({endSectionOne, endSectionTwo, endSectionThree, endSectionFour, sectionHeight, spacerDist, handleScroll, setShowContact}) {
    const [nearestSection, setNearestSection] = useState(1);
    
    useEffect(() => {
        const onScroll = () => {
            setNearestSection(Math.min(
                Math.round(window.scrollY / (sectionHeight + spacerDist)) + 1,
                5
            ));
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [sectionHeight, spacerDist]);

    return(
        <div className="headerBar">
            <div className="headerBar-Item name">
                <div className="mainName">Mitchell Dorward</div>
                <div className="title">Computer Science Engineer</div>
            </div>
            <div className="headerBar-Item links">
                <div className="link-item" onClick={() => handleScroll(0)}>Intro</div>
                <div className="link-item" onClick={() => handleScroll(endSectionOne + spacerDist/2)}>DataAnnotation (Work)</div>
                <div className="link-item" onClick={() => handleScroll(endSectionTwo + spacerDist/2)}>Education</div>
                <div className="link-item" onClick={() => handleScroll(endSectionThree + spacerDist/2)}>Portfolio</div>
                <div className="link-item" onClick={() => handleScroll(endSectionFour + spacerDist/2)}>Outro</div>
            </div>
            <div className={`headerBar-Item resumeContactButton interactive-button section${nearestSection}`} onClick={() => setShowContact(true)}>
                Contact Me
            </div>
            <div className="headerBar-Item socials">
                <div className="socials-item">
                    <a href="https://www.linkedin.com/in/mitchelldorward/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/LinkedIn.png" />
                    </a>
                </div>
                <div className="socials-item">
                    <a href="https://github.com/Mitch-Dor" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/Github.png" />
                    </a>
                </div>
            </div>
            <a
                href="/assets/Mitchell_Dorward_Resume.pdf"
                download
                className={`headerBar-Item resumeContactButton interactive-button section${nearestSection}`}
            >Resume</a>
        </div>
    )
}

export default HeaderBar;