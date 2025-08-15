import { useRef, useEffect } from "react";
import { PiTagChevronFill } from "react-icons/pi";
import { LiaChevronUpSolid } from "react-icons/lia";
import { LiaChevronDownSolid } from "react-icons/lia";

import "../css/listing.css";

export default function Listing({ listing, title, color }) {
    const listRef = useRef(null);

    const moveListUp = () => {
        if (listRef.current) {
        listRef.current.scrollBy({ top: -60, behavior: "smooth" });
        }
    };

    const moveListDown = () => {
        if (listRef.current) {
        listRef.current.scrollBy({ top: 60, behavior: "smooth" });
        }
    };

    return (
        <div className="listContainer">
            <LiaChevronUpSolid className="listUp" onClick={() => {moveListUp()}} />
            <LiaChevronDownSolid className="listDown" onClick={() => {moveListDown()}} />
            <div className="listTitle" style={{backgroundColor: color}} >{title}</div>
            <div className="listList" ref={listRef} >
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