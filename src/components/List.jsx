import React, {useState} from 'react'
import Navbar from './Navbar'
import Header from './Header' 
import "../App.css";
import {format} from 'date-fns'
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';

import useFatch from '../hookes/usefetch';
import SearchItem from './SearchItem';

function List() {
  const [openDate, setOpenDate] = useState(false);
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [option, setOption] = useState(location.state.option);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const {datas,loading,error,reFetch} = useFatch(`http://localhost:8800/api/hotel?city=${destination}&min=${min || 0}&max=${max || 999}`);
  

  const handleClick = ()=>{
    reFetch()
  }



  return (
    <div>
     <Navbar/>
    <Header type="list" />
    <div className="list-container flex justify-center mt-[20px]">
      <div className="list-wrapper w-full max-w-screen-xl flex gap-5">
        <div className="list-search ">
          <h1 className="left text-2xl mb-2 text-gray-500 ">search</h1>
          <div className='ls-item  '>
            <label className='left' htmlFor="destination">Destination:</label>
            <input type="text" onChange={e=>setMax(e.target.value)} placeholder={destination} className='w-[14rem] pl-[5px] ml-[5px] outline-none rounded-[8px] focus:outline-blue-400' id='destination' />
            </div>
            <div className='ls-item'>
            <label className='left' >Check-in-Date:</label>
            <span onClick={()=>{setOpenDate(!openDate)}} className='cursor-pointer left w-[14rem] rounded-lg bg-white'>{ `${format(dates[0].startDate,'dd/mm/yyyy')} To  ${format(dates[0].endDate,'dd/mm/yyyy')} `}</span>
          { openDate && <DateRange
            onChange={(item) => setDates([item.selection])}
            minDate={new Date()}
            ranges={dates}
             /> }
          </div>
          <div className='ls-options'>
            <label className='is-labels'htmlFor="min">Min price</label>
            <input onChange={e=>setMin(e.target.value)} className='i-element' id='min' type="number" />
          </div>
          <div className='ls-options'>
            <label className='is-labels'htmlFor="max">Max price</label>
            <input onChange={e=>setMax(e.target.value)} className='i-element' id='max' type="number" />
          </div>
          <div className='ls-options'>
            <label className='is-labels'htmlFor="adult">Adult</label>
            <input className='i-element' placeholder={option.adult} id='adult' type="number" />
          </div>
          <div className='ls-options '>
            <label className='is-labels' htmlFor="children">Children</label>
            <input className='i-element' placeholder={option.children} id='children' type="number" />
          </div>
          <div className='ls-options '>
            <label className='is-labels' htmlFor="room">Room</label>
            <input className='i-element' placeholder={option.room} id='room' type="number" />
          </div>
          <button onClick={handleClick} className='flex items-center justify-center w-[85%] mt-[15px] ml-[20px] text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5  dark:focus:ring-[#1da1f2]/55 me-2  mx-1' >search</button>
        </div>
        <div className="list-result">
          {loading?("Loading..."):(<>
          {datas.map((item)=>{
           return <SearchItem item={item} key={item._id}/>
          })}
          </>)}
         
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default List

