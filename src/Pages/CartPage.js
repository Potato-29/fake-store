import React from 'react'
import { CartState } from '../Helper/Context'

export default function CartPage() {
    const {
        state: {cart}, 
        dispatch,
    } = CartState()
    
  return (
    <>
        <div className='w-screen h-screen flex flex-col items-center'>
            <p className='text-2xl mt-5 font-bold'>Total {cart.length} Items</p>
            <div className='max-w-lg mt-5 flex flex-col  mx-4'>
                {cart.map((item) => (
                    <div className='flex flex-row bg-base-300 rounded-lg my-3'>
                        <div className='m-4 w-2/4 flex justify-center'>
                            <img src={item.image} className="w-20 rounded-full h-20" alt="" />
                        </div>
                        <div className='mt-4 mb-4 mr-4 w-full'>
                            <p className=''>{item.title}</p>
                            <p className='font-bold'>{item.price} Rs</p>
                        </div>
                    </div>
                ))}
            </div>
            {cart.length > 0 && <button className='btn btn-success m-4'>Checkout</button>}
            
        </div>
    </>
  )
}
