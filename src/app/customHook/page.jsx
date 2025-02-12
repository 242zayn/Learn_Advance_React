'use client'
import CustomHook from '@/components/CustomHook';
import React from 'react'

const page = () => {

    const { count, increment, decrement, reset } = CustomHook(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default page
