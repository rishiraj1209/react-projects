import React, { useState } from 'react'

const Random = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#ffffff');

    const random255 = ()=> Math.floor(Math.random()*256);

    const generateColor = ()=>{
        const red = random255();
        const green = random255();
        const blue = random255();
        if(typeOfColor === 'hex'){
            const hexColor = '#' + red.toString(16).padStart(2,'0') + green.toString(16).padStart(2,'0') + blue.toString(16).padStart(2,'0');
            setColor(hexColor);
        }else{
            setColor(`rgb(${red},${green},${blue})`);
        }
    }
  return (
    <div style={{width:'100vw',height:'100vh',background: color}}>
        <button className='px-4 py-2 bg-white border-2 shadow-2xl rounded my-4 mx-4 cursor-pointer active:scale-98' onClick={()=>{setTypeOfColor('hex')}}>Create Hex Color</button>
        <button className='px-4 py-2 bg-white border-2 shadow-2xl rounded my-4 mx-4 cursor-pointer active:scale-98' onClick={()=>{setTypeOfColor('rgb')}}>Create RGB Color</button>
        <button className='px-4 py-2 bg-white border-2 shadow-2xl rounded my-4 mx-4 cursor-pointer active:scale-98' onClick={generateColor}>Generate Random Color</button>

        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold my-10'>{typeOfColor === 'hex'? "hex Color":"rgb color"}</p>
            <p className='text-4xl font-bold my-10'>{color}</p>
        </div>
    </div>
  )
}

export default Random
