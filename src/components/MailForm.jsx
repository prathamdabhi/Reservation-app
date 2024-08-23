import React from 'react'

function MailForm() {
  return (
    <div className='mf bg-[#003580] w-full  text-white flex  items-center mt-3 gap-5 flex-col'>
        <div className="mf-Items">
            <h1 className="text-2xl font-bold mb-[14px] mt-[20px]">Inform us What Your Requirements</h1>
            <span className='font-semibold'>sign up and we will send best deals to you.</span>
            <div className="mf-container mt-[14px] mb-[10px]">
                <input className='my-[8px] mr-[15px] rounded-md w-64 h-9 px-[8px] focus:outline-blue-500 text-black text-sm' type="text" placeholder='Your email?' />
                <button className='text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 pt-[6px] pb-[6px] text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mt-2 mx-1 '>Suscribe</button>
            </div>
        </div>
      
    </div>
  )
}

export default MailForm
