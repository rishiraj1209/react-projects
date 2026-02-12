import {  ArrowUpRight } from 'lucide-react';
import React from 'react'

const Card = ({user}) => {
    const {avatar_url,login,html_url,created_at,public_repos,followers,following} = user;
  return (
    <div className='border rounded w-[80%] mx-[10%] my-8 py-8 text-center bg-gray-200 shadow-sm shadow-black'>
        <div className='flex justify-center mb-8'>
            <img className='h-32 w-32 rounded-full border shadow-sm shadow-black' src={avatar_url} alt={login} />
        </div>
      <div className='flex justify-center items-center gap-8'>
        <a className='flex gap-1 text-blue-500 ' href={html_url} target='_blank'>{login}<ArrowUpRight/></a>
        <p className='text-xl font-semibold'>User joined :- {new Date(created_at).toLocaleDateString()}</p>
      </div>
        <p className='text-xl my-4 font-semibold'>Public Repos :- {public_repos}</p>
        <p className='text-xl my-4 font-semibold'>Followers :- {followers}</p>
        <p className='text-xl my-4 font-semibold'>Following :- {following}</p>
      </div>
  )
}

export default Card
