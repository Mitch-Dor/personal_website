import ImageCarousel from '../../sideComponents/js/ImageCarousel';
import Listing from '../../sideComponents/js/Listing';
import ContactBar from '../../sideComponents/js/ContactBar';

import {TA_TAKEAWAYS, CLASSES, EDUCATION_CAROUSEL} from '../../constants/constants';

import '../css/education.css';

function Education() {
    return (
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
    )
}

export default Education;