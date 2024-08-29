import React, {useContext, useState} from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import MailForm from '../components/MailForm'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import useFatch from '../hookes/usefetch';
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { AuthContext } from '../context/AuthContext'
import Reserve from '../components/Reserve'


function Hotel() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
  }])
  const navigate = useNavigate();
  const [slidenumber, setSlidenumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const {datas,loading,error} = useFatch(`http://localhost:8800/api/hotel/find/${id}`);

  const {dates, option} = useContext(SearchContext)
  const {user} = useContext(AuthContext);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  
  const photos = [
    {
      id:1,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      id:2,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      id:3,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      id:4,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      id:5,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      id:6,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
   
  ];
  const handelOpen = (i)=>{
    setSlidenumber(i);
    setOpen(!open);
  }
  const handleClick = ()=>{
    if(user){
      setOpenModel(true);
    }else{
      navigate("/login")
    }
  }
  return (
    <div>
      <Navbar/>
      <Header type="list" />
     {loading?("Loading..."):( <div className="hotel-container  flex justify-center my-5">
       { open && <div className="hotel-slider w-full h-[20vh]">
          
          <div className="slid-wrap">
          <img onClick={handelOpen} src={photos[slidenumber].src} alt="" />
          </div>
          
        </div>}
        <div className="hotel-wrapper flex w-full max-w-screen-xl flex-col gap-4">
          <div className='full-wrapp flex justify-between'>
          <div className="left-wrapper flex flex-col gap-[1.3rem] flex-[3]">
          <h1 className='hotel-title text-2xl text-blue-400 font-bold mt-1'>{datas.name}</h1>
          <div className='hotel-address text-[12px] flex items-center gap-[5px] mt-[-8px]'>
            <FontAwesomeIcon icon={faLocationDot} className='pl-1'/>
            <span>{datas.address}</span>
          </div>
            <span className='hotel-distance mt-[-9px] text-blue-500 font-[500]'>Excellent location from {datas.distance}</span>
            <span className="hotelpicture-highlight bg-green-600 text-white w-max ml-[-1px] rounded-md mt-[-10px] mb-[5px] text-[14px] px-[4px]">
              Book a stay over ${datas.cheapestprice} of this property and get free airport texi
            </span>
            </div>
            <div className="right-wrapper relative flex-[1]">
            <button onClick={handleClick} className=' absolute top-[51px] left-[50px] nav-button text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5  text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mt-2 mx-1 h-[29px] mb-[10px]'>Reserve For Book Now!</button>
            </div>
            </div>
            <div className="hotel-images flex flex-wrap justify-evenly gap-y-2.5">
            {photos.map((photo, i) => (
                <div key={photo.id} className="hotelimg-wrapper w-[32%]">
                  <img
                    onClick={() => {
                      handelOpen(i);
                    }}
                    src={photo.src}
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="hotels-detail flex justify-between mt-[10px] gap-[10px] ">
              <div className="hoteldetails-text flex-[3]">
                <h1 className="hoteltext-title text-2xl mb-[5px]">{datas.title}</h1>
                <p className='hoteltext-desc'>
                  {datas.desc}
                {/* Nestled in the heart of the city, The Grandview Hotel boasts luxurious rooms with panoramic skyline views. Guests can indulge in fine dining at the rooftop restaurant, unwind at the serene spa, and enjoy the state-of-the-art fitness center. The hotel's elegant decor and attentive staff ensure a sophisticated and memorable stay for every visitor. */}
                </p>
              </div>
              <div className="hoteldetail-price bg-[#b8c4c5eb] mt-[10px] rounded-[10px] flex-[1] flex flex-col">
                <h1 className='text-2xl mt-[5px] ml-[9px]'>Perfect For {days} Nights Stand</h1>
                <span className='text-[13px] ml-[9px]'>located in the real heart of UK. This property has an excellent location score of <b>8.9</b></span>
                <strong className='ml-[9px]' >`${ days * datas.cheapestprice * option.room } {days} Nights`</strong> 
                <button onClick={handleClick} className='nav-button w-max text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5  text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mt-2 mx-1 h-[29px] ml-[5px] mb-[10px]'>Reserve For Book Now</button>
              </div>
            </div>
           
        </div>
      </div>)}
      <MailForm/>
      <Footer/>
      {openModel && <Reserve setOpenModel={setOpenModel} hotelId={id}/>}
    </div>
  )
}

export default Hotel
