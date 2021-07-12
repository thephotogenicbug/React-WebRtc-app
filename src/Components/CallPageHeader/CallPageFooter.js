import React from 'react';
import './CallPageFooter.scss'
import Interview from './Interview';
const  CallPageFooter = ({
    isAudio,
    toogleAudio,
    disconnectCall
}) =>{

    return(
       <>

<div className="footer-item">
            <div className="center-item">
                <div className={`icon-block ${!isAudio ? "red-bg" : null}`} 
                onClick={() => toogleAudio(!isAudio)}>
                <i className={ isAudio ?"fas fa-microphone icon" : "fas fa-microphone-slash" }></i>
                </div>
                <div className="icon-block" onClick={disconnectCall}>
                <i className="fas fa-phone-alt icon red"></i>
                </div>
                <div className="icon-block">
                <i className="fas fa-video icon"></i>
                </div>
            </div>
            
        </div>
       
       </>
    )
}
export default CallPageFooter