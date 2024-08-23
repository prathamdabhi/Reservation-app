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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotels:id' element={<Hotel/>} />
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
