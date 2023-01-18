import React from 'react';
import classes from '../Styles/Summary.module.css';
import success from '../assets/images/success.png';

const Summary = () => {
    return (
        <div className={classes.summary}>
          <div className={classes.point}>
            {/* <!-- progress bar will be placed here --> */}
            <p className={classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={classes.badge}>
            <img src={success} alt="Success" />
          </div>
        </div>
    );
};

export default Summary;