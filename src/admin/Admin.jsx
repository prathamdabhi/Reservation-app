import React from 'react'
import Navbar from '../components/Navbar'
import AddHotel from './AddHotel'
import Footer from '../components/Footer'

function Admin() {
  return (
    <div>
        
      <Navbar/>
      <h1 className='text-2xl text-center font-bold text-blue-600'>Welcom To Admin Page</h1>
      <AddHotel/>
      <div className='footer fixed bottom-0'><Footer/></div>
      
    </div>
  )
}

export default Admin
