import {useEffect, useState} from 'react';

import ImageCarousel from '../../sideComponents/js/ImageCarousel';

import {BEYOND_CLASSES, EDUCATION_CAROUSEL, SIGNIFICANT_CLASSES} from '../../constants/constants.jsx';

import '../css/education.css';

function Education({sectionStart}) {
    const [isSnappedToSection, setIsSnappedToSection] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setIsSnappedToSection(Math.abs(y - sectionStart) < 5);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [sectionStart]);
    

    return (
        <div id="education" className="section">
            <div className="educationTop"></div>
            <div className="educationMiddle">
                <img id="lehighLogo" src="assets/lehighLogo.png" alt="Lehigh Logo" style={{zIndex: isSnappedToSection ? 1001 : 5}}></img>
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
                <div className="education-BC-highlights-title">Beyond Classes</div>
                <div className="education-BC-highlights-content">< BEYOND_CLASSES /></div>
            </div>
            <div className="educationCarousel">
                <ImageCarousel images={EDUCATION_CAROUSEL} />
            </div>
            <div id="ClassesList" className="educationList">
                <div className="education-classes-significance-title">Significant Education</div>
                <div className="education-classes-significance-content">< SIGNIFICANT_CLASSES /></div>
            </div>
            </div>
        </div> 
    )
}

export default Education;