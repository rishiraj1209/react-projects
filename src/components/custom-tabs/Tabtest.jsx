import React from 'react'
import Tabs from './Tabs'

const Tabtest = () => {
    const tabContent = [
        {
            label:"tab 1",
            content: <div>content of Tab1</div>
        },
        {
            label:"tab 2",
            content:<div>content of Tab2</div>
        },
        {
            label:"tab 3",
            content:<div>content of Tab3</div>
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }
  return <Tabs tabsContent={tabContent} onChange={handleChange}/>
}

export default Tabtest
