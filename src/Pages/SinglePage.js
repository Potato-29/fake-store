import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchSingle from '../Helper/useFetchSingle'
import Navbar from '../Components/Navbar/Navbar'
import { CartState } from '../Helper/Context';

export default function SinglePage() {


  const {
    state: {cart}, 
    dispatch,
  } = CartState()

  console.log(cart)

  const {id} = useParams();
  const {singleProduct, loading} = useFetchSingle(`https://fakestoreapi.com/products/${id}`)
  // console.log(singleProduct)
  // axios.get()
  if(loading) return <div className='h-screen flex flex-row justify-center items-center'><h1 className='text-3xl font-sans font-bold'>Loading...</h1></div>
  return (
    <>
    {/* <Navbar /> */}
    <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center'>
      <div className='m-8 p-8 flex justify-center'>
        <img src={singleProduct?.image} className='h-auto w-1/2 md:h-2/4 md:w-2/4 lg:h-full lg:w-full' alt="" />
      </div>
      <div>
        <div className='w-full p-5'>
          <h1 className='text-2xl font-bold my-2'>{singleProduct?.title}</h1>
          <h3 className='text-2xl font-semibold my-2'>Price: {singleProduct?.price}</h3>
          {
            cart.some(p => p.id === singleProduct.id) ? (
              <button className='btn btn-error' onClick={() => dispatch({
                type: 'REMOVE_FROM_CART',
                payload: singleProduct
              })}>Remove from cart</button>
            ):(
              <button className='btn btn-success' onClick={() => dispatch({
                type: 'ADD_TO_CART',
                payload: singleProduct
              })}>Add to cart</button>
            )
          }
          
        </div>
        <div className='mx-5 md:mx-5'>
          <h4 className='text-lg font-semibold my-2'>Rating: {singleProduct.rating?.rate}/5</h4>
          <p className='text-lg font-semibold mt-2'>Description:</p>
          <p className=''>{singleProduct?.description}</p>
        </div>
      </div>
    </div>
    </>
  )
}
