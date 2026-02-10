import React, { useEffect, useState } from 'react'

const Scroll = ({url}) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const getData = async (getUrl)=>{
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const result = await response.json();
            console.log(result);

            if(result && result.products && result.products.length){
                setData(result.products);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        getData(url);
    },[url]);

    function handleScrollPercentage(){
        // console.log(
        //     document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight
        // )

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height) * 100);
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollPercentage)
        return ()=>{
            window.removeEventListener('scroll',()=>{});
        }
    },[])

    
  return (
    <div>
        <div className='fixed w-full bg-blue-800 top-0'>
            <div className=''>
                <div className='h-5 bg-amber-600' style={{width:`${scrollPercentage}%`}}></div>
            </div>
            <h1 className='text-4xl font-semibold text-center mt-8 text-white'>Custom Scroll Indicator</h1>
        </div>
        
        {loading && <div>Loading....</div>}
        <ul className='flex flex-col gap-5 mt-30 justify-center items-center'>
            {data && data.length?
                data.map((item)=>(
                    <li key={item.id}>{item.title}</li>
                ))
            :null}
        </ul>
    </div>
  )
}

export default Scroll
