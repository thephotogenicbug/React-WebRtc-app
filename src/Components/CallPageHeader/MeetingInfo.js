import React from 'react';
import './MeetingInfo.scss'



const MeetingInfo = ({setMeetInfoPopup, url}) =>{


    return(
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h3>Your meeting's ready</h3>
                <i className="fas fa-times icon" onClick={() =>{
                    setMeetInfoPopup(false);
                }}>
                </i>
            </div>
            <button className="add-people-btn">
            <i className="fas fa-user icon"></i>
                Add Others
                </button>
                <p className="info-text">
                     share this meeting link with others you want in the meeting
                </p>
                <div className="meet-link">
                    <span>{url}</span>
                    <i className="far fa-clipboard icon" onClick={() => navigator.clipboard.writeText(url)}></i>
                </div>
                <div className="permission-text">
                <i className="fas fa-shield-alt icon"></i>
                <p className="small-text">
                    people who use this meeting link must get your permission before they can join.
                </p>
                </div>
                <p className="small-text">
                    Joined as test@gmail.com
                </p>
        </div>
    )
}
export default MeetingInfo