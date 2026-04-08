import { useState } from 'react';
import { INTRO_TEXT } from '../../constants/constants.jsx';
import '../css/intro.css';

function Intro() {
    const [showContact, setShowContact] = useState(false);

    return (
        <>
        <div id="intro" className="section">
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