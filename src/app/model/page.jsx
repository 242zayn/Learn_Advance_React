'use client'
import Button from '@/components/Button';
import ModalExample from '@/components/Modal';
import UseFetchApi from '@/components/useFetchApi';
import axios from 'axios';
import React, { useState,useEffect } from 'react'

const PAGE = () => {

    const {data:products,loading:productsLoading,error:productsError,fethApi:productsFethApi}=UseFetchApi('https://fakestoreapi.com/products')
    const {data:users,loading:usersLoading,error:usersError,fethApi:usersFethApi}=UseFetchApi('https://fakestoreapi.com/users')
    console.log(users)
      const [count,setCout]=useState(0)
    // console.log(data)
     const Increase = ()=>{
      console.log("indise increase")
      setCout(count+1)
     }

     useEffect(()=>{
      console.log("inside of UseEffect")
     },[users])
  return (
    <div className='w-full m-auto'>
      {count}
    <button onClick={Increase}>
      Increase
    </button>
    <div className='flex flex-wrap gap-4 p-4'>
      {products.map((product) => (
        <div key={product.id} className='flex flex-col border p-4 rounded-lg shadow w-[350px]'>
          <img 
            src={product.image} 
            alt={product.title}
            className='w-full h-48 object-contain mb-4'
          />
          <h2 className='text-lg font-semibold mb-2'>{product.title}</h2>
          <p className='text-gray-600 mb-2'>${product.price}</p>
          <p className='text-sm text-gray-500'>{product.description.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default PAGE
