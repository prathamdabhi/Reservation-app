import React from 'react'

function SearchItem() {
  return (
    <div className='search'>
        <div className='s-container'>
            <div className="s-item">
                <img className='s-image' src="https://cf.bstatic.com/xdata/images/hotel/square240/442796608.webp?k=bd9788f6decdcf70060e4f3acb0d561df8eb378e96ea55f76c0b692398abbd77&o=" alt="" />
            </div>
            <div className="s-discription">
                <h1 className="s-title text-2xl text-blue-400 font-bold">Tower street Apartment</h1>
                <span className="s-distance text-[13px]">500m from central</span>
                <span className="s-tax text-[12px] px-[4px] rounded-md w-max text-white bg-[#009906]">Free Airport Tax</span>
                <span className="s-subtitle text-[12px] font-bold">Studio Apartment with Air conditionar</span>
                <span className="s-features text-[14px]">Enter Studio . 1 bathroom. 1 badroom</span>
                <span className="s-cancel text-[14px] font-bold text-[#009906] ">Free cancelation</span>
                <span className="s-cancelsub text-[12px] text-[#009906] font-[400]">You can cancel your trip</span>
            </div>
            <div className="s-price">
                <div className='si-rating'>
                    <span className='si-state fp-status pl-[7px] mr-3'>Excellent</span>
                    <span className='si-rate fp-ratingbtn pl-[7px] ml-3'>8.9</span>
                </div>
                <div className="si-priceDetail">
                    <h1 className="price-text text-2xl my-[4px] mx-[3.1rem]">$129</h1>
                    <span className='text-[14px]'>includeing text and fees</span>
                    <button className='flex items-center justify-center w-[85%] mt-[15px] text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm  py-2.5 text-center mb-3  dark:focus:ring-[#1da1f2]/55 me-2  ' >See Availability</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SearchItem
