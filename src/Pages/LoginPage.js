import { data } from 'autoprefixer'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function LoginPage() {

    let navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [goToHome, setGoToHome] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    

    const handleLogin = () => {
        if (!validateEmail(email)) {
            setError('Invalid Email');
            console.log(error)
        }
        if (password.length < 8) {
            setError('Password must be at least 8 chars long');
            console.log(error)
            
        }
        if (!error) {
            // No errors.
            navigate('/home')
        }
    }

    

   return (
    <>
        <form action=""  className='flex flex-col justify-center items-center p-8 m-8 rounded-lg'>
            <h3 className='text-3xl m-5'>Login</h3>
            <div className='form-group w-full'>
                <label htmlFor="">Email</label>
                <input type="email" value={email} className='w-full h-12 rounded-lg border border-cyan-600 form-control' placeholder='email' 
                    onChange={handleEmail}
                />
            </div>
            <div className='form-group w-full'>
                <label htmlFor="">password</label>
                <input type="password" value={password} className='w-full h-12 rounded-lg border border-cyan-600 form-control' placeholder='password' 
                    onChange={handlePassword}
                />
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>}
            
            
            <button className='btn btn-primary btn-block m-5' onClick={handleLogin}>Login</button>
        </form>
    </>

  )
}
