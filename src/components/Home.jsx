import React from 'react'
import Navbar from './Navbar'
import Header from './Header' 
import Feature from './feature'
import "../App.css";
import PropertyList from './PropertyList';
import FeatureProperty from './FeatureProperty';
import MailForm from './MailForm';
import Footer from './Footer';


function Home() {
  return (
    <div >
        <Navbar/>
        <Header  />
        <div className="homeContainer">
          <Feature />
          <h1 className="homeTitle w-full max-w-screen-lg font-bold text-2xl ">Select BY Property Type</h1>
          <PropertyList/>
          <h1 className="homeTitle w-full max-w-screen-lg font-bold text-2xl ">Guest Houses</h1>
          <FeatureProperty/>
          <MailForm/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home
