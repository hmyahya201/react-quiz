import React from 'react';
import classes from '../Styles/Video.module.css';
// import image from '../assets/images/3.jpg';

const Video = ({title, noq, id}) => {
    return (
           <div className={classes.video}>
              <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
              <p>{title}</p>
              <div className={classes.qmeta}>
                <p>{noq} Questions</p>
                <p>Total Points : {noq*5}</p>
              </div>
            </div>
    );
};

export default Video;