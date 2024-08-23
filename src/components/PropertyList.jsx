import React from 'react'
import "../App.css";
import house from '../assets/house.jpg'
import Apartment from '../assets/Apartment.jpg'

function PropertyList() {
  return (
    <div className='plist max-w-screen-lg w-full flex justify-between gap-3'>
        <div className='plistItem'>
            <img src={house} alt="" className='plistImage'/>
            <div className="plistTitle">
              <h2 className="text-xl pl-[7px] font-bold">House</h2>
              <span className='font-bold pl-[7px]'>233 hotels</span>
            </div>
        </div>
        <div className='plistItem'>
            <img src={Apartment} alt="" className='plistImage'/>
            <div className="plistTitle">
              <h2 className="text-xl pl-[7px] font-bold">Apartment</h2>
              <span className='font-bold pl-[7px]'>200 hotels</span>
            </div>
        </div>
        <div className='plistItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square240/442796608.webp?k=bd9788f6decdcf70060e4f3acb0d561df8eb378e96ea55f76c0b692398abbd77&o=" alt="" className='plistImage'/>
            <div className="plistTitle">
              <h2 className="text-xl pl-[7px] font-bold">Village</h2>
              <span className='font-bold pl-[7px]'>300 hotels</span>
            </div>
        </div>
        <div className='plistItem'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square240/575055834.webp?k=976426a538f3d445429656daf20578a780204698ae11ce3dc2cfa8823f39e62a&o=" alt="" className='plistImage'/>
            <div className="plistTitle">
              <h2 className="text-xl pl-[7px] font-bold">Resort</h2>
              <span className='font-bold pl-[7px]'>233 hotels</span>
            </div>
        </div>
      
    </div>
  )
}

export default PropertyList
