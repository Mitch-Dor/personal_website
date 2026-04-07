import {useState} from 'react';

import ContactBar from '../../sideComponents/js/ContactBar';
import Listing from '../../sideComponents/js/Listing';

import { FaMousePointer } from "react-icons/fa";

import { UNITE_PRO_SKILLS, ENROLLD_SKILLS, UTA_SKILLS } from '../../constants/constants';

import '../css/portfolio.css';

function Portfolio() {
    const [portfolioProject, setPortfolioProject] = useState("unite-pro");


    return (
        <div id="portfolioSection" className="section">
            <div className="portfolioTop">
            <div className="portfolioContactBar">
                < ContactBar />
            </div>
            </div>
            {portfolioProject === 'unite-pro' ? (
            <div className="portfolioContent">
                <div className="portfolioContentLeft">
                <div className={`portfolioProjectVideoAndSelector ${portfolioProject}`}>
                    <div className="portfolioProjectSelector">
                    <div className={`portfolioProject ${portfolioProject === 'unite-pro' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('unite-pro')}}>Unite-Pro</div>
                    <div className={`portfolioProject ${portfolioProject === 'enrolld' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('enrolld')}}>Enrolld</div>
                    <div className={`portfolioProject ${portfolioProject === 'uta' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('uta')}}>UTA</div>
                    <div className={`portfolioProjectSelectorBar ${portfolioProject === 'unite-pro' ? 'left' : portfolioProject === 'enrolld' ? 'middle' : 'right'}`}></div>
                    </div>
                    <video autoPlay loop muted playsInline className="projectVideo" key={portfolioProject}>
                    <source src="/assets/Unite-Pro-Preview.mp4" type="video/mp4" />
                    <source src="/video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </div>
                <div className="portfolioContentRight">
                <div className="portfolioContentDescription">
                    <a className={`descriptionTitle ${portfolioProject}`} href="https://unite-pro.net" target="_blank" rel="noopener noreferrer">Unite-Pro.net
                    <div className="clickMeIcon">
                    <FaMousePointer className="MouseIcon" />
                    <div className="clickMeText">Click Me For Site!</div>
                    </div>
                    </a>
                    <div className="belowTitle">
                    <div className="whatIsIt">
                        <div className="subsectionTitle">What Is It?</div>
                        <div className="subsectionInformation">Unite-Pro is a public webapp that is a draft-sim and stat tracker for pro matches in the video game Pokemon Unite. It helps users practice for the pro scene.</div>
                    </div>
                    <div className="usageData">
                        <div className="subsectionTitle">Usage Data</div>
                        <div className="subsectionInformation">Unite-Pro is currently in its beta stage, but is about to be released to the public.</div>
                    </div>
                    <div className="howDoesItWork">
                        <div className="subsectionTitle">How Does It Work?</div>
                        <div className="subsectionInformation">The AI uses planning and A* search to quickly find the best team comp possible based on traits. The Pokemon Company does not publicly list data so it must be hand collected via their livestreams.</div>
                    </div>
                    </div>
                </div>
                <div className="skillsFromProject">
                    < Listing listing={UNITE_PRO_SKILLS} title="Significant Skills" color="#786000" />
                </div>
                </div>
            </div>
            ) : portfolioProject === 'enrolld' ? (
            <div className="portfolioContent">
                <div className="portfolioContentLeft">
                <div className={`portfolioProjectVideoAndSelector ${portfolioProject}`}>
                    <div className="portfolioProjectSelector">
                    <div className={`portfolioProject ${portfolioProject === 'unite-pro' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('unite-pro')}}>Unite-Pro</div>
                    <div className={`portfolioProject ${portfolioProject === 'enrolld' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('enrolld')}}>Enrolld</div>
                    <div className={`portfolioProject ${portfolioProject === 'uta' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('uta')}}>UTA</div>
                    <div className={`portfolioProjectSelectorBar ${portfolioProject === 'unite-pro' ? 'left' : portfolioProject === 'enrolld' ? 'middle' : 'right'}`}></div>
                    </div>
                    <video autoPlay loop muted playsInline className="projectVideo" key={portfolioProject}>
                    <source src="/assets/Enrolld-Preview.mp4" type="video/mp4" />
                    <source src="/video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </div>
                <div className="portfolioContentRight">
                <div className="portfolioContentDescription">
                    <a className={`descriptionTitle ${portfolioProject}`} href="https://drive.google.com/drive/folders/1OaZXhio0DBu3uB7mVpM920AKcnhaKEOt?usp=sharing" target="_blank" rel="noopener noreferrer">Enrolld
                    <div className="clickMeIcon">
                    <FaMousePointer className="MouseIcon" />
                    <div className="clickMeText">Click Me For Demos!</div>
                    </div>
                    </a>
                    <div className="belowTitle">
                    <div className="whatIsIt">
                        <div className="subsectionTitle">What Is It?</div>
                        <div className="subsectionInformation">Enrolld is a webapp for colleges to help students communicate efficiently with advisors and plan their schedules in advance so classes can match student demand.</div>
                    </div>
                    <div className="userTesting">
                        <div className="subsectionTitle">User Testing</div>
                        <div className="subsectionInformation">The team was able to successfully test the webapp with 100 students after about 500 hours of work between 4 people over two semesters.</div>
                    </div>
                    <div className="keyTakeaways">
                        <div className="subsectionTitle">Why Is It Significant?</div>
                        <div className="subsectionInformation">Enrolld required me to work in a team of developers, demo weekly, and integrate stakeholder feedback to follow the agile methodology and deliver a great product.</div>
                    </div>
                    </div>
                </div>
                <div className="skillsFromProject">
                    < Listing listing={ENROLLD_SKILLS} title="Significant Skills" />
                </div>
                </div>
            </div>
            ) : (
            <div className="portfolioContent">
                <div className="portfolioContentLeft">
                <div className={`portfolioProjectVideoAndSelector ${portfolioProject}`}>
                    <div className="portfolioProjectSelector">
                    <div className={`portfolioProject ${portfolioProject === 'unite-pro' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('unite-pro')}}>Unite-Pro</div>
                    <div className={`portfolioProject ${portfolioProject === 'enrolld' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('enrolld')}}>Enrolld</div>
                    <div className={`portfolioProject ${portfolioProject === 'uta' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('uta')}}>UTA</div>
                    <div className={`portfolioProjectSelectorBar ${portfolioProject === 'unite-pro' ? 'left' : portfolioProject === 'enrolld' ? 'middle' : 'right'}`}></div>
                    </div>
                    <video autoPlay loop muted playsInline className="projectVideo" key={portfolioProject}>
                    <source src="/assets/UTA-Preview.mp4" type="video/mp4" />
                    <source src="/video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                </div>
                <div className="portfolioContentRight">
                <div className="portfolioContentDescription">
                    <a className={`descriptionTitle ${portfolioProject}`}>UTA
                    </a>
                    <div className="belowTitle">
                    <div className="whatIsIt">
                        <div className="subsectionTitle">What Is It?</div>
                        <div className="subsectionInformation">The UTA Pickems app is a web app to increase community engagement in my Discord server, UTA. A 200+ member Discord server managed solely by myself where I run Pokemon Draft Leagues.</div>
                    </div>
                    <div className="userTesting">
                        <div className="subsectionTitle">Speedy Developement</div>
                        <div className="subsectionInformation">The entire web app was built from scratch in under 48 hours. Users requested pickems just over 2 days before the season started, and doing them in Discord is not engaging, so I quickly built the web app.</div>
                    </div>
                    <div className="keyTakeaways">
                        <div className="subsectionTitle">Why Is It Significant?</div>
                        <div className="subsectionInformation">During my high school and early college years UTA exceeded 300 members, but I dropped it in favor of committing myself more to college. Now, I need to increase community engagement to revive it.</div>
                    </div>
                    </div>
                </div>
                <div className="skillsFromProject">
                    < Listing listing={UTA_SKILLS} title="Significant Skills" color="#4F5178" />
                </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Portfolio;