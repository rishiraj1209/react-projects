import React, { useState } from 'react'
import data from './data'

// single selection
// multiple selection

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiple,setEnableMultiple] = useState(false);
    const [multiple,setMultiple] = useState([]);

    function handleSingle(getCurrentId){
        setSelected(getCurrentId === selected? null:getCurrentId);
    }

    function handleMultiple(getCurrentId){
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
        else copyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(copyMultiple);
    }
  return (
    <div className='flex-col justify-center items-center m-50'>
        <button onClick={()=>{setEnableMultiple(!enableMultiple)}} className='bg-amber-500 px-4 py-2 ml-30 mb-10 text-lg text-gray-700 rounded shadow-lg cursor-pointer active:scale-98 border'>Enable Multiple Slection</button>
      <div className='w-120'>
        {
           data && data.length > 0?
           data.map(dataItem=>
           <div className=''>
            <div onClick={enableMultiple?()=>{handleMultiple(dataItem.id)}:()=>{handleSingle(dataItem.id)}} className='flex items-center justify-between bg-gray-300 mt-2 cursor-pointer p-2'>
                <h3 className='text-2xl'>{dataItem.question}</h3>
                <span className='font-extrabold text-2xl'>+</span>
            </div>
            {
            enableMultiple?
            multiple.indexOf(dataItem.id) !== -1 && (<div className='bg-gray-200 text-xl p-2'>{dataItem.answer}</div>)
            :selected === dataItem.id && (<div className='bg-gray-200 text-xl p-2'>{dataItem.answer}</div>)
            }
           </div>
           ):<div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordian
