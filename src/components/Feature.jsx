import React, { useState } from 'react'
import "../App.css";
import useFatch from '../hookes/usefetch';
function Feature() {

  const {datas,loading,error} = useFatch("http://localhost:8800/api/hotel/countbycity?cities=virar,vasai,nalasopara");

  return (
    <div className='feature w-full max-w-screen-lg flex justify-center gap-3'>
      {loading?("Loading please wait") :( <>
        <div className="featureImage ">
            <img src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="Place Image 1" />
            <div className="featureTitles text-white">
            <h1 className='text-2xl font-bold pl-[7px]' >Goa</h1>
            <span className='font-bold pl-[7px] ' >{datas[0]} Properties</span>
            </div>
        </div>
        <div className="featureImage">
            <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="Place Image 2" />
            <div className="featureTitles text-white">
            <h1 className='text-2xl pl-[7px] font-bold'>Mumbai</h1>
            <span className='font-bold pl-[7px]' >{datas[1]} Properties</span>
            </div>
        </div>
        <div className="featureImage">
            <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="Place Image 3" />
            <div className="featureTitles text-white  ">
            <h1 className='text-2xl pl-[7px] font-bold' >Banglore</h1>
            <span className='font-bold pl-[7px]'>{datas[2]} Properties</span>
            </div>
        </div>
        </>)}
    </div>
  )
}

export default Feature
