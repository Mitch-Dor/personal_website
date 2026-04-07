import WaveSeparatorTop from '../../sideComponents/js/WaveSeparatorTop';
import WaveSeparatorBottom from '../../sideComponents/js/WaveSeparatorBottom';
import Listing from '../../sideComponents/js/Listing';
import ContactBar from '../../sideComponents/js/ContactBar';
import AnimatedBackground from '../../sideComponents/js/AnimatedBackgrounds';
import ImageCarousel from '../../sideComponents/js/ImageCarousel';
import TextBlock from '../../sideComponents/js/TextBlock';
import { SKILLS, INTRO_CAROUSEL, INTRO_TEXT } from '../../constants/constants';

import { FiDownload } from "react-icons/fi";

import '../css/intro.css';

function Intro({endSectionOne, endSectionTwo, endSectionThree, spacerDist, handleScroll}) {
    return (
        <div id="intro" className="section">
            <div className="headerBar">
            <AnimatedBackground section={"headerBar"} />
            <a 
                href="/assets/Mitchell_Dorward_Resume.pdf" 
                download 
                className="downloadResume"
            >
                < FiDownload className="downloadIcon" />
                Resume
            </a>
            <div className="headerPhoto">
                <img style={{transform: "scaleX(-1)"}} src="./assets/MeHeadshot.png"></img>
            </div>
            <div className="headerTextPortion">
                <div className="headerName">
                <div className="name">Mitchell Dorward</div>
                <div className="title">Computer Science Engineer</div>
                </div>
                <div className="contactMe">
                < ContactBar />
                </div>
                <div className="links">
                <div className="linkItem headerItemClickable" onClick={() => handleScroll(endSectionOne + spacerDist/2)}>Education</div>
                <div className="linkItem headerItemClickable" onClick={() => handleScroll(endSectionTwo + spacerDist/2)}>Personal Projects</div>
                <div className="linkItem headerItemClickable" onClick={() => handleScroll(endSectionThree + spacerDist/2)}>Work History</div>
                </div>
            </div>
            <WaveSeparatorTop color={"#2C2C2C"} />
            </div>
            <div className="introContent">
            <WaveSeparatorBottom color={"#2C2C2C"} />
            <div className="skillsArea">
                < TextBlock title={"About Me"} body={INTRO_TEXT} />
            </div>
            <div className="introCarousel">
                <ImageCarousel images={INTRO_CAROUSEL} />
            </div>
            </div>
        </div>
    )
}

export default Intro;