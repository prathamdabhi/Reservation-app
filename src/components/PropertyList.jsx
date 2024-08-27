import React from 'react'
import "../App.css";
import useFatch from '../hookes/usefetch';

function PropertyList() {
  const {datas,loading,error} = useFatch("http://localhost:8800/api/hotel/countbytype");
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/square240/442796608.webp?k=bd9788f6decdcf70060e4f3acb0d561df8eb378e96ea55f76c0b692398abbd77&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square240/575055834.webp?k=976426a538f3d445429656daf20578a780204698ae11ce3dc2cfa8823f39e62a&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ]
  return (
    <div className='plist max-w-screen-lg w-full flex justify-between gap-3'>
       { loading?("loading please wait"):(<>
      { datas && images.map((img,i)=>{
        return <div className='plistItem' key={i}>
        <img src={img} alt="" className='plistImage'/>
        <div className="plistTitle">
          <h2 className="text-xl capitalize pl-[7px] font-bold">{datas[i]?.type}</h2>
          <span className='font-bold pl-[7px]'>{datas[i]?.count} {datas[i]?.type}</span>
        </div>
    </div>
      })}
         </>)}
      
    </div>
  )
}

export default PropertyList

{/* <div className='plistItem'>
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
        </div> */}