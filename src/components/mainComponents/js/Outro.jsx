import { OUTRO_FINAL } from '../../constants/constants';
import '../css/outro.css';

function Outro({setShowContact}) {
    return (
        <div id="outro" className="section">
            <div className="outroTop"></div>
            <div className="outroBody">
                <div className="outroBodyContent">
                    <div className="outroSummary">
                        < OUTRO_FINAL />
                    </div>
                    <div className="outroInteractive">
                        <div className="outro-find-me">Find Me At: </div>
                        <div className="interactive-button section5" onClick={() => setShowContact(true)}>
                            Contact Me
                        </div>
                        <div className="outro-social-item">
                        <a href="https://www.linkedin.com/in/mitchelldorward/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/LinkedIn.png" />
                        </a>
                        </div>
                        <div className="outro-social-item">
                            <a href="https://github.com/Mitch-Dor" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/Github.png" />
                            </a>
                        </div>
                        <a
                            href="/assets/Mitchell_Dorward_Resume.pdf"
                            download
                            className="interactive-button section5"
                        >Resume</a>
                    </div>
                </div>
                <img className="outroBodyImage" src="./assets/MeOutro.png"></img>
            </div>
        </div>
    )
}

export default Outro;