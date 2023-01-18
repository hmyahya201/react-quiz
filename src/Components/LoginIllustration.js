import React from 'react';
import classes from '../Styles/Illustration.module.css';
import Loginimg from '../assets/images/login.svg';

const LoginIllustration = () => {
    return (
        <div class={classes.illustration}>
            <img src={Loginimg} alt="Login" />
        </div>
    );
};

export default LoginIllustration;