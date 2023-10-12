'use client';

// the use client makes the component able to receive client side Rendering ie events, usesttes.... etc.
import React from 'react'

const AddToCart = () => {
  return (
    <div><button className='btn btn-primary' onClick={()=>console.log("clicked")}>Add to cart</button></div>
  )
}

export default AddToCart