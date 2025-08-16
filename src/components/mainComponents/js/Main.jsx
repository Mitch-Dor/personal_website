import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { INTRO_TEXT, EDUCATION_TEXT, BEYOND_CLASSES_TEXT, EXTRACURRICULARS_TEXT, UNITE_PRO_TEXT, SKILLS, INTRO_CAROUSEL, TA_TAKEAWAYS, CLASSES, EDUCATION_CAROUSEL } from '../../constants/constants';

import ImageCarousel from '../../sideComponents/js/ImageCarousel';
import AnimatedBackground from '../../sideComponents/js/AnimatedBackgrounds';
import WaveSeparatorTop from '../../sideComponents/js/WaveSeparatorTop';
import WaveSeparatorBottom from '../../sideComponents/js/WaveSeparatorBottom';
import Listing from '../../sideComponents/js/Listing';
import ContactBar from '../../sideComponents/js/ContactBar';
import '../css/main-core.css';
import '../css/main-education.css';
import '../css/main-intro.css';
import '../css/main-portfolio.css';

function Main() {
  const [scrollPoint, setScrollPoint] = useState(0);
  const [portfolioProject, setPortfolioProject] = useState("unite-pro");
  const viewportHeight = window.innerHeight;
  const baseSectionHeight = viewportHeight;
  const spacerDist = 200;
  const sectionHeight = baseSectionHeight;
  const sectionAndSpacer = sectionHeight + spacerDist;
  const endSectionOne = sectionHeight + spacerDist/2; // The middle of the spacer after section 1
  const endSectionTwo = sectionHeight * 2 + (spacerDist*3)/2;
  const endSectionThree = sectionHeight * 3 + (spacerDist*5)/2;
  const navigate = useNavigate();

  useEffect(() => {
    const snapThreshold = 200; // px

    let timeout;

    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const y = window.scrollY;
        const nearestMultiple = Math.round(y / sectionAndSpacer) * sectionAndSpacer;
        const distance = nearestMultiple - y;

        if (Math.abs(distance) <= snapThreshold) {
          window.scrollTo({
            top: nearestMultiple,
            behavior: "smooth"
          });
        }
      }, 80); // small delay after scroll ends
    };

    window.addEventListener("scroll", onScroll);
    document.documentElement.style.setProperty('--sectionHeight', `${sectionHeight}px`);
    document.documentElement.style.setProperty('--spacerHeight', `${spacerDist}px`);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (targetY) => {
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="mainContainer">
        {/* START INTRO SECTION */}
        <div id="intro" className="section">
          <div className="headerBar">
            <AnimatedBackground section={"headerBar"} />
            <div className="headerPhoto bobbing2">
              <img src="./assets/me/Grad.png"></img>
            </div>
            <div className="headerTextPortion">
              <div className="headerName">Mitchell Dorward</div>
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
              < Listing listing={SKILLS} title="Skills" />
            </div>
            <div className="introCarousel">
              <ImageCarousel images={INTRO_CAROUSEL} />
            </div>
          </div>
        </div>
        {/* END INTRO SECTION */}
        <div className="spacer" id="firstSpacer">
        </div>
        {/* START EDUCATION SECTION */}
        <div id="education" className="section">
          <div className="educationTop">
            <div className="educationContactMe">
              < ContactBar />
            </div>
          </div>
          <div className="educationMiddle">
              {/* <AnimatedBackground section={"educationSection"} /> */}
              <img id="lehighLogo" src="assets/lehighLogo.png" alt="Lehigh Logo"></img>
              <div id="educationMiddleContent">
                <div id="major">Bachelor's of Computer Science from the Rossin College of Engineering</div>
                <div id="degreeInformation">
                  <div id="minors">Minors in Music & Spanish</div>
                  <div id="GPA">GPA: 3.71</div>
                </div>
              </div>
          </div>
          <div className="educationBottom">
            <div id="TAList" className="educationList">
              < Listing listing={TA_TAKEAWAYS} title="Accomplishments as a CSE348 (GameAI) TA" color={"#663700"} />
            </div>
            <div className="educationCarousel">
              <ImageCarousel images={EDUCATION_CAROUSEL} />
            </div>
            <div id="ClassesList" className="educationList">
              < Listing listing={CLASSES} title="Important Classes" color={"#663700"} />
            </div>
          </div>
        </div> 
        {/* END EDUCATION SECTION */}
        <div className="spacer" id="secondSpacer"></div>
        {/* START PORTFOLIO SECTION */}
        <div id="portfolioSection" className="section">
          <div className="portfolioTop">
            <div className="portfolioContactBar">
              < ContactBar />
            </div>
          </div>
          <div className={`portfolioMiddle ${portfolioProject}`}>
            <div className="portfolioProjectSelector">
              <div className={`portfolioProject ${portfolioProject === 'unite-pro' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('unite-pro')}}>Unite-Pro</div>
              <div className={`portfolioProject ${portfolioProject === 'enrolld' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('enrolld')}}>Enrolld</div>
              <div className={`portfolioProjectSelectorBar ${portfolioProject === 'unite-pro' ? 'left' : 'right'}`}></div>
            </div>
          </div>
          <div className="portfolioBottom">
            <div className="portfolioContent">
              <div className="portfolioContentDisplay" id="portfolioImageCarousel">
                <ImageCarousel images={EDUCATION_CAROUSEL} />
              </div>
              <div className="portfolioContentDisplay" id="portfolioList">
                < Listing listing={CLASSES} title="Important Classes" color={"#663700"} />
              </div>
            </div>
          </div>
        </div>
        {/* END PORTFOLIO SECTION */}
        <div className="spacer"></div>
        <div id="thirdSection" className="section">
          <div className="textSection scale-on-scroll" id="educationInformation">
            { EDUCATION_TEXT }
          </div>
          <div className="imageDisplay scale-on-scroll" id="professionalImage">
            <img src="./assets/me/Grad.png"></img>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </>
  );
}

export default Main;