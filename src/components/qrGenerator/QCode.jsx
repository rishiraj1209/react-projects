import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QCode = () => {
  const [qrcode,setQrCode] = useState('');
  const [input,setInput] = useState('');
  return (
    <div className='text-center'>
      <h1 className='my-8 text-4xl font-mono'>QR Code Generator</h1>
      <div className='my-8 flex gap-8 justify-center'>
        <input type='text' name='qr-code' value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='Enter your value here' className='border px-4 py-2 rounded shadow-black shadow-md outline-0'/>
        <button disabled={input && input.trim() !== ''?false:true} onClick={()=>{setQrCode(input);setInput('')}} className='px-4 py-2 border rounded bg-amber-500 text-lg cursor-pointer active:scale-98 shadow-black shadow-md'>Generate</button>
      </div>
      <div className='flex justify-center'>
        <QRCode id='qr-code-value' value={qrcode}/>
      </div>
    </div>
  )
}

export default QCode
