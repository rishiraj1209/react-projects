import React, { useEffect, useState } from 'react'
import Card from './Card';

const Github = () => {
    const [userName,setUserName] = useState('rishiraj1209');
    const [userData,setUserData] = useState(null);
    const [loading,setLoading] = useState(false);

    const handleSubmit = ()=>{
        fetchGithubProfile();
    }

    const fetchGithubProfile = async () => {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if(data){
            setUserData(data);
            setLoading(false);
            setUserName('')
        }
        console.log(data);
    }

    useEffect(()=>{
        fetchGithubProfile();
    },[])
  return (
    <div>
        {loading && <div>Loading....</div>}
      <div className='flex justify-center gap-8 mt-8'>
        <input 
            type="text" 
            name='search-user' 
            placeholder='Enter the profile to search' 
            value={userName} 
            onChange={(e)=>{setUserName(e.target.value)}}
            className='border outline-0 px-4 rounded' 
        />
        <button className='bg-amber-500 rounded shadow-sm shadow-black active:scale-98 cursor-pointer' onClick={handleSubmit}>search</button>
      </div>
      {
        userData !== null? <Card user={userData}/>:null
      }
    </div>
  )
}

export default Github
