import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SKILLS, INTRO_CAROUSEL, TA_TAKEAWAYS, CLASSES, EDUCATION_CAROUSEL, UNITE_PRO_DESCRIPTION } from '../../constants/constants';

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
import '../css/main-workExperience.css';

function Main() {
  const [scrollPoint, setScrollPoint] = useState(0);
  const [portfolioProject, setPortfolioProject] = useState("unite-pro");
  const [workExperience, setWorkExperience] = useState("dataAnnotation");
  const viewportHeight = window.innerHeight;
  const baseSectionHeight = viewportHeight;
  const spacerDist = 100;
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
        <div className="spacer" id="secondSpacer">
          <WaveSeparatorTop color={"#2C2C2C"} />
        </div>
        {/* START PORTFOLIO SECTION */}
        <div id="portfolioSection" className="section">
          <div className="portfolioTop">
            <div className="portfolioContactBar">
              < ContactBar />
            </div>
          </div>
          {portfolioProject === 'unite-pro' ? (
            <div className="portfolioContent">
              <div className="portfolioContentLeft">
                <div className="learnedFromProject">
                  < Listing listing={SKILLS} title="Lessons Learned" />
                </div>
              </div>
              <div className="portfolioContentCenter">
                <div className="portfolioContentDescription">
                  <a className="descriptionTitle" href="https://unite-pro.net" target="_blank" rel="noopener noreferrer">Unite-Pro.net</a>
                  {UNITE_PRO_DESCRIPTION}
                </div>
                <div className={`portfolioProjectVideoAndSelector ${portfolioProject}`}>
                  <div className="portfolioProjectSelector">
                    <div className={`portfolioProject ${portfolioProject === 'unite-pro' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('unite-pro')}}>Unite-Pro</div>
                    <div className={`portfolioProject ${portfolioProject === 'enrolld' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('enrolld')}}>Enrolld</div>
                    <div className={`portfolioProjectSelectorBar ${portfolioProject === 'unite-pro' ? 'left' : 'right'}`}></div>
                  </div>
                  <video autoPlay loop muted playsInLine className="projectVideo">
                    <source src="/assets/Unite-Pro-Preview.mp4" type="video/mp4" />
                    <source src="/video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="portfolioContentRight">
                <div className="technologiesInProject">
                  < Listing listing={SKILLS} title="Technologies Used" />
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* END PORTFOLIO SECTION */}
        <div className="spacer" id="thirdSpacer">
          <WaveSeparatorTop color={"#2C2C2C"} />
        </div>
        {/* BEGIN WORK EXPERIENCE SECTION */}
        <div id="workSection" className="section">
          <div className="workTop">
            <div className="workContactBar">
              < ContactBar />
            </div>
          </div>
          <div className="workContent">
            <div className="workContentDisplay" id="workImageCarousel">
              <ImageCarousel images={EDUCATION_CAROUSEL} />
            </div>
            <div className="workContentDisplay" id="workList">
              < Listing listing={CLASSES} title="Important Classes" color={"#663700"} />
            </div>
          </div>
          <div className={`workMiddle ${workExperience}`}>
            <div className="workExperienceSelector">
              <div className={`workExperience ${workExperience === 'dataAnnotation' ? 'selected' : ''}`} onClick={() => {setWorkExperience('dataAnnotation')}}>Data Annotation</div>
              <div className={`workExperience ${workExperience === 'monroeEnergy' ? 'selected' : ''}`} onClick={() => {setWorkExperience('monroeEnergy')}}>Monroe Energy / MIPC</div>
              <div className={`workExperienceSelectorBar ${workExperience === 'dataAnnotation' ? 'left' : 'right'}`}></div>
            </div>
          </div>
          <div className="workBottom">
          </div>
        </div>
        {/* END WORK EXPERIENCE SECTION */}
      </div>
    </>
  );
}

export default Main;