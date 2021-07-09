import React from 'react';
import './CallPageFooter.scss'
import Interview from './interview';
const  CallPageFooter = () =>{

    return(
      <>
        <div className="footer-item">
        <div className="center-item">
            <div className="icon-block">
            <i class="fas fa-expand-arrows-alt icon"></i>
            </div>
            <div className="icon-block">
            <i className="fas fa-video icon"></i>
            </div>
            <div className="icon-block">
            <i className="fas fa-phone-alt icon red"></i>
            </div>
           
            <div className="icon-block">
            <i className="fas fa-microphone icon"></i>
            </div>
            <div className="icon-block">
            <i className="fas fa-cog icon"></i>
            </div>
        </div>
       
    </div>
    <Interview/>
      </>
      
    )
}
export default CallPageFooter