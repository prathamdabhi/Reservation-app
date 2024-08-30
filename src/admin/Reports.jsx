import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Reports() {
  return (
    <div>
      <Navbar/>
      <h1 className='text-2xl text-center font-bold text-blue-600'>Reports</h1>
     < div className = ' bg-[#808183a3] max-h-screen max-w-full '>
        <div className='flex justify-center h-[89vh] items-center'>
        <div className="c-items w-[28%] bg-white shadow-md rounded-lg flex flex-col gap-4 ">
           <Link to="/hotelReport"> <button className='bg-cyan-500 shadow-lg shadow-cyan-500/50 my-[7px] mx-[10rem] text-white hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Hotel</button></Link>
           <Link to="/roomReport"> <button className='bg-cyan-500 shadow-lg shadow-cyan-500/50 my-[7px] ml-[9.7rem] text-white hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Rooms</button></Link>
           <Link to ="/userReport"> <button className='bg-cyan-500 shadow-lg shadow-cyan-500/50 my-[7px] mx-[10rem] text-white hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Users</button></Link>
            
        </div>
        </div>
     </div>
    </div>
  )
}

export default Reports
