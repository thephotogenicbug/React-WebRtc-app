import React,{useState, useEffect, useReducer} from 'react';
import { useParams, useHistory } from 'react-router';
import CallPageHeader from './CallPageHeader/CallPageHeader';
import CallPageFooter from './CallPageHeader/CallPageFooter';
import MeetingInfo from './CallPageHeader/MeetingInfo';
import Messenger from './CallPageHeader/Messenger';
import MessageListReducer from '../reducer/MessageListReducer';
import Peer from 'simple-peer';
import {getRequest, postRequest } from './CallPageHeader/utils/apiRequests';
import {BASE_URL, GET_CALL_ID, SAVE_CALL_ID} from './CallPageHeader/utils/apiEndpoints';
import io from 'socket.io-client';
import './CallPage.scss'


let peer = null;
const socket = io.connect("https://webrtc-heroku-server.herokuapp.com/");
const initialState = [];

const CallPage = () => {
  const history = useHistory();
  let { id } = useParams();
  const isAdmin = window.location.hash == "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;
  let alertTimeout = null;

  const [messageList, messageListReducer] = useReducer(
    MessageListReducer,
    initialState
  );

  const [streamObj, setStreamObj] = useState();
  const [screenCastStream, setScreenCastStream] = useState();
  const [meetInfoPopup, setMeetInfoPopup] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [isMessenger, setIsMessenger] = useState(false);
  const [messageAlert, setMessageAlert] = useState({});
  const [isAudio, setIsAudio] = useState(true);

  useEffect(() => {
    if (isAdmin) {
      setMeetInfoPopup(true);
    }
    initWebRTC();
    socket.on("code", (data) => {
      if (data.url === url) {
        peer.signal(data.code);
      }
    });
  }, []);

  const getRecieverCode = async () => {
    const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
    if (response.code) {
      peer.signal(response.code);
    }
  };

  const initWebRTC = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setStreamObj(stream);
        peer = new Peer({
          initiator: isAdmin,
          trickle: false,
          stream: stream,
        });

        if (!isAdmin) {
          getRecieverCode();
        }

        peer.on("signal", async (data) => {
          if (isAdmin) {
            let payload = {
              id,
              signalData: data,
            };
            await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
          } else {
            socket.emit("code", { code: data, url }, (cbData) => {
              console.log("code sent");
            });

          }
        });

        peer.on("connect", () => {
          // wait for 'connect' event before using the data channel
        });

        peer.on("data", (data) => {
          clearTimeout(alertTimeout);
          messageListReducer({
            type: "addMessage",
            payload: {
              user: "other",
              msg: data.toString(),
              time: Date.now(),
            },
          });

          setMessageAlert({
            alert: true,
            isPopup: true,
            payload: {
              user: "other",
              msg: data.toString(),
            },
          });

          alertTimeout = setTimeout(() => {
            setMessageAlert({
              ...messageAlert,
              isPopup: false,
              payload: {},
            });
          }, 10000);
        });

        peer.on("stream", (stream) => {
          // got remote video stream, now let's show it in a video tag
          let video = document.querySelector("video");

          if ("srcObject" in video) {
            video.srcObject = stream;
          } else {
            video.src = window.URL.createObjectURL(stream); // for older browsers
          }

          video.play();
        });

      })
      .catch(() => { 
        console.log("error")
      });
  };

  // screenshare function
  const screenShare = () => {
    navigator.mediaDevices
      .getDisplayMedia({ cursor: true })
      .then((screenStream) => {
        peer.replaceTrack(
          streamObj.getVideoTracks()[0],
          screenStream.getVideoTracks()[0],
          streamObj
        );
        setScreenCastStream(screenStream);
        screenStream.getTracks()[0].onended = () => {
          peer.replaceTrack(
            screenStream.getVideoTracks()[0],
            streamObj.getVideoTracks()[0],
            streamObj
          );
        };
        setIsPresenting(true);
      });
  };

  const stopScreenShare = () => {
    screenCastStream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    peer.replaceTrack(
      screenCastStream.getVideoTracks()[0],
      streamObj.getVideoTracks()[0],
      streamObj
    );
    setIsPresenting(false);
  };

   const toogleAudio = (value) =>{
     streamObj.getAudioTracks()[0].enabled = value;
     setIsAudio(value);
   }

   const disconnectCall = () =>{
     peer.destroy();
     history.push("/");
     window.location.reload();
   }
    return(
       <div className="callpage-container">
           <video className="video-container" controls autoplay style={{pointerEvents:'none'}}></video>

           <CallPageHeader/>
           {(isAdmin && meetInfoPopup) && (
            <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url}/> 
           )}
           <CallPageFooter 
           isPresenting={isPresenting}
           stopScreenShare={stopScreenShare}
           screenShare={screenShare} 
           isAudio={isAudio}
           toogleAudio={toogleAudio}
           disconnectCall={disconnectCall}
           />
           {/* <Messenger/>  */}
       </div>
    )
}
export default CallPage