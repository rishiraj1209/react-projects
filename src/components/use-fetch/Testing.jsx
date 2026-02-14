import React from 'react'
import UseFetch from './UseFetch'

const Testing = () => {
    const {data,error,loading} = UseFetch('https://dummyjson.com/products',{});
    console.log(error,data,loading);
  return (
    <div>
      <h1 className='text-2xl font-semibold underline'>Use Fetch Hook</h1>
      <ul>
        {
            loading && <div className='text-2xl'>Loading....</div>
        }
        {
            error && <div className='text-2xl'>{error}</div>
        }
        {
            data && data.products && data.products.length?
            data.products.map((product)=>(
                <li key={product.id}>{product.title}</li>
            )):null
        }
      </ul>
      
    </div>
  )
}

export default Testing
