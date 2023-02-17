import React, { useRef, useState } from 'react';
import classes from '../Styles/ProgressBar.module.css';
import Button from './Button';

const ProgressBar = ({next, prev, progress, submit}) => {
  const [tooltip, setTooltip] = useState();
  const toolTipRef = useRef();
  const toggleTooltip = ()=>{
    if(tooltip){
      setTooltip(false);
      toolTipRef.current.style.display = "none";
    }else{
      setTooltip(true)
      toolTipRef.current.style.display = "block"
      toolTipRef.current.style.left = `calc(${progress}% - 65px)`;
    }
  }
    return (
        <div className={classes.progressBar}>
        <div className={classes.backButton} onClick={prev}>
          <span className="material-icons-outlined"> arrow_back </span>
        </div>
        <div className={classes.rangeArea}>
          <div className={classes.tooltip} ref={toolTipRef}>{progress}% Complete!</div>
          <div className={classes.rangeBody}>
            <div className={classes.progress} 
            style={{width: `${progress}%`}}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
            >
            </div>
          </div>
        </div>
            <Button className ={classes.next} onClick={progress === 100? submit:next}>
            <span>{progress ===100? "Submit": "Next Question"}</span>
            <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
      </div>
    );
};

export default ProgressBar;