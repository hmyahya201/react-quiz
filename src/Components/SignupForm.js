import React, { useState } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import Checkbox from './Checkbox';
import Button from './Button';
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confarmPassword, setConfarmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const [error, setError] = useState();
    const [loading, setLoadign] = useState();

    const {signup} = useAuth();
    const navigate = useNavigate();
    

    async function handleSubmit(e){
        e.preventDefault();
        if (password !== confarmPassword){
            return setError("Password did not mach")
        }

        try{
            setError("");
            setLoadign(true);
           await signup(email, password, username);
           navigate("/");
        }catch(err){
            console.log(err);
            setLoadign(false);
            setError("Sorry faild to create an acount !");
        }
    }
    return (
     <Form style={{height: "500px"}} onSubmit= {handleSubmit}>
        <TextInput 
        type="text" 
        placeholder="Enter name"
        icon="person" 
        required
        value= {username}
        onChange ={(e) => setUsername(e.target.value)}
        />

        <TextInput
        type="email"
        placeholder="Enter email" 
        icon="alternate_email" 
        required value= {email} 
        onChange = {(e)=>setEmail(e.target.value)} 
        />

        <TextInput 
        type="password" 
        placeholder="Enter password" 
        icon="lock" 
        required 
        value= {password} 
        onChange = {(e)=> setPassword(e.target.value)} 
        />

        <TextInput 
        type="password" 
        placeholder="Confarm password" 
        icon="lock_clock" 
        required 
        value = {confarmPassword} 
        onChange = {(e) => setConfarmPassword(e.target.value)} 
        />

        <Checkbox 
        text="I agree to the Terms &amp; Conditions" 
        required 
        value = {agree} 
        onChange = {(e) => setAgree(e.target.value)} 
        />

        <Button disabled ={loading} type= "submit">
            <span>Submit now</span>
        </Button>

        {error && <p className='error'>{error}</p>}
        <div className ="info">
        Already have an account? <Link to="/login">Login</Link> instead.
        </div>
    </Form>
    );
};

export default SignupForm;