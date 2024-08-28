import React, { useContext, useState } from 'react'
import "../App.css";
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({
        username:undefined,
        password:undefined
    });
    const {loading,error,dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleChange = (e)=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }
    const handeleLogin = async(e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            navigate("/")
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE",payload:error.response.data})
            
        }
    }
    

    
  return (
    <div className='login'>
      <div className="l-container">
        <input type="text" placeholder='username' onChange={handleChange} id='username' className='l-input' />
        <input type="password" placeholder='password' onChange={handleChange} id='password' className='l-input' />
        <button disabled={loading} onClick={handeleLogin} className="l-btn">Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Login
