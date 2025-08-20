import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SKILLS, INTRO_CAROUSEL, TA_TAKEAWAYS, CLASSES, EDUCATION_CAROUSEL, UNITE_PRO_SKILLS, ENROLLD_SKILLS, DATA_ANNOTATION_DESCRIPTION, DA_TASKS, DA_ACHIEVEMENTS, MONROE_DESCRIPTION, MONROE_ACHIEVEMENTS } from '../../constants/constants';

import ImageCarousel from '../../sideComponents/js/ImageCarousel';
import AnimatedBackground from '../../sideComponents/js/AnimatedBackgrounds';
import WaveSeparatorTop from '../../sideComponents/js/WaveSeparatorTop';
import WaveSeparatorBottom from '../../sideComponents/js/WaveSeparatorBottom';
import Listing from '../../sideComponents/js/Listing';
import ContactBar from '../../sideComponents/js/ContactBar';
import { FaMousePointer } from "react-icons/fa";
import '../css/main-core.css';
import '../css/main-education.css';
import '../css/main-intro.css';
import '../css/main-portfolio.css';
import '../css/main-workExperience.css';

function Main() {
  const [scrollPoint, setScrollPoint] = useState(0);
  const [portfolioProject, setPortfolioProject] = useState("unite-pro");
  const [workExperience, setWorkExperience] = useState("dataAnnotation");
  const viewportHeight = window.visualViewport.height;
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
              < Listing listing={TA_TAKEAWAYS} title="TA Accomplishments (GameAI)" color={"#663700"} />
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
                <div className={`portfolioProjectVideoAndSelector ${portfolioProject}`}>
                  <div className="portfolioProjectSelector">
                    <div className={`portfolioProject ${portfolioProject === 'unite-pro' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('unite-pro')}}>Unite-Pro</div>
                    <div className={`portfolioProject ${portfolioProject === 'enrolld' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('enrolld')}}>Enrolld</div>
                    <div className={`portfolioProjectSelectorBar ${portfolioProject === 'unite-pro' ? 'left' : 'right'}`}></div>
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
          ) : (
            <div className="portfolioContent">
              <div className="portfolioContentLeft">
                <div className={`portfolioProjectVideoAndSelector ${portfolioProject}`}>
                  <div className="portfolioProjectSelector">
                    <div className={`portfolioProject ${portfolioProject === 'unite-pro' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('unite-pro')}}>Unite-Pro</div>
                    <div className={`portfolioProject ${portfolioProject === 'enrolld' ? 'selected' : ''}`} onClick={() => {setPortfolioProject('enrolld')}}>Enrolld</div>
                    <div className={`portfolioProjectSelectorBar ${portfolioProject === 'unite-pro' ? 'left' : 'right'}`}></div>
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
            <WaveSeparatorTop color={"#2C2C2C"} />
          </div>
          <div className="workContent">
            <WaveSeparatorBottom color={"#2C2C2C"} />
            <AnimatedBackground section={"workSection"} />
            <div className="DASection">
              <div className="DATop">
                <div className="DALogo">
                  <img src="/assets/DA.png"></img>
                </div>
                <div className="DADescription">
                  <div className="DADescTitle">
                    DataAnnotation And Me
                  </div>
                  <div className="DADescTopics">
                    <div className="myRole">
                      <div className="subsectionTitle">My Role</div>
                      <div className="subsectionInformation">At DataAnnotation I am an AI trainer. This means I take on tasks to correct AI responses to difficult prompts and identify where the AI went wrong.</div>
                    </div>
                    <div className="myLearning">
                      <div className="subsectionTitle">Learned Skills</div>
                      <div className="subsectionInformation">I now excel at research since this role requires me to be able to quickly find and understand documentation for specific plugins, niche languages, and more.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="DABottom">
                <div className="DAExampleTasks">
                  < Listing listing={DA_TASKS} title="Example Tasks" color="#00D5BC" />
                </div>
              </div>
            </div>
            <div className="MonroeSection">
              <div className="MonroeSectionTop">
                <div className="MonroeDescription">
                  <div className="MonroeDescTitle">
                    Monroe Energy And Me
                  </div>
                  <div className="MonroeDescTopics">
                    <div className="myTasks">
                      <div className="subsectionTitle">My Tasks</div>
                      <div className="subsectionInformation">I would handle tasks like filling out permits, performing inspections of the tanks that store the fuel, and labeling / documenting every valve and instrument on the pipeline.</div>
                    </div>
                    <div className="myEffect">
                      <div className="subsectionTitle">Monroe's Effect</div>
                      <div className="subsectionInformation">Monroe rarely provided me with tasks so I would need to seek out ways to be useful. I searched for what others needed and found ways to make them and Monroe more efficient.</div>
                    </div>
                  </div>
                </div>
                <div className="MonroeLogo">
                  <img src="/assets/Monroe.png"></img>
                </div>
              </div>
              <div className="MonroeSectionBottom">
                <div className="MonroeAchievements">
                  < Listing listing={MONROE_ACHIEVEMENTS} title="Achievements" color="#00D5BC" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END WORK EXPERIENCE SECTION */}
      </div>
    </>
  );
}

export default Main;