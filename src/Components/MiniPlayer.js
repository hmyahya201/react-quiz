import React from 'react';
import classes from '../Styles/MiniPlayer.module.css'
import Image from '../assets/images/3.jpg'

const MiniPlayer = () => {
    return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
        <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
        <span className={`material-icons-outlined ${classes.close}`}> close </span>
        <img src={Image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    );
};

export default MiniPlayer;
