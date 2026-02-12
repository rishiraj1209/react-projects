import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions';

const AutoComplete = () => {
    const [loading,setLoading] = useState(true);
    const [users,setUsers] = useState([]);
    const [error,setError] = useState(null);
    const [searchParams, setSearchParams] = useState('');
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const getUsers = async ()=>{
        try {
            setLoading(true);
            const res = await fetch('https://dummyjson.com/users');
            const data = await res.json();

            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItem)=>userItem.firstName));
                setLoading(false);
                setError(null);
            }
        } catch (err) {
            setLoading(false);
            console.log(error);
            setError(err);
        } 
    }

    useEffect(()=>{
        getUsers();
    },[]);

    const handleChange = (event)=>{
        const query = event.target.value.toLowerCase();
        setSearchParams(query);
        if(query.length>0){
            const filteredData = users && users.length ? users.filter(item=>item.toLowerCase().indexOf(query) > -1):[];
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        }else{
            setShowDropDown(false);
        }
    }

    const handleClick = (event)=>{
        setSearchParams(event.target.innerText);
        setShowDropDown(false);
        setFilteredUsers([]);
    }

    console.log(users,filteredUsers);

  return (
    <div className='text-center'>
        {loading && <div>loading....</div>}
      <input 
        type="text"
        placeholder='Enter text to search'
        name='search-users' 
        value={searchParams}
        onChange={handleChange}
        className='border px-4 py-2 rounded my-8 outline-0'
      />

      {showDropDown && <Suggestions handleClick={handleClick} data = {filteredUsers}/>}
    </div>
  )
}

export default AutoComplete
