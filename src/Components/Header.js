import React from 'react'
import './Header.scss'
import Logo from './zoom.svg'
const Header = () =>{

    return(
        <div className="header">
            <div className="logo">
            <img src={Logo} height='50px'/>
            <span className="help-text">
            RadeonWebRtc
            </span>
            </div>
            <div className="action-btn">
            <i className="fas fa-question-circle icon-block"></i>
            <i className="fas fa-exclamation-circle icon-block"></i>
            <i className="fas fa-cog icon-block"></i>
            </div>
        </div>
    )
}
export default Header;