import { data } from 'autoprefixer'
import axios from 'axios';
import React from 'react'
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Helper/AuthContext';



export default function LoginPage() {

    let navigate = useNavigate()

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const emailRef = useRef()
    const passwordRef = useRef()
    const [goToHome, setGoToHome] = useState(false);
    const { login } = useAuth()
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }

    // const validateEmail = () => {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }
    
    

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/home')
            
        } catch{
            setError("failed to log in")
        }
        setLoading(false)

        
    }

    

   return (
    <>
        <form action="" onSubmit={handleSubmit}  className='flex flex-col justify-center items-center p-8 m-8 rounded-lg'>
            <h3 className='text-3xl m-5'>Login</h3>
            {error && <div className='alert-error p-3 rounded-lg'>{error}</div>}
            <div>
                <div className='form-group my-5 w-full'>
                    
                    <input type="email" ref={emailRef} className='w-full p-3 h-12 rounded-lg border border-cyan-600 form-control' placeholder='Email'/>
                </div>
                <div className='form-group my-5 w-full'>
                    
                    <input type="password" ref={passwordRef} className='w-full p-3 h-12 rounded-lg border border-cyan-600 form-control' placeholder='Password' />
                    
                </div>                
                <button className='btn btn-primary btn-block m-5 w-96' disabled={loading}>Login</button>
            </div>
            <div>
                Need an account? <Link className='text-blue-500' to="/signup" >Signup</Link>
            </div>
        </form>
    </>

  )
}
