import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EDUCATION_TEXT } from '../../text/text';
import '../css/main.css'

function Main() {
  const [scrollPoint, setScrollPoint] = useState(0);
  const viewportHeight = window.innerHeight;
  const addedBlackIntermediate = 250;
  const sectionHeight = viewportHeight + addedBlackIntermediate;
  const endSectionOne = sectionHeight;
  const endSectionTwo = sectionHeight * 2;
  const endSectionThree = sectionHeight * 3;
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
    document.documentElement.style.setProperty('--blackIntermediateLength', `${addedBlackIntermediate}px`);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function checkIfInbetween() {
    console.log(scrollPoint, endSectionOne, endSectionTwo, endSectionThree);
    if (Math.abs(scrollPoint - (endSectionOne-addedBlackIntermediate/2)) <= addedBlackIntermediate/2 || Math.abs(scrollPoint - endSectionTwo) <= addedBlackIntermediate/2 || Math.abs(scrollPoint - endSectionThree) <= addedBlackIntermediate/2){
      return true;
    }
    return false;
  }

  return (
    <>
      <div id="backgroundImageDisplay" className={`${checkIfInbetween() ? 'inbetweenBlack' : scrollPoint < endSectionOne ? 'educationSection' : scrollPoint < endSectionTwo ? 'codingSection' : 'thirdSection'}`}></div>
      <div id="mainContainer">
        <div id="education" className="section">
          <div className="textSection scale-on-scroll" id="educationInformation">
            { EDUCATION_TEXT }
          </div>
          <div className="imageDisplay scale-on-scroll" id="professionalImage">
            <img src="./assets/me/Grad.png"></img>
          </div>
        </div>
        <div id="secondSection" className="section">
          <div className="textSection scale-on-scroll" id="educationInformation">
            { EDUCATION_TEXT }
          </div>
          <div className="imageDisplay scale-on-scroll" id="professionalImage">
            <img src="./assets/me/Grad.png"></img>
          </div>
        </div>\
      </div>
    </>
  );
}

export default Main;