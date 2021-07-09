import React from 'react';
import './CallPageFooter.scss'
const  CallPageFooter = () =>{

    return(
        <div className="footer-item">
            <div className="left-item">
                <div className="icon-block">
                    Meeting details
                    <i className="fas fa-angle-up icon"></i>
                </div>
            </div>
            <div className="center-item">
                <div className="icon-block">
                <i className="fas fa-microphone icon"></i>
                </div>
                <div className="icon-block">
                <i className="fas fa-phone-alt icon red"></i>
                </div>
                <div className="icon-block">
                <i className="fas fa-video icon"></i>
                </div>
            </div>
            <div className="right-item">
                <div className="icon-block">
                <i className="fas fa-closed-captioning icon red"></i>
                <p className="title">Turn on caption</p>
                </div>
                <div className="icon-block">
                <i className="fas fa-desktop icon red"></i>
                <p className="title">Present now </p>
                </div>
            </div>
        </div>
    )
}
export default CallPageFooter