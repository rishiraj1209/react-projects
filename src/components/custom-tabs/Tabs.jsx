import React, { useState } from 'react'

const Tabs = ({tabsContent, onChange}) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentindex){
        setCurrentTabIndex(getCurrentindex);
        onChange(getCurrentindex);
    }
  return (
    <div className='my-4'>
      <div className='flex gap-10 justify-center'>
        {
            tabsContent.map((tabItem,index)=>(
                <div className={`${index===currentTabIndex?'bg-green-400':'bg-amber-500'} px-6 py-2 rounded-xl cursor-pointer active:scale-98 shadow-md shadow-black`} onClick={()=>handleOnClick(index)} key={tabItem.label}>
                    <span className='label'>{tabItem.label}</span>
                </div>
            ))
        }
      </div>
      <div className='text-center mt-10 text-4xl'>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  )
}

export default Tabs
