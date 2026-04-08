import { DA_SKILLS, DATA_ANNOTATION_DESCRIPTION, DA_CAROUSEL } from '../../constants/constants.jsx';
import ImageCarousel from '../../sideComponents/js/ImageCarousel.jsx';
import '../css/workExperience.css';

function Work() {
    return (
        <div id="work" className="section">
            <div className="work-content">
                <div className="work-DA-title">
                    <img src="/assets/DA.png"></img>
                    <div className="work-DA-title-text">DataAnnotation Tech</div>
                </div>
                <div className="work-DA-description">
                    <div className="work-DA-description-header">About DataAnnotation</div>
                    <DATA_ANNOTATION_DESCRIPTION />
                </div>
                <div className="work-DA-skills">
                    <div className="work-DA-skills-header">Working At DataAnnotation Has Made Me Valuable Because...</div>
                    <div className="work-DA-skills-list">
                        < DA_SKILLS />
                    </div>
                </div>
                <div className="work-DA-examples">
                    < ImageCarousel images={DA_CAROUSEL} section="work" />
                </div>
            </div>
        </div>
    )
}

export default Work;