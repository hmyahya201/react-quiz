import React from 'react';
import classes from '../Styles/Illustration.module.css';
// import signimg from '../assets/images/signup.svg';

const Illustration = ({children}) => {
    return (
        <div className={classes.illustration}>
            {/* <img src={signimg}alt="Signup" /> */}
            {children}
        </div>
    );
};

export default Illustration;