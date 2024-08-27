import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-bar h-[50px] bg-blue-600 flex justify-center'>
        <div className='nav-container container flex items-center justify-between'>
            <Link to="/">
            <span className='nav-logo text-white font-semibold text-2xl '>Hotel</span>
            </Link>
            <div className="nav-item">
                <button className='nav-button text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mt-2 mx-1  '>Register</button>
                <button className='nav-button text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2  mt-2 mx-1  '>Login</button>
            </div>
            </div> 
      
    </div>
  )
}

export default Navbar
