import React from 'react'
import Navbar from './../Components/Navbar/Navbar';
import useFetchElec from '../Helper/useFetchElec';
import useFetchCloth from '../Helper/useFetchCloth';
import { Link } from 'react-router-dom';
import useFetchWomens from '../Helper/useFetchWomens';
import useFetchJewelery from '../Helper/useFetchJewelery';
import { CartContext } from '../Helper/Context';
import { useContext } from 'react';
import { CartState } from '../Helper/Context';

export default function ProductsPage() {


    // const {cartItems, setCartItems} = useContext(CartContext)


  const {electronics, loading, error} = useFetchElec(`https://fakestoreapi.com/products/category/electronics?limit=5`)
  const {menClothes} = useFetchCloth(`https://fakestoreapi.com/products/category/men's clothing?limit=5`)
  const {womenClothes} = useFetchWomens(`https://fakestoreapi.com/products/category/women's clothing?limit=5`)
  const {jewelery} = useFetchJewelery(`https://fakestoreapi.com/products/category/jewelery?limit=5`)

  if(loading) return <div className='h-screen flex flex-row justify-center items-center'><h1 className='text-3xl font-sans font-bold'>Loading...</h1></div>
  if(error) console.log(error)

  const getId = (item) => {
    const id = item.id
    console.log(id)
    return id
  }


  const {
    state: {cart}, 
    dispatch,
  } = CartState()
  

  return (
    <>
        {/* <Navbar/> */}
        <div className='text-2xl px-4 py-2 font-bold bg-accent text-center mx-10 my-5 rounded-full'>Electronics</div>
        <div className='flex flex-col md:flex-col lg:flex-row'>
            {electronics?.map((item) => (
                <div className="card flex flex-col rounded-lg shadow-lg m-10 p-5 bg-base-100">
                  <Link to={`/singleProduct/${item.id}`} onClick={() => getId(item)}>
                    <div className='w-full'>
                        <img src={item.image} className='h-28 object-contain w-full' alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-lg font-bold text-left pt-2'>{item.title}</h1>
                        <p className='text-left mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, earum.</p>
                    </div>
                  </Link>
                  <div className='mt-4'>
                      {
                      cart.some(p => p.id === item.id) ? (
                        <button className='btn btn-error' onClick={() => dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: item
                        })}>Remove from cart</button>
                      ):(
                        <button className='btn btn-success' onClick={() => dispatch({
                          type: 'ADD_TO_CART',
                          payload: item
                        })}>Add to cart</button>
                      )
                    }
                  </div>
                </div>

            ))}
        </div>


        <div className='text-2xl px-4 py-2 font-bold bg-accent text-center mx-10 my-5 rounded-full'>Men's Clothing</div>
        <div className='flex flex-col md:flex-col lg:flex-row'>
            {menClothes?.map((item) => (
                <div className="card flex flex-col rounded-lg shadow-lg m-10 p-5 bg-base-100">
                <Link to={`/singleProduct/${item.id}`} onClick={() => getId(item)}>
                    <div className='w-full'>
                        <img src={item.image} className='h-28 object-contain w-full' alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-lg font-bold text-left pt-2'>{item.title}</h1>
                        <p className='text-left mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, earum.</p>
                    </div>
                </Link>
                  <div className='mt-4'>
                    {
                      cart.some(p => p.id === item.id) ? (
                        <button className='btn btn-error' onClick={() => dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: item
                        })}>Remove from cart</button>
                      ):(
                        <button className='btn btn-success' onClick={() => dispatch({
                          type: 'ADD_TO_CART',
                          payload: item
                        })}>Add to cart</button>
                      )
                    }
                  </div>
                </div>
            ))}
        </div>


        <div className='text-2xl px-4 py-2 font-bold bg-accent text-center mx-10 my-5 rounded-full'>Women's Clothing</div>
        <div className='flex flex-col md:flex-col lg:flex-row'>
            {womenClothes?.map((item) => (
                <div className="card flex flex-col rounded-lg shadow-lg m-10 p-5 bg-base-100">
                <Link to={`/singleProduct/${item.id}`} onClick={() => getId(item)}>
                    <div className='w-full'>
                        <img src={item.image} className='h-28 object-contain w-full' alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-lg font-bold text-left pt-2'>{item.title}</h1>
                        <p className='text-left mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, earum.</p>
                    </div>
                </Link>
                  <div className='mt-4'>
                    {
                      cart.some(p => p.id === item.id) ? (
                        <button className='btn btn-error' onClick={() => dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: item
                        })}>Remove from cart</button>
                      ):(
                        <button className='btn btn-success' onClick={() => dispatch({
                          type: 'ADD_TO_CART',
                          payload: item
                        })}>Add to cart</button>
                      )
                    }
                  </div>
                </div>
            ))}
        </div>


        <div className='text-2xl px-4 py-2 font-bold bg-accent text-center mx-10 my-5 rounded-full'>Jewelry</div>
        <div className='flex flex-col md:flex-col lg:flex-row'>
            {jewelery?.map((item) => (
                <div className="card flex flex-col rounded-lg shadow-lg m-10 p-5 bg-base-100">
                <Link to={`/singleProduct/${item.id}`} onClick={() => getId(item)}>
                    <div className='w-full'>
                        <img src={item.image} className='h-28 object-contain w-full' alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-lg font-bold text-left pt-2'>{item.title}</h1>
                        <p className='text-left mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, earum.</p>
                    </div>
                </Link>
                  <div className='mt-4'>
                    {
                      cart.some(p => p.id === item.id) ? (
                        <button className='btn btn-error' onClick={() => dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: item
                        })}>Remove from cart</button>
                      ):(
                        <button className='btn btn-success' onClick={() => dispatch({
                          type: 'ADD_TO_CART',
                          payload: item
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
