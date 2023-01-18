import React from 'react';
import Questions from '../Components/Questions';
import classes from '../Styles/Analysis.module.css';

const Analysis = () => {
    return (
        <>
        <div className={classes.analysis}>
          <h1>Question Analysis</h1>
          <h4>You answerd 5 out of 10 questions correctly</h4>
       </div>
       <Questions />
       </>
    );
};

export default Analysis;