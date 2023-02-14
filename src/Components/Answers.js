import React from 'react';
import Checkbox from './Checkbox';
import classes from '../Styles/Answers.module.css';

const Answers = ({options=[], handleChange}) => {
    return (

      <div className={classes.answers}>
        {options.map((option, index)=>(
          <Checkbox key={index} className={classes.answer} text={option.title} value={index} checked={option.checked} 
          onChange={(e)=>handleChange(e, index)}/>
        ))}
      </div>
    );
};

export default Answers;