import React from 'react'
import { useNavigate } from 'react-router-dom'

function Thank() {
    const navigate = useNavigate()
    const btnHome = ()=>{
        navigate("/");
    }
  return (
    <div className="thank relative w-screen h-screen bg-[#2c2b2a]">
    <div className="thank-container grid  h-[23vh] px-[14px] rounded-xl bg-white absolute top-[38%] left-[26%] place-items-center">
      <div className="thank-item   ">
        <h1 className="text-3xl text-blue-500 font-bold">Thank you, your Reservation has been confirmed!</h1>
        <p className="text-[500] text-center mt-[15px]"> Thank you for shopping with us. We'll send a confirmation once
                your booking has been,</p>
      </div>
      <button onClick={btnHome} className=" text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm    inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mt-2 mx-1 h-[29px] mb-[10px] w-23 px-5 ">Go Back</button>
    </div>
  </div>
  )
}

export default Thank
