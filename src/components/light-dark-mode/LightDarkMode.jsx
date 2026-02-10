import React, { useEffect } from 'react'
import UseLocalStorage from './UseLocalStorage'

const LightDarkMode = () => {

  const [theme,setTheme] = UseLocalStorage("theme","light");

  useEffect(()=>{
    document.body.classList.remove("light","dark");
    document.body.classList.add(theme);
  },[theme]);

  const toggleTheme = ()=>{
    setTheme((prev)=>(prev === "light"?"dark":"light"));
  }

  return (
    <div>
      <div className='flex justify-between py-4 px-8'>
        <h1 className='font-bold text-4xl'>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
        <button className='border-2 rounded text-2xl font-semibold' onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode
