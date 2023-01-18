import React from 'react';
import Illustration from '../Illustration';
import signimg from '../../assets/images/login.svg';
import LoginForm from '../LoginForm';
const Login = () => {
    return (
       <>
       <h1>Login to your account</h1>
       <div className="column">
        {/* <LoginIllustration /> */}
        <Illustration>
            <img src={signimg}alt="Signup" /> 
        </Illustration>
        <LoginForm/>
       </div>
       </>
    );
};

export default Login;