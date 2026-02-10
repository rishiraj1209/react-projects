import React, { useEffect, useState } from 'react'

const UseLocalStorage = ({key,initialValue}) => {
  const [value,setValue] = useState(()=>{
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null? JSON.parse(storedValue):initialValue;

    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  useEffect(()=>{
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },[key,value]);

  return [value,setValue];
}

export default UseLocalStorage
