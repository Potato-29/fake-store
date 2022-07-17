import React from 'react'
import avatar from '../../assets/images/user.png'
import { useMediaQuery } from 'react-responsive'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext, CartState } from '../../Helper/Context'
import { useState } from 'react'
import { useAuth } from '../../Helper/AuthContext'


export default function Navbar() {


    // const {cartItems, setCartItems} = useContext(CartContext)
    const [error, setError] = useState()
    const navigate = useNavigate()

    const {logout} = useAuth()

    async function handleLogout () {
        setError("")

        try{
            await logout()
            navigate('/')
        } catch{
            setError("logout failed")
        }
    }

    const {
        state: {cart},
    } = CartState()

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


  return (
    <>
        <div class="navbar sticky top-0 bg-base-300 z-10 shadow-2xl">
            <div class="flex-1">
                <Link to='/home' class="btn btn-ghost normal-case text-xl">Store</Link>
            </div>
            <div class="flex-none">    
                {isBigScreen && <div>
                    <Link to='/products' className='p-4 hover:bg-base-300'>Products</Link>
                        <Link to='/home' href="" className='p-4 hover:bg-base-300'>Home</Link>
                    </div>}
                    {isDesktopOrLaptop && <div> 
                        <Link to="/products" className='p-4 hover:bg-base-300'>Products</Link>
                        <Link to="/home" className='p-4 hover:bg-base-300'>Home</Link>
                        </div>}
                {isTabletOrMobile && <div className='dropdown dropdown-end'>
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </div>
                        </label>
                        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <Link to="/products" className='p-4 hover:bg-base-300'>Products</Link>
                            <Link to="/home" className='p-4 hover:bg-base-300'>Home</Link>
                        </div>
                        
                    </div>}
                <div class="dropdown  dropdown-end ">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span class="badge badge-sm indicator-item">{cart.length}</span>
                        </div>
                    </label>
                    <div tabindex="0" class="mt-3 card  card-compact dropdown-content w-52 bg-base-100 shadow overflow-y-scroll">
                        <div class="card-body ">
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((items) => (
                                        <span className='flex items-center ' key={items.id}>
                                            <img src={items.image} className='rounded-full h-12 w-12 object-cover' alt="" />
                                            <div className='flex flex-1 px-2 flex-col'>
                                                <span className='text-md'>{items.title}</span>
                                                <span>{items.price}</span>
                                            </div>
                                        </span>
                                    ))}
                                    
                                </>
                            ):(
                                <span class="font-bold text-lg">{cart.length} Items</span>
                            )}
                            
                            
                            <span class="text-info"></span>
                            <div class="card-actions">
                                <Link to='/cart' class="btn btn-primary btn-block">View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                        <img src={avatar} />
                        </div>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <Link to='/profile' class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </Link>
                        </li>
                        
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
