import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddHotel() {
    const navigate = useNavigate();
    const gotoAddHotel = ()=>{
        navigate("/addhotel")
    }
    const gotoAddRoom = ()=>{
        navigate("/addroom")
    }
  return (
    <div className="flex justify-center items-center h-[65vh] w-full bg-gray-100">
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-[28%]">
        <h2 className="text-xl font-bold text-center capitalize mb-4">Add Hotel Here</h2>
        <div className="flex flex-col gap-4">
            <button 
                onClick={gotoAddHotel} 
                className="bg-[#1da1f2] text-white hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Add Hotel
            </button>
            <button 
                onClick={gotoAddRoom} 
                className="bg-[#1da1f2] text-white hover:bg-[#1da1f2]/90 focus:ring-4 focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Add Room
            </button>
        </div>
    </div>
</div>)
}

export default AddHotel
