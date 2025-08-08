import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EDUCATION_TEXT } from '../../text/text';
import '../css/main.css'

function Main() {
  const [scrollPoint, setScrollPoint] = useState(0);
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

  return (
    <>
      {/*                                             Add viewportHeight/2 so transition happens when spacer is in middle of screen, not on top. */}
      <div id="backgroundImageDisplay" className={`${(endSectionOne - (scrollPoint + viewportHeight/2) > 0) ? 'educationSection' : (endSectionTwo - (scrollPoint + viewportHeight/2) > 0) ? 'codingSection' : 'thirdSection'}`}></div>
      <div id="mainContainer">
        <div id="education" className="section">
          <div className="textSection scale-on-scroll" id="educationInformation">
            { EDUCATION_TEXT }
          </div>
          <div className="imageDisplay scale-on-scroll" id="professionalImage">
            <img src="./assets/me/Grad.png"></img>
          </div>
        </div>
        <div className="spacer"></div>
        <div id="secondSection" className="section">
          <div className="textSection scale-on-scroll" id="educationInformation">
            { EDUCATION_TEXT }
          </div>
          <div className="imageDisplay scale-on-scroll" id="professionalImage">
            <img src="./assets/me/Grad.png"></img>
          </div>
        </div>
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