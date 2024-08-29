import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate(credentials.username === "pratham bhai" ? "/admin" : "/");
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 p-4'>
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className='text-2xl text-center text-blue-600 font-bold uppercase mb-6'>Login</h1>
                <input
                    type="text"
                    placeholder='Username'
                    onChange={handleChange}
                    id='username'
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
                    disabled={loading}
                    onClick={handleLogin}
                    className={`w-full py-2 rounded-md ${loading ? 'bg-blue-400' : 'bg-blue-500'} text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`}
                >
                    {loading ? 'Loading...' : 'Login'}
                </button>
                {error && <span className="text-red-500 mt-4 block text-center">{error.message}</span>}
            </div>
        </div>
    );
}

export default Login;
