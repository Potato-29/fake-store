import { data } from 'autoprefixer'
import React from 'react'

export default function SignUpPage() {


    const handleSubmit = e => {
        e.preventDefault()
        console.log("woorks")
        const data = { 
            first_name: ''
            // last_name: lastName,
            // email: email,
            // password: password,
        }
        console.log(data)
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center p-8 m-8 rounded-lg'>
            <h3 className='text-3xl m-5'>SignUp</h3>
            <div className='form-group w-full'>
                <label htmlFor="">First name</label>
                <input type="text" className='w-full h-12 rounded-lg border border-cyan-600 form-control' placeholder='firstname' 
                    onChange={e => data.first_name = e.target.value}
                />
            </div>
            {/* <div className='form-group w-full'>
                <label htmlFor="">Last name</label>
                <input type="text" className='w-full h-12 rounded-lg border border-cyan-600 form-control' placeholder='lastname' 
                    onChange={e => lastName = e.target.value}
                />
            </div>
            <div className='form-group w-full'>
                <label htmlFor="">Email</label>
                <input type="email" className='w-full h-12 rounded-lg border border-cyan-600 form-control' placeholder='email' 
                    onChange={e => email = e.target.value}
                />
            </div>
            <div className='form-group w-full'>
                <label htmlFor="">Password</label>
                <input type="password" className='w-full h-12 rounded-lg border border-cyan-600 form-control' placeholder='password' 
                    onChange={e => password = e.target.value}
                />
            </div> */}
            <button className='btn btn-primary btn-block m-5'>Sign Up</button>
        </form>
    </>

  )
}
