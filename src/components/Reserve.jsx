import React, { useContext, useState } from 'react'
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFatch from '../hookes/usefetch';
import {SearchContext} from '../context/SearchContext.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Reserve({setOpenModel, hotelId}) {
    const [selectedRoom, setSelectedRoom] = useState([]); 
    const {datas,loading,error} = useFatch(`http://localhost:8800/api/hotel/room/${hotelId}`);
    const {dates} = useContext(SearchContext);

    const getDatesInRange = (start,end)=>{
        start = new Date()
        end = new Date()

      const date = new Date(start.getTime());
      const dates = [];

      while (date <= end) {
        dates.push(new Date(date).getTime())
        date.setDate(date.getDate()+1)
      }
      return dates;
    }
    // const allDates = getDatesInRange(dates[0].start,dates[0].end)
    const allDates = dates && dates[0] ? getDatesInRange(dates[0].startDate, dates[0].endDate) : [];

    const isAvailable = (roomNumber) =>{
      const isFound = roomNumber.unavailableDate.some(date=>{
        allDates.includes(new Date(date).getTime());
      })
      return !isFound
    }
     const navigate =useNavigate()
    const handleSelect = (e)=>{
      const checked = e.target.checked
      const value = e.target.value
      setSelectedRoom(checked ? [...selectedRoom, value] :selectedRoom.filter((item)=> item !== value) )
    }
    const handleClickReserve = async ()=>{
      try {
        await Promise.all(selectedRoom.map((roomId)=>{
          const res = axios.put(`http://localhost:8800/api/room/availablety/${roomId}`,{dates:allDates})
          return res.data
        }))
        setOpenModel(false)
        navigate("/thank")
      } catch (error) {
        alert("error are occured in rooms")
      } 
    }
  return (
    <div className='reserve w-screen h-screen bg-[rgba(0,0,0,0.418)] fixed top-0 left-0 flex items-center justify-center '>
      <div className='r-container bg-white p-5 relative'>
        <FontAwesomeIcon icon={faCircleXmark} className='r-close absolute top-0 right-0 cursor-pointer text-[#5050ff] text-[22px] mt-[17px] mr-[3px]' onClick={()=>setOpenModel(false)}/>
            <span>Select Your Rooms:</span>
            {datas.map((item)=>{
                return <div className='r-item flex items-center gap-12 p-5' key={item._id}>
                    <div className='r-itemInfo flex flex-col gap-1'>
                        <div className='r-title font-[500] capitalize'>{item.title}</div>
                        <div className='r-desc font-[500] capitalize'>{item.desc}</div>
                        <div className='r-max text-[12px] '>Max People: <b>{item.maxPeaple}</b></div>
                        <div className='r-price text-blue-400 '>${item.price}</div>
                    </div>
                    <div className="select-rooms flex flex-wrap gap-1 text-[8px] text-gray-500">
                      {item.roomNumbers.map((roomNumbers,i)=>{
                        return <div key={i} className='room flex flex-col'>
                          <label>{roomNumbers.number}</label>
                          <input type='checkbox' value={roomNumbers._id} onChange={handleSelect}
                          disabled={!isAvailable(roomNumbers)} />
                        </div>
                      })}
                      </div>
                </div>
            })}
           <button onClick={handleClickReserve} className='r-button  text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm    inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mt-2 mx-1 h-[29px] mb-[10px] w-[95%] px-[10rem] ml-[15px] '>Reserve Now!</button> 
      </div>
    </div>
  )
}

export default Reserve
