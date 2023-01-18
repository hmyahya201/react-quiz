import {React, useState} from 'react';
import Form from './Form';
import TextInput from './TextInput';
import Button from './Button';
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';
const LoginForm = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoadign] = useState();

    const {login} = useAuth();
    const navigate = useNavigate();
    

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            setError("");
            setLoadign(true);
           await login(email, password);
           navigate("/");
        }catch(err){
            console.log(err);
            setLoadign(false);
            setError("Sorry faild to login!");
        }
    }

    return (
        <div>
        <Form style={{height: '320px'}} onSubmit= {handleSubmit}>
            <TextInput type="email" placeholder="Enter email" icon="alternate_email" value= {email}
        onChange ={(e) => setEmail(e.target.value)} />
            <TextInput type="password" placeholder="Enter password" icon="lock" value= {password}
        onChange ={(e) => setPassword(e.target.value)} />

            <Button disaboled = {loading} type="submit" ><span>Submit now</span></Button>
            {error && <p className='error'>{error}</p>}
            <div className="info">Don't have an account? <Link to="/signup.html">Signup</Link> instead.</div>
        </Form>
        </div>
    );
};

export default LoginForm;