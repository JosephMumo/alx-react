import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";
import closeIcon from './close.png';

const Notifications = () => {
    return (
        <div className="Notifications">
            <button 
                style={{position: "absolute", right: "1rem", top: "1rem", cursor: "pointer", background: "none", border: "none"}}
                 aria-label="close"
                onClick={console.log("Close button has been clicked")}
            >
                <img src={closeIcon} alt="closeIcon" style={{width: '1rem', height: '1rem'}}/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
            <li data="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}
export default Notifications