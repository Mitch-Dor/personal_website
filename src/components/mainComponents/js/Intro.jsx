import { INTRO_TEXT } from '../../constants/constants.jsx';
import '../css/intro.css';

function Intro({setShowContact}) {

    return (
        <>
        <div id="intro" className="section">
            <div className="intro-content">
                <img className="intro-personal-image" style={{transform: "scaleX(-1)"}} src="./assets/MeHeadshot.png" />
                <div className="intro-about-me">
                    <div className="intro-personal-description">
                        <div className="title">I am Mitchell Dorward...</div>
                        <div className="body">< INTRO_TEXT /></div>
                    </div>
                    <div className="intro-interactive-buttons">
                        <div
                            className="interactive-button"
                            id="Contact"
                            onClick={() => setShowContact(true)}
                        >Contact Me</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Intro;