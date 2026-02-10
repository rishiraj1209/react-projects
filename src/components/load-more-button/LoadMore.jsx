import React, { useEffect, useState } from 'react'

const LoadMore = () => {
    const [loading,setLoading] = useState(false);
    const [count,setCount] = useState(0);
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);
    const [disableButton,setDisableButton] = useState(false);

    async function getProducts(){
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`);
            const data = await response.json();

            console.log(data);
            if(data && data.products && data.products.length){
                setProducts((prevData) => [...prevData, ...data.products]);
                setLoading(false);
            };
        } catch (err) {
            setError(err.message);
            setLoading(false);

        }
        
    }

    useEffect(()=>{
        getProducts();
    },[count]);

    useEffect(()=>{
        if(products && products.length === 100){
            setDisableButton(true);
        }
    },[products])

    {loading && <p className="text-center">Loading...</p>}

    if(error){
        return <div>{error}</div>
    }
  return (
    <div>
      <div className='flex flex-wrap justify-around gap-y-0.5'>
        {products && products.length?
            products.map((item)=>(
                <div key={item.id} className='border text-center'>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                </div>
            ))
        :null}
      </div>
      <div className='my-8 text-center'>
        <button className={`px-4 py-2  text-white border-2 border-black cursor-pointer shadow-xl active:scale-98 rounded ${disableButton?'hidden':'bg-amber-500'}`} disabled={disableButton} onClick={()=>{setCount(count+1)}}>
            load more Products
        </button>
        {disableButton && <p className='mt-4 font-bold text-lg'>You have reached your products limit</p>}
      </div>
    </div>
  )
}

export default LoadMore
