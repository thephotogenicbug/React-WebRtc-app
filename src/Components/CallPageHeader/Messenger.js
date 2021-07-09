import React from 'react';
import './Messenger.scss'
const Messenger = () =>{

    return(
        <div className="messenger-container">
            <div className="messenger-header">
                <h3>Meeting Details</h3>
                <i className="fas fa-times icon"></i>
            </div>
            <div className="messenger-header-tabs">
                <div className="tab">
                <i className="fas fa-user-friends icon"></i>
                <p>People (1)</p>
                </div>
                <div className="tab active">
                <i className="far fa-comment-alt icon"></i>
                <p>Chat</p>
                </div>
            </div>
            <div className="chat-section">
                <div className="chat-block">
                    <div className="sender">
                        you <small>11.00 AM</small>
                    </div>
                    <p className="msg">
                        Here coms the actual message
                    </p>
                </div>
            </div>
            <div className="send-msg-section">
                <input placeholder="Send message to everyone"/>
                <i className="far fa-paper-plane icon"></i>
            </div>
        </div>
    )

}
export default Messenger