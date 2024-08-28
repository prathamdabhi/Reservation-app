import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons/faCar";
import { faPlane } from "@fortawesome/free-solid-svg-icons/faPlane";
import { faTaxi } from "@fortawesome/free-solid-svg-icons/faTaxi";
import "../App.css";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";

import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { faPerson } from "@fortawesome/free-solid-svg-icons/faPerson";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

function Header({type}) {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult:1,
    children:0,
    room:1
  });

  const navigation = useNavigate()
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const changeNumber= (name,operation)=>{
      setOption((prev)=>{
        return {...prev,[name]:operation === "i" ? option[name] + 1 : option[name] - 1 }
      })
  }
  const {dispatch} = useContext(SearchContext)
  const onsearch = ()=>{
    dispatch({type:"NEW_SEARCH",payload:{destination,dates,option}})
      navigate('/hotel',{state:{destination,dates,option}})
  }

  return (
    <div className="header bg-blue-600 flex justify-center relative">
      <div className="header-container container">
        <div className="header-list flex gap-10">
          <div className="header-list-item ">
            <FontAwesomeIcon
              icon={faBed}
              className=" cursor-pointer text-white "
            />
            <span className="text-white font-sans cursor-pointer ml-2">
              stay
            </span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon
              icon={faPlane}
              className="cursor-pointer text-white"
            />
            <span className="text-white font-sans cursor-pointer ml-2">
              flight
            </span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon
              icon={faCar}
              className="cursor-pointer text-white"
            />
            <span className="text-white font-sans cursor-pointer ml-2">
              car{" "}
            </span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon
              icon={faBed}
              className="cursor-pointer text-white"
            />
            <span className="text-white font-sans cursor-pointer ml-2">
              Attractions
            </span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon
              icon={faTaxi}
              className="cursor-pointer text-white"
            />
            <span className="text-white font-sans cursor-pointer ml-2">
              Texi
            </span>
          </div>
        </div>
        { type !== "list" &&  <> <h1 className="header-title text-white text-3xl font-bold mt-4 mb-2">
          {" "}
          Wanderlust Journeys: Your Adventure Awaits{" "}
        </h1>
        <p className="header-des text-white mt-4">
          Expand your horizons with Travel Horizons. We offer a wide array of
          travel options, from serene retreats to action-packed vacations. Let
          us guide you to your next extraordinary destination
        </p>
        <div className="header-search h-10 border-2 border-yellow-300 border-solid flex bg-white items-center justify-around py-3 rounded-lg absolute bottom-[-15px] w-full max-w-screen-xl">
          <div className="headerSearch-item">
            <FontAwesomeIcon
              icon={faBed}
              className="cursor-pointer text-blue-600"
            />
            <input
              type="text"
              placeholder="Whare are you going?"
              className="border-none outline-none"
              onChange={e=>{setDestination(e.target.value)}}
            />
          </div>

          <div className="headerSearch-item">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className="cursor-pointer text-blue-600 "
            />
            <span onClick={()=>{setOpenDate(!openDate)}} className=" text-gray-500 cursor-pointer">{`${format(dates[0].startDate,'dd/mm/yyyy')} to ${format(dates[0].endDate,'dd/mm/yyyy')} `}</span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              minDate={new Date()}
              className="absolute z-[1] top-[40px]"
            />}
          </div>

          <div className="headerSearch-item">
            <FontAwesomeIcon
              icon={faPerson}
              className="cursor-pointer text-blue-600"
            />
            <span onClick={()=>{setOpenOption(!openOption)}} className="text-gray-500 cursor-pointer">{`${option.adult} Adult . ${option.children} Children . ${option.room} Room`}</span>
           { openOption && <div className="option z-[1]">
            <div className="option-item">
              <span className="option-text">Adult</span>
              <div className="option-count">
              <button disabled={option.adult<=0} onClick={()=>{changeNumber("adult","d")}} className="option-button">-</button>
              <span className="option-number">{option.adult}</span>
              <button onClick={()=>{changeNumber("adult","i")}}  className="option-button">+</button>
              </div>
            </div>
            <div className="option-item">
              <span className="option-text">Children</span>
              <div className="option-count">
              <button disabled={option.children<=0} onClick={()=>{changeNumber("children","d")}}  className="option-button">-</button>
              <span className="option-number">{option.children}</span>
              <button onClick={()=>{changeNumber("children","i")}}  className="option-button">+</button>
              </div>
            </div>
            <div className="option-item">
              <span className="option-text">Room</span>
              <div className="option-count">
              <button disabled={option.room<=0} onClick={()=>{changeNumber("room","d")}}  className="option-button">-</button>
              <span className="option-number">{option.room}</span>
              <button onClick={()=>{changeNumber("room","i")}}  className="option-button">+</button>
              </div>
            </div>
            </div>}
          </div>
          <div className="headerSearch-item">
            <button onClick={onsearch} className="nav-button text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5  text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mt-2 mx-1 h-[29px] mb-[10px]">
              Search
            </button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
}

export default Header;
