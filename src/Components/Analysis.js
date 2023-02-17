import React from 'react';
import Questions from '../Components/Questions';
import classes from '../Styles/Analysis.module.css';

const Analysis = ({answers}) => {
    return (
        <>
        <div className={classes.analysis}>
          <h1>Question Analysis</h1>
       </div>
       <Questions answers={answers}/>
       </>
    );
};

export default Analysis;