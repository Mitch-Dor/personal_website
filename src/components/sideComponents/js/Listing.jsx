import { PiTagChevronFill } from "react-icons/pi";

import "../css/listing.css";

export default function Listing({ listing, title, color }) {

    return (
        <div className="listContainer">
            <div className="listTitle" style={{backgroundColor: color}} >{title}</div>
            <div className="listList" >
            {listing.map((item, index) => {
                return (
                <div className="listItem" key={index}>
                    <PiTagChevronFill className="listItemTab" style={{color: color}} />
                    <div className="listItemText">
                    {item}
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )

}