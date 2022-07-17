import React from 'react'
import avatar from '../assets/images/user.png'
import { useAuth } from '../Helper/AuthContext'


export default function Profile() {


    const { currentUser } = useAuth()

  return (
    <>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-center m-5'>
                <img src={avatar} className="h-full w-1/2" alt="" />
            </div>
            <div className='shadow-xl p-10 rounded-md text-3xl'>
                <p className='m-2'>Name: Prayas</p>
                <p className='m-2'>Email: {currentUser.email}</p>
                <p className='m-2'>City: Adipur</p>
                <p className='m-2'>Age: 20</p>
            </div>
        </div>
    </>
  )
}
