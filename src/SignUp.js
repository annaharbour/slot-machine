import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
export const SignUp = () => {
    
    const [errorMessage, setErrorMessage] = useState(''); 
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        username: "",
        password: ""
    })
    const {email, username, password} = inputValue;
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name] : value
        });
    }
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("https://spooky-slot-machine.onrender.com/signup", 
            {
                ...inputValue
            },
            {withCredentials: true}
            );
            const {success, message} = data;
            if(success){
            setTimeout(() => {
                navigate('/')
            }, 1000)
            } else {
                setErrorMessage(message);
            }
        }
        catch(err){
            console.error(err)
        }
    }

  return (
    <div className='section'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <input type='email'
                   name="email"
                   value={email}
                   onChange={handleChange}
                   placeholder='Email'
            />
            <input type="username"
                   name="username"
                   value={username}
                   onChange={handleChange}
                   placeholder='Username'
            />
            <input type="password"
                   name="password"
                   value={password}
                   onChange={handleChange}
                   placeholder="Password"
            />
            <button className="signin-signup" type="submit">Submit</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <span>Already have an account? <Link to="/signin">Sign in!</Link></span>
    </div>
  )
}