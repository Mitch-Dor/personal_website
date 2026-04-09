import { useEffect, useState } from 'react';

import Intro from './Intro';
import Education from './Education';
import Portfolio from './Portfolio';
import Work from './Work';
import '../css/main-core.css';
import HeaderBar from './HeaderBar';
import Outro from './Outro';

function Main() {
  const viewportHeight = window.visualViewport.height;
  const baseSectionHeight = viewportHeight;
  const spacerDist = 100;
  const sectionHeight = baseSectionHeight;
  const sectionAndSpacer = sectionHeight + spacerDist;
  const endSectionOne = sectionHeight + spacerDist/2; // The middle of the spacer after section 1
  const endSectionTwo = sectionHeight * 2 + (spacerDist*3)/2;
  const endSectionThree = sectionHeight * 3 + (spacerDist*5)/2;
  const endSectionFour = sectionHeight * 4 + (spacerDist*7)/2;
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const snapThreshold = 80; // px

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
        {showContact && (
          <div
              className="modal-overlay"
              onClick={() => setShowContact(false)}
          >
              <div
                  className="modal-box"
                  onClick={(e) => e.stopPropagation()}
              >
                  <button
                      className="modal-close"
                      onClick={() => setShowContact(false)}
                  >✕</button>
                  <h2 className="modal-title">Contact Me</h2>
                  <div className="modal-item">
                      <span className="modal-label">📞 Phone</span>
                      <span className="modal-value">(610) 227-5052</span>
                  </div>
                  <div className="modal-item">
                      <span className="modal-label">✉️ Email</span>
                      <span className="modal-value">mitchdor48@gmail.com</span>
                  </div>
              </div>
          </div>
      )}
        < HeaderBar endSectionOne={endSectionOne} endSectionTwo={endSectionTwo} endSectionThree={endSectionThree} endSectionFour={endSectionFour} sectionHeight={sectionHeight} spacerDist={spacerDist} handleScroll={handleScroll} setShowContact={setShowContact} />
        < Intro setShowContact={setShowContact} />
        <div className="spacer" id="firstSpacer"></div>
        < Work />
        <div className="spacer" id="secondSpacer"></div>
        < Education sectionStart={sectionAndSpacer*2} />
        <div className="spacer" id="thirdSpacer"></div>
        < Portfolio />
        <div className="spcaer" id="fourthSpacer"></div>
        < Outro setShowContact={setShowContact} />
      </div>
    </>
  );
}

export default Main;