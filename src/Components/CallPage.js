import React from 'react';
import './CallPage.scss'
import CallPageHeader from './CallPageHeader/CallPageHeader';
import CallPageFooter from './CallPageHeader/CallPageFooter';
import MeetingInfo from './CallPageHeader/MeetingInfo';
import Messenger from './CallPageHeader/Messenger';
const CallPage = () =>{

    return(
       <div className="callpage-container">
           <video className="video-container" src="" controls></video>

           <CallPageHeader/>
          { /*<CallPageFooter/>
           <MeetingInfo/>
          <Messenger/> */}
       </div>
    )
}
export default CallPage