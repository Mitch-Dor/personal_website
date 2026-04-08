import {useState} from 'react';

import { FaMousePointer } from "react-icons/fa";

import { UNITE_PRO_ENHANCED_SKILLS, UNITE_PRO_ENHANCED_DESCRIPTION, ENROLLD_ENHANCED_DESCRIPTION, ENROLLD_ENHANCED_SKILLS, OTHER_PROJECTS_DESCRIPTION, OTHER_PROJECTS_SKILLS} from '../../constants/constants.jsx';

import '../css/portfolio.css';

const projectData = {
    "unite-pro": {
        video: { src: "/assets/Unite-Pro-Preview.mp4", type: "video/mp4" },
        link: "https://unite-pro.net",
        name: "Unite-Pro",
        Description: UNITE_PRO_ENHANCED_DESCRIPTION,
        Skills: UNITE_PRO_ENHANCED_SKILLS,
    },
    "enrolld": {
        video: { src: "/assets/Enrolld-Preview.mp4", type: "video/mp4" },
        link: "https://drive.google.com/drive/folders/...",
        name: "Enrolld",
        Description: ENROLLD_ENHANCED_DESCRIPTION,
        Skills: ENROLLD_ENHANCED_SKILLS,
    },
    "other": {
        video: { src: "/assets/Other-Project-Showcase.mp4", type: "video/mp4" },
        link: "https://github.com/Mitch-Dor",
        name: "Sidequests",
        Description: OTHER_PROJECTS_DESCRIPTION,
        Skills: OTHER_PROJECTS_SKILLS,
    },
};

function Portfolio() {
    const [portfolioProject, setPortfolioProject] = useState("unite-pro");
    
    const current = projectData[portfolioProject] ?? projectData["unite-pro"];
    const { video, link, name, Description, Skills } = current;

    return (
        <div id="portfolioSection" className="section">
            <div className="portfolioTop"></div>
            <div className="portfolioContent">
                <div className="portfolioContentLeft">
                <div className={`portfolioProjectVideoAndSelector ${portfolioProject}`}>
                    <div className="portfolioProjectSelector">
                    <div className={`portfolioProject ${portfolioProject === 'unite-pro' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('unite-pro')}}>Unite-Pro</div>
                    <div className={`portfolioProject ${portfolioProject === 'enrolld' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('enrolld')}}>Enrolld</div>
                    <div className={`portfolioProject ${portfolioProject === 'other' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('other')}}>Other</div>
                    <div className={`portfolioProjectSelectorBar ${portfolioProject === 'unite-pro' ? 'left' : portfolioProject === 'enrolld' ? 'middle' : 'right'}`}></div>
                    </div>
                    <video controls autoPlay loop muted playsInline className="projectVideo" key={portfolioProject}>
                    <source src={video.src} type={video.type} />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </div>
                <div className="portfolioContentRight">
                <div className="portfolioContentDescription">
                    <div className="descriptionTitle">
                        <a className="interactive-button portfolioSection" href={link} target="_blank" rel="noopener noreferrer">Site</a>
                        {name}
                    </div>
                    {/* <a className="descriptionTitle" href={link} target="_blank" rel="noopener noreferrer">{name}
                    </a> */}
                    <div className="projectDescription">
                        <Description />
                    </div>
                </div>
                <div className="skillsFromProject">
                    <div className="skillsFromProjectTitle">Takeaways</div>
                    <div className="projectSkillsList">
                        <Skills />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;