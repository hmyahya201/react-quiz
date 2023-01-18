import React from 'react';
import classes from '../Styles/Form.module.css';

const Form = ({children, className, ...rest}) => {
    return (
        <form className={`${className} ${classes.form}`} action="#" {...rest} >
            {children}   
        </form>
    );
};

export default Form;