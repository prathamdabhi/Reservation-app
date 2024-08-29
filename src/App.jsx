import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Home from './components/Home';

import List from './components/List';
import Hotel from './hotels/Hotel';
import Login from './components/Login';
import Thank from './components/Thank';
import Register from './components/Register';
import Admin from './admin/admin';
import CreateHotel from './admin/CreateHotel';
import CreateRoom from './admin/CreateRoom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotel' element={<List/>} />
        <Route path='/hotel/:id' element={<Hotel/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/thank' element={<Thank/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/addhotel' element={<CreateHotel/>} />
        <Route path='/addroom' element={<CreateRoom/>} />
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

