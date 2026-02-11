import { PanelTopClose } from 'lucide-react'
import React from 'react'

const Modal = ({id,header,body,footer,onClose}) => {
  return (
    <div id={id || 'Modal'} className='top-0 fixed bg-lime-400 z-10 w-full h-full'>
      <div className='h-[70%] w-[70%] my-[10%] mx-[15%] bg-white border-2 border-black rounded shadow-2xl relative modal-content'>
        <div className='h-[20%] bg-neutral-600'>
            <span onClick={onClose} className='cursor-pointer flex justify-center'><PanelTopClose/></span>
            {header ? (header):(<h2 className='text-white text-2xl'>This is our header</h2>)}
        </div>
        <div className='h-[60%] bg-neutral-400 flex justify-center items-center'>
            {body ? (
              body
              ):(
              <div>
                <p className='text-3xl'>This is our Modal Body</p>
              </div>
            )}
        </div>
        <div className='h-[20%] bg-neutral-600 flex justify-center items-center'>
            {footer?(footer):(<h2 className='text-white text-2xl'>This is our footer</h2>)}
        </div>
      </div>
    </div>
  )
}

export default Modal
