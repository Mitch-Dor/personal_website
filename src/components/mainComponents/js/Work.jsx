import { DA_TASKS, MONROE_ACHIEVEMENTS } from '../../constants/constants';

import AnimatedBackground from '../../sideComponents/js/AnimatedBackgrounds';
import WaveSeparatorTop from '../../sideComponents/js/WaveSeparatorTop';
import WaveSeparatorBottom from '../../sideComponents/js/WaveSeparatorBottom';
import Listing from '../../sideComponents/js/Listing';
import ContactBar from '../../sideComponents/js/ContactBar';

import '../css/workExperience.css';

function Work() {
    return (
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
    )
}

export default Work;