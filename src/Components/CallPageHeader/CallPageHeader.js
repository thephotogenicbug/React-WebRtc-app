import React from 'react'
import './CallPageHeader.scss'
const CallPageHeader = () =>{

    return(
      <div className="frame-header">
          <div className="header-items icon-block">
          <i className="fas fa-user-friends icon"></i>
          </div>
          <div className="header-items icon-block">
          <i className="fas fa-comment-alt icon"></i>
          <span className="alert-circle-icon"></span>
          </div>
          <div className="header-items date-block">
              11.00 AM
          </div>
          <div className="header-items icon-block">
          <i className="far fa-user-circle icon"></i>
          </div>
      </div>
    )
}
export default CallPageHeader

