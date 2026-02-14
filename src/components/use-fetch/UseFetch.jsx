import React, { useEffect, useState } from 'react'

const UseFetch = (url,options={}) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const fetchData = async ()=>{
        try {
            setLoading(true);
            const res = await fetch(url,{...options});
            if(!res.ok) throw new Error(res.statusText);
            const result = await res.json();
            setData(result);
            setLoading(false);
            setError(null);
        } catch (err) {
            setError(err)
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[url]);


  return {data,error,loading}
}

export default UseFetch
