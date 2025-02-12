'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseFetchApi = (apiString) => {
   
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(true);


    const fethApi = async()=>{

         try {
            const responce = axios.get(apiString);
            setData((await responce).data)
            
         } catch (error) {
            setError(false)
            console.log("Error during feth api", error) 
         } finally {
            setLoading(false)
         }

    }
    useEffect(()=>{
        fethApi()
    },[])
    

  return {data,loading,error}
  
}

export default UseFetchApi
