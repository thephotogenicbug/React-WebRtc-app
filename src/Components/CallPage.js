import React from 'react';
import './CallPage.scss'
import CallPageHeader from './CallPageHeader/CallPageHeader';
import CallPageFooter from './CallPageHeader/CallPageFooter';
import MeetingInfo from './CallPageHeader/MeetingInfo';
import Messenger from './CallPageHeader/Messenger';
const CallPage = () =>{

    return(
       <div className="callpage-container">
           <video className="video-container" src="" controls="false" autoplay="autoplay"></video>

           <CallPageHeader/>
            <MeetingInfo/> 
           <CallPageFooter/>
           <Messenger/> 
       </div>
    )
}
export default CallPage