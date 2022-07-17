import { data } from 'autoprefixer'
import React from 'react'
import { useRef, useState } from 'react'
import { useAuth } from '../Helper/AuthContext'
import {Link, useNavigate} from 'react-router-dom'

export default function SignUpPage() {


    const FnameRef = useRef()
    const LnameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, } = useAuth()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("password doesn't match")
        }
        

        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch{
            setError("failed to create account")
        }
        setLoading(false)

        // navigate('/login')
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit}  className='flex flex-col justify-center items-center p-8 m-8 rounded-lg'>
            <h3 className='text-3xl m-5'>SignUp</h3>
            
            {error && <div className='alert-error p-3 rounded-lg'>{error}</div>}
            <div className=''>
                {/* <div className='form-group w-full'>
                    <label htmlFor="">First name</label>
                    <input type="text" ref={FnameRef} className='w-full h-12 rounded-lg border lg:w-full border-cyan-600 form-control' placeholder='firstname' 
                        
                    />
                </div>
                <div className='form-group w-full'>
                    <label htmlFor="">Last name</label>
                    <input type="text" ref={LnameRef} className='w-full h-12 rounded-lg border lg:w-full border-cyan-600 form-control' placeholder='lastname' 
                    />
                </div> */}
                <div className='form-group my-5 w-full'>
                    
                    <input type="email" ref={emailRef} className='w-full p-3 h-12 rounded-lg border lg:w-full border-cyan-600 form-control' placeholder='Email' 
                    />
                </div>
                <div className='form-group my-5 w-full'>
                    
                    <input type="password" ref={passwordRef} className='w-full p-3 h-12 rounded-lg border lg:w-full border-cyan-600 form-control' placeholder='Password' 
                    />
                </div>
                <div className='form-group my-5 w-full'>
                    
                    <input type="password" ref={passwordConfirmRef} className='w-full p-3 h-12 rounded-lg border lg:w-full border-cyan-600 form-control' placeholder='Confirm password' 
                    />
                </div>
                <button className='btn btn-primary btn-block m-5 w-96' disabled={loading}>Sign Up</button>
            </div>
            <div>
                Already Have an account? <Link className='text-blue-500' to="/" >Login</Link>
            </div>
        </form>
    </>

  )
}
