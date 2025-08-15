import "../css/contactBar.css";

export default function ContactBar() {
    return (
        <div className="contactBar">
            <div className="contactItem">mitchdor48@gmail.com</div>
                <div className="contactItem">
                    <a href="https://www.linkedin.com/in/mitchelldorward/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/LinkedIn.png"></img>
                    </a>    
                </div>
                <div className="contactItem">
                    <a href="https://github.com/Mitch-Dor" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/Github.png" ></img>
                    </a>
                </div>
            <div className="contactItem">610-227-5052</div>
        </div>
    )
}