import React, { useRef, useState } from 'react';
import classes from '../Styles/MiniPlayer.module.css'
// import Image from '../assets/images/3.jpg'
import ReactPlayer from 'react-player';

const MiniPlayer = ({id, title}) => {
  const [status, setStatus] = useState(false);
  const buttonRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  console.log(videoUrl)
  const toggleMiniPlayer = ()=>{
    if(!status){
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true)
    }else{
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false)
    }
  }
    return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} ref={buttonRef} onClick={toggleMiniPlayer}>
        <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
        <span className={`material-icons-outlined ${classes.close}`} onCanPlay={toggleMiniPlayer}> close </span>
        {/* <img src={Image} alt="" /> */}
        <ReactPlayer 
        // className={classes.player}
         url={videoUrl} 
         width="300px" height="168px"
          playing = {status} 
          controls/>
        <p>{title}</p>
      </div>
    );
};

export default MiniPlayer;
