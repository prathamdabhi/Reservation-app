import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className='nav-bar h-[50px] bg-blue-600 flex justify-center'>
      <div className='nav-container container flex items-center justify-between px-4 md:px-8 lg:px-16 w-full max-w-screen-xl text-white capitalize'>
        <Link to="/">
          <span className='nav-logo text-white font-semibold text-xl sm:text-2xl'>Hotel</span>
        </Link>
        <div className="nav-item flex space-x-4">
          <Link to="/register">
            <button className='nav-button text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-4 sm:px-5 py-2.5 inline-flex items-center'>
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className='nav-button text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-4 sm:px-5 py-2.5 inline-flex items-center'>
              {user ? user.username : "Login"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

