import React, {useState} from 'react'
import Navbar from './Navbar'
import Header from './Header' 
import "../App.css";
import {format} from 'date-fns'
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import SearchItem from './searchItem';

function List() {
  const [openDate, setOpenDate] = useState(false);
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);

  



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
            <input type="text" placeholder={destination} className='w-[14rem] pl-[5px] ml-[5px] outline-none rounded-[8px] focus:outline-blue-400' id='destination' />
            </div>
            <div className='ls-item'>
            <label className='left' >Check-in-Date:</label>
            <span onClick={()=>{setOpenDate(!openDate)}} className='cursor-pointer left w-[14rem] rounded-lg bg-white'>{ `${format(date[0].startDate,'dd/mm/yyyy')} To  ${format(date[0].endDate,'dd/mm/yyyy')} `}</span>
          { openDate && <DateRange
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
             /> }
          </div>
          <div className='ls-options'>
            <label className='is-labels'htmlFor="min">Min price</label>
            <input className='i-element' id='min' type="number" />
          </div>
          <div className='ls-options'>
            <label className='is-labels'htmlFor="max">Max price</label>
            <input className='i-element' id='max' type="number" />
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
          <button className='flex items-center justify-center w-[85%] mt-[15px] ml-[20px] text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5  dark:focus:ring-[#1da1f2]/55 me-2  mx-1' >search</button>
        </div>
        <div className="list-result">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default List

