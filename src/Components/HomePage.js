import React from 'react';
import './HomePage.scss'
import Header from './Header';
import HeroImg from './hero-img.svg'
const HomePage = () =>{

    return(
        <div className="home-page">
        <Header />
        <div className="body">
          <div className="left-side">
            <div className="content">
              <h2>Premium video meetings. Now free for everyone.</h2>
              <p>
              WebRtc Beta Built using React and Socket.io
              </p>
              <div className="action-btn">
                <button className="btn primary" >
                 <i class="fas fa-video icon-block"></i> New Meeting
                </button>
                <div className="input-block">
                  <div className="input-section">
                  <i class="far fa-keyboard icon-block"></i><input placeholder="Enter a code or link" />
                  </div>
                  <button className="btn no-bg">Join</button>
                </div>
              </div>
            </div>
            <div className="help-text">
              <a href="">Learn more</a> about WebRtc
            </div>
          </div>
          <div className="right-side">
            <div className="content">
              <img src={HeroImg}/>
            </div>
          </div>
        </div>
      </div>
    )
}
export default HomePage