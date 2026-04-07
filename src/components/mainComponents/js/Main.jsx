import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import WaveSeparatorTop from '../../sideComponents/js/WaveSeparatorTop';
import Intro from './Intro';
import Education from './Education';
import Portfolio from './Portfolio';
import Work from './Work';
import '../css/main-core.css';

function Main() {
  const viewportHeight = window.visualViewport.height;
  const baseSectionHeight = viewportHeight;
  const spacerDist = 100;
  const sectionHeight = baseSectionHeight;
  const sectionAndSpacer = sectionHeight + spacerDist;
  const endSectionOne = sectionHeight + spacerDist/2; // The middle of the spacer after section 1
  const endSectionTwo = sectionHeight * 2 + (spacerDist*3)/2;
  const endSectionThree = sectionHeight * 3 + (spacerDist*5)/2;

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
        < Intro endSectionOne={endSectionOne} endSectionTwo={endSectionTwo} endSectionThree={endSectionThree} spacerDist={spacerDist} handleScroll={handleScroll} />
        {/* END INTRO SECTION */}
        <div className="spacer" id="firstSpacer">
        </div>
        {/* START EDUCATION SECTION */}
        < Education />
        {/* END EDUCATION SECTION */}
        <div className="spacer" id="secondSpacer">
          <WaveSeparatorTop color={"#2C2C2C"} />
        </div>
        {/* START PORTFOLIO SECTION */}
        < Portfolio />
        {/* END PORTFOLIO SECTION */}
        <div className="spacer" id="thirdSpacer">
          <WaveSeparatorTop color={"#2C2C2C"} />
        </div>
        {/* BEGIN WORK EXPERIENCE SECTION */}
        < Work />
        {/* END WORK EXPERIENCE SECTION */}
      </div>
    </>
  );
}

export default Main;