import { faBed, faCar, faPlane, faTaxi, faCalendarDay, faPerson } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

function Header({ type }) {
  let body = document.body
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const calendarRef = useRef(null);
  const roomref = useRef(null)
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const changeNumber = (name, operation) => {
    setOption((prev) => {
      return { ...prev, [name]: operation === "i" ? option[name] + 1 : option[name] - 1 };
    });
  };

  const onSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, option } });
    navigate('/hotel', { state: { destination, dates, option } });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if(roomref.current && !roomref.current.contains(event.target)){
        setOpenOption(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [calendarRef]);

  return (
    <div className="header bg-blue-600 flex justify-center relative py-5">
      <div className="header-container w-full max-w-screen-xl px-4 md:px-8">
        <div className="header-list flex gap-5 flex-wrap justify-center md:justify-start">
          <div className="header-list-item flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} className="text-white" />
            <span className="text-white font-sans cursor-pointer">Stay</span>
          </div>
          <div className="header-list-item flex items-center gap-2">
            <FontAwesomeIcon icon={faPlane} className="text-white" />
            <span className="text-white font-sans cursor-pointer">Flight</span>
          </div>
          <div className="header-list-item flex items-center gap-2">
            <FontAwesomeIcon icon={faCar} className="text-white" />
            <span className="text-white font-sans cursor-pointer">Car</span>
          </div>
          <div className="header-list-item flex items-center gap-2">
            <FontAwesomeIcon icon={faBed} className="text-white" />
            <span className="text-white font-sans cursor-pointer">Attractions</span>
          </div>
          <div className="header-list-item flex items-center gap-2">
            <FontAwesomeIcon icon={faTaxi} className="text-white" />
            <span className="text-white font-sans cursor-pointer">Taxi</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="header-title text-white text-2xl md:text-3xl font-bold mt-4 mb-2 text-center md:text-left">
              Wanderlust Journeys: Your Adventure Awaits
            </h1>
            <p className="header-des text-white mt-4 text-sm md:text-base text-center md:text-left">
              Expand your horizons with Travel Horizons. We offer a wide array of travel options, from serene retreats to action-packed vacations.
            </p>

            <div className="header-search flex flex-col md:flex-row items-center justify-around bg-white p-4 rounded-lg mt-6 md:mt-10 shadow-lg">
              <div className="headerSearch-item flex items-center mb-3 md:mb-0">
                <FontAwesomeIcon icon={faBed} className="text-blue-600 mr-2" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="border-none outline-none text-gray-700"
                  onChange={e => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearch-item flex items-center mb-3 md:mb-0">
                <FontAwesomeIcon icon={faCalendarDay} className="text-blue-600 mr-2" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="cursor-pointer text-gray-500"
                >
                  {`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}
                </span>
                {/* {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={item => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    minDate={new Date()}
                    className="absolute top-[18rem] z-10"
                  />
                )} */}
                      {openDate && (
        <div ref={calendarRef} className="absolute top-[18rem] z-10">
          <DateRange
            editableDateInputs={true}
            onChange={item => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            minDate={new Date()}
          />
        </div>
      )}
              </div>

              <div ref={roomref} className="headerSearch-item flex items-center mb-3 md:mb-0">
                <FontAwesomeIcon icon={faPerson} className="text-blue-600 mr-2" />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="cursor-pointer text-gray-500"
                >
                  {`${option.adult} Adult · ${option.children} Children · ${option.room} Room`}
                </span>
                {openOption && (
                  <div className="absolute top-[70px] bg-white p-3 rounded shadow-lg z-10">
                    <div className="option-item flex justify-between mb-2">
                      <span>Adult</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={option.adult <= 1}
                          onClick={() => changeNumber("adult", "d")}
                          className="option-button px-2 py-1"
                        >
                          -
                        </button>
                        <span>{option.adult}</span>
                        <button
                          onClick={() => changeNumber("adult", "i")}
                          className="option-button px-2 py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item flex justify-between mb-2">
                      <span>Children</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={option.children <= 0}
                          onClick={() => changeNumber("children", "d")}
                          className="option-button px-2 py-1"
                        >
                          -
                        </button>
                        <span>{option.children}</span>
                        <button
                          onClick={() => changeNumber("children", "i")}
                          className="option-button px-2 py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item flex justify-between">
                      <span>Room</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={option.room <= 1}
                          onClick={() => changeNumber("room", "d")}
                          className="option-button px-2 py-1"
                        >
                          -
                        </button>
                        <span>{option.room}</span>
                        <button
                          onClick={() => changeNumber("room", "i")}
                          className="option-button px-2 py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearch-item">
                <button
                  onClick={onSearch}
                  className="nav-button bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-white px-5 py-2.5"
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

