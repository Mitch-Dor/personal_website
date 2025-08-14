import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { INTRO_TEXT, EDUCATION_TEXT, BEYOND_CLASSES_TEXT, EXTRACURRICULARS_TEXT, UNITE_PRO_TEXT, SKILLS, INTRO_CAROUSEL } from '../../constants/constants';
import { PiTagChevronFill } from "react-icons/pi";
import { LiaChevronUpSolid } from "react-icons/lia";
import { LiaChevronDownSolid } from "react-icons/lia";
import RainbowRippleBackground from '../../sideComponents/js/RainbowRippleBackground';
import ImageCarousel from '../../sideComponents/js/ImageCarousel';
import AnimatedBackground from '../../sideComponents/js/AnimatedBackgrounds';
import '../css/main-core.css';
import '../css/main-education.css';
import '../css/main-intro.css';

function Main() {
  const [scrollPoint, setScrollPoint] = useState(0);
  const listRef = useRef(null);
  const viewportHeight = window.innerHeight;
  const baseSectionHeight = viewportHeight;
  const spacerDist = 300;
  const sectionHeight = baseSectionHeight;
  const endSectionOne = sectionHeight + spacerDist/2; // The middle of the spacer after section 1
  const endSectionTwo = sectionHeight * 2 + (spacerDist*3)/2;
  const endSectionThree = sectionHeight * 3 + (spacerDist*5)/2;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPoint(window.scrollY);

      const elements = document.querySelectorAll('.scale-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // How far the element is from the center of the screen
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);

        // Normalize and clamp the scale factor between 0.8 and 1
        const maxDistance = windowHeight / 2;
    
        let scale = Math.max(0.8, 1 - distanceFromCenter / maxDistance * 0.2);
        if (maxDistance - distanceFromCenter < 120) {
          scale = 1 - distanceFromCenter / maxDistance
        }

        el.style.setProperty('--scale', scale.toFixed(3));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    document.documentElement.style.setProperty('--sectionHeight', `${sectionHeight}px`);
    document.documentElement.style.setProperty('--spacerHeight', `${spacerDist}px`);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (targetY) => {
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };
  
  const moveTraitsUp = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ top: -60, behavior: "smooth" });
    }
  };

  const moveTraitsDown = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ top: 60, behavior: "smooth" });
    }
  };

  return (
    <>
      {/*                                             Add viewportHeight/2 so transition happens when spacer is in middle of screen, not on top. */}
      {/* <div id="backgroundImageDisplay" className={`${(endSectionOne - (scrollPoint + viewportHeight/2) > 0) ? 'introSection' : (endSectionTwo - (scrollPoint + viewportHeight/2) > 0) ? 'educationSection' : 'unite-proSection'}`}>
        <AnimatedBackground section={`${(endSectionOne - (scrollPoint + viewportHeight/2) > 0) ? 'introSection' : (endSectionTwo - (scrollPoint + viewportHeight/2) > 0) ? 'educationSection' : 'unite-proSection'}`} />
      </div> */}
      <div id="mainContainer">
        {/* START INTRO SECTION */}
        <div id="intro" className="section">
          <div className="headerBar">
            <div className="headerBGTransition"></div>
            <AnimatedBackground section={"headerBar"} />
            <div className="headerPhoto bobbing2">
              <img src="./assets/me/Grad.png"></img>
            </div>
            <div className="headerTextPortion">
              <div className="headerName">Mitchell Dorward</div>
              <div className="links">
                <div className="linkItem headerItemClickable" onClick={() => handleScroll(endSectionOne + spacerDist/2)}>Education</div>
                <div className="linkItem headerItemClickable" onClick={() => handleScroll(endSectionTwo + spacerDist/2)}>Personal Projects</div>
                <div className="linkItem headerItemClickable" onClick={() => handleScroll(endSectionThree + spacerDist/2)}>Work History</div>
              </div>
            </div>
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '50px'
              }}
            >
              <path
                d="M0,50 C360,150 1080,-50 1440,50 L1440,100 L0,100 Z"
                fill="rgba(0,0,0,0.3)"
              />
            </svg>
          </div>
          <div className="introContent">
            <svg
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '50px'
              }}
            >
              <path
                d="M0,50 C360,150 1080,-50 1440,50 L1440,100 L0,100 Z"
                fill="#2B1844"
                transform="rotate(180 720 50)"
              />
            </svg>
            <div className="skillsArea">
              <LiaChevronUpSolid className="skillsUp" onClick={() => {moveTraitsUp()}} />
              <LiaChevronDownSolid className="skillsDown" onClick={() => {moveTraitsDown()}} />
              <div className="skillsTitle">Skills</div>
              <div className="skillsList" ref={listRef} >
                {SKILLS.map((skill) => {
                  return (
                    <div className="skillListItem">
                      <PiTagChevronFill className="skillListItemTab" />
                      <div className="skillListItemText">
                        {skill}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="introCarousel">
              <ImageCarousel images={INTRO_CAROUSEL} />
            </div>
          </div>
        </div>
        {/* END INTRO SECTION */}
        <div className="spacer" id="firstSpacer"></div>
        {/* START EDUCATION SECTION */}
        <div id="education" className="section">
          <AnimatedBackground section={"educationSection"} />
          <div className="textSection" id="educationInformation">
            <div className="rowSection">
              <div className="scale-on-scroll">
                <div className="textBlob bobbing1">
                  <h3 className='title'>Education</h3>
                  { EDUCATION_TEXT }
                </div>
              </div>
              <div className="scale-on-scroll">
                <div className="textBlob bobbing2">
                  <h3 className='title'>Beyond Classes</h3>
                  { BEYOND_CLASSES_TEXT }
                </div>
              </div>
            </div>
            <div className="rowSection">
              <div className="scale-on-scroll">
                <div className='textBlob bobbing1'>
                  <h3 className='title'>Extracurriculars</h3>
                  {EXTRACURRICULARS_TEXT}
                </div>
              </div>
            </div>
          </div>
          <div className="scale-on-scroll">
            <div className="imageDisplay bobbing2" id="professionalImage">
              <img src="./assets/me/Grad.png"></img>
            </div>
          </div>
        </div>
        {/* END EDUCATION SECTION */}
        <div className="spacer"></div>
        {/* START UNITE-PRO SECTION */}
        <div id="secondSection" className="section">
          <div className="scale-on-scroll">
                <div className="textBlob bobbing1">
                  <h3 className='title'>Unite-Pro.net</h3>
                  { UNITE_PRO_TEXT }
                </div>
              </div>
          <div className="imageDisplay scale-on-scroll" id="professionalImage">
            <img src="./assets/me/Grad.png"></img>
          </div>
        </div>
        {/* END UNITE-PRO SECTION */}
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