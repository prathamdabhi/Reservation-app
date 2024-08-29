import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/auth/register", credentials);
            navigate("/login");  // Redirect to login after successful registration
        } catch (error) {
            setError(error.response.data);
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 p-4'>
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className='text-2xl text-center text-blue-600 font-bold uppercase mb-6'>Register</h1>
                <input 
                    type="text" 
                    placeholder='Username' 
                    onChange={handleChange} 
                    id='username' 
                    className='block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                />
                <input 
                    type="email" 
                    placeholder='Email' 
                    onChange={handleChange} 
                    id='email' 
                    className='block w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    onChange={handleChange} 
                    id='password' 
                    className='block w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                />
                <button 
                    onClick={handleRegister} 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Register
                </button>
                {error && <span className="text-red-500 mt-4 block text-center">{error.message}</span>}
            </div>
        </div>
    );
}

export default Register;
