import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroImg1 from '../../assets/images/hero-img1.jpg'
import { Link } from 'react-router-dom';
import SinglePage from './../SinglePage';
import useFetchElec from './../../Helper/useFetchElec';
import { CartState } from '../../Helper/Context';

export default function Home() {


    const [topProducts, setTopProducts] = useState([])
    const { state } = CartState()
    console.log(state)

    const getTopProducts = async () => {
        const temp = await fetch(`https://fakestoreapi.com/products?limit=5`)
        .then(res => res.json())
        console.log(temp)
        setTopProducts(temp)
    }

    // const getElectronics = async () => {
    //   const temp = await fetch(`https://fakestoreapi.com/products/category/electronics?limit=5`)
    //   .then(res => res.json())
    //   setElectronics(temp)
    // }

    useEffect(() => {
        getTopProducts()
        // getElectronics()
    }, [])
        
    const {
      state: {cart}, 
      dispatch,
    } = CartState()
    

  return (
    <>
        {/* <Navbar /> */}
        <div class="hero min-h-screen bg-hero-pattern">
            <div class="hero-content text-center flex flex-col lg:flex-row">
                {/* <img src={HeroImg1} className=" lg:w-3/5" alt="" /> */}
                <div class="max-w-md p-10 h-full w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-100">
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/products' class="btn btn-primary">Browse Store</Link>
                </div>
            </div>
        </div>
        <div><h2 className='text-3xl font-bold text-center m-10'>Top Electronics</h2></div>
        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center">
            {topProducts.map((product) => (
              
                <div className="card flex flex-col rounded-lg shadow-lg m-10 p-5 bg-base-100">
                  <Link to={`/singleProduct/${product.id}`}>
                    <div className='w-full'>
                      <img src={product.image} className='h-28 object-contain w-full' alt="" />
                    </div>
                    <div className='w-full'>
                      <h1 className='text-lg font-bold text-left pt-2'>{product.title}</h1>
                      <p className='text-left mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, earum.</p>
                    </div>
                  </Link>
                  <div className='mt-4'>
                  {
                    cart.some(p => p.id === product.id) ? (
                      <button className='btn btn-error' onClick={() => dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: product
                      })}>Remove from cart</button>
                    ):(
                      <button className='btn btn-success' onClick={() => dispatch({
                        type: 'ADD_TO_CART',
                        payload: product
                      })}>Add to cart</button>
                    )
                  }
                  </div>
                </div>
            ))}
        </div>
    </>
  )
}


// <div class="card w-full bg-base-100 shadow-xl m-4">
//               //   <div className='object-contain h-64'><img src={product.image} className="rounded-xl shadow-md" alt="Shoes" /></div>
//               //   <div class="card-body">
//               //     <h2 class="card-title text-left">{product.title}</h2>
//               //     <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, non!</p>
//               //     <div class="card-actions justify-end">
//               //       <button class="btn btn-primary">Add to Cart</button>
//               //     </div>
//               //   </div>
//               // </div>