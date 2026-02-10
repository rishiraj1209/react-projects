import { Star } from 'lucide-react'
import React, { useState } from 'react'

const Rating = ({totalStars = 5}) => {
    const [rating,setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (currentIndex)=>{
        setRating(currentIndex);
    }

    const handleMouseEnter = (currentIndex)=>{
        setHover(currentIndex);
    }

    const handleMouseLeave = ()=>{
        setHover(rating);
    }

  return (
    <div className='flex gap-1'>
      {
        [...Array(totalStars)].map((_,index)=>{
            index += 1;
            return<Star 
            key={index}
            className={index <= (hover || rating)? 'text-yellow-400':'text-black'} // color all the stars till the hover or rating
            onClick={()=>handleClick(index)} 
            onMouseEnter={()=> handleMouseEnter(index)} 
            onMouseLeave={handleMouseLeave} 
            size={40}/>
        })
      }
    </div>
  )
}

export default Rating
