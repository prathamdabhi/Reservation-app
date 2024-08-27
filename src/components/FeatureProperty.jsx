import React from 'react'
import useFatch from '../hookes/usefetch';

function FeatureProperty() {
    const {datas,loading,error} = useFatch("http://localhost:8800/api/hotel?featured=true&limit=4");
  return (
    <div className='fp max-w-screen-lg w-full flex justify-between gap-3'>
        {loading?("loading..."):(<>
        {datas.map((item)=>( <div className="fp-item" key={item._id}>
            <img className='fp-img' src={item.img[0]} alt="" />
            <div className="fp-title">
                <span className='fp-name pl-[7px] font-bold'>{item.name}</span>
                <span className='fp-city font-[300] pl-[7px]'>{item.city}</span>
                <span className='fp-price pl-[7px]'>starting price ${item.cheapestprice}</span>
              {item.rating &&  <div className="fp-rating  pl-[7px]">
                <button className='fp-ratingbtn pl-[7px]'>{item.rating}</button>
                <span className='fp-status pl-[7px]'>Excellent</span>
                </div>}
            </div>
        </div> ))}
       
       </>)}
      
    </div>
  )
}

export default FeatureProperty

{/* <div className="fp-item">
    "https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o="
<img  className='fp-img'src="https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o=" alt="" />
<div className="fp-title">
    <span className='fp-name pl-[7px] font-bold'>Sugar Soft Apartmment</span>
    <span className='fp-city font-[300] pl-[7px]'>United Kingdom</span>
    <span className='fp-price pl-[7px]'>$120</span> 
    <div className="fp-rating">
    <button className='fp-ratingbtn pl-[7px]'>8.0</button>
    <span className='fp-status pl-[7px]'>Excellent</span>
    </div>
</div>
</div>
<div className="fp-item">
<img className='fp-img' src="https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o=" alt="" />
<div className="fp-title">
    <span className='fp-name pl-[7px] font-bold'>Sugar Soft Apartmment</span>
    <span className='fp-city font-[300] pl-[7px]'>United Kingdom</span>
    <span className='fp-price pl-[7px]'>$120</span>
    <div className="fp-rating">
    <button className='fp-ratingbtn pl-[7px]'>8.0</button>
    <span className='fp-status pl-[7px]'>Excellent</span>
    </div>
</div>
</div>
<div className="fp-item">
<img className='fp-img' src="https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o=" alt="" />
<div className="fp-title">
    <span className='fp-name pl-[7px] font-bold'>Sugar Soft Apartmment</span>
    <span className='fp-city font-[300] pl-[7px]'>United Kingdom</span>
    <span className='fp-price pl-[7px]'>$120</span>
    <div className="fp-rating">
    <button className='fp-ratingbtn pl-[7px]'>8.0</button>
    <span className='fp-status pl-[7px]'>Excellent</span>
    </div>
</div>
</div> */}