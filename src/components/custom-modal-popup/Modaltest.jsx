import React, { useState } from 'react'
import Modal from './Modal';

const Modaltest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false)

    function handleToggle(){
        setShowModalPopup(!showModalPopup);
    }

    function onClose(){
      setShowModalPopup(false);
    }
  return (
    <div className='text-center'>
      <button className='px-8 py-2 border rounded mt-2 shadow-black shadow-sm text-lg active:scale-99 active:shadow-none' onClick={handleToggle}>Open Modal Popup</button>
      {showModalPopup && <Modal onClose={onClose}/>}
    </div>
  )
}

export default Modaltest
