import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Slider = ({url, page=1,limit=5}) => {
  const [images,setImages] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentImage,setCurrentImage] = useState(0);

  const getImages = async (getUrl)=>{
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if(data){
        setImages(data);
        setLoading(false);
      }
      
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(url != '')getImages(url);
  },[url]);

  const handleprevious = ()=>{
    setCurrentImage(currentImage === 0? images.length-1:currentImage-1);
  }

  const handlenext = ()=>{
    setCurrentImage(currentImage === images.length-1? 0:currentImage+1);
  }

  if(loading){
    return <div>Loading....</div>
  }

  if(error){
    return <div>{error}</div>
  }

  return (
    <div className='relative flex justify-center items-center h-80 w-120 mx-10 my-10'>
      <CircleArrowLeft onClick={handleprevious} className='absolute text-white left-1 cursor-pointer active:scale-98'/>

      {images && images.length?
        images.map((imageItem,index)=>(
          <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={currentImage === index?'rounded shadow-2xl w-full h-full object-cover':'hidden'}
          />
      )):null}

      <CircleArrowRight onClick={handlenext} className='absolute text-white right-1 cursor-pointer active:scale-98'/>

      <span className='flex absolute bottom-1'>
        {images && images.length?
          images.map((_,index)=>(
            <button
              key={index}
              className={`h-3 w-3 rounded-full border-none outline-0 cursor-pointer mx-1 ${currentImage === index?'bg-gray-400':'bg-white'}`}
              onClick={()=>setCurrentImage(index)}
            >
            </button>
          ))
        :null}
      </span>
    </div>
  )
}

export default Slider
