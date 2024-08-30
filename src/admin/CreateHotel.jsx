import React, { useState } from 'react';
import axios from 'axios';
import "../App.css";
import Cookies from 'js-cookie';

function CreateHotel() {
    const [hotel, setHotel] = useState({
        name: "",
        type: "",
        city: "",
        address: "",
        distance: "",
        img: [],  // You can add image URLs here if needed
        title: "",
        desc: "",
        rating: 0,
        rooms: [], // Will contain room IDs, populated after room creation
        cheapestprice: 0,
        featured: false
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setHotel(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Get the token from cookies
            const token = Cookies.get('token');
            
            // Send the hotel data to the backend for creation
            const response = await axios.post("http://localhost:8800/api/hotel", hotel, {
                headers: {
                    // Include the token in the Authorization header if available
                    ...(token && { 'Authorization': `Bearer ${token}` }),
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
        } catch (error) {
            setError(error.response ? error.response.data : error.message);
            console.error('Error creating hotel:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Create New Hotel</h2>
                
                <input 
                    type="text" 
                    placeholder="Hotel Name" 
                    id="name" 
                    value={hotel.name}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="text" 
                    placeholder="Type" 
                    id="type" 
                    value={hotel.type}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="text" 
                    placeholder="City" 
                    id="city" 
                    value={hotel.city}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="text" 
                    placeholder="Address" 
                    id="address" 
                    value={hotel.address}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="text" 
                    placeholder="Distance from City Center" 
                    id="distance" 
                    value={hotel.distance}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="text" 
                    placeholder="Title" 
                    id="title" 
                    value={hotel.title}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <textarea 
                    placeholder="Description" 
                    id="desc" 
                    value={hotel.desc}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <input 
                    type="number" 
                    placeholder="Rating should be 1 to 5" 
                    id="rating" 
                    value={hotel.rating}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="number" 
                    placeholder="Cheapest Price" 
                    id="cheapestprice" 
                    value={hotel.cheapestprice}
                    onChange={handleChange} 
                    className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <div className="flex items-center mb-4">
                    <label className="mr-2 text-gray-700">Featured:</label>
                    <input 
                        type="checkbox" 
                        id="featured" 
                        checked={hotel.featured}
                        onChange={(e) => setHotel(prev => ({ ...prev, featured: e.target.checked }))} 
                        className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded" 
                    />
                </div>
                <button 
                    onClick={handleSubmit} 
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Create Hotel
                </button>
                {error && <span className="text-red-500 mt-2 block">{error.message}</span>}
            </div>
        </div>
    );
}

export default CreateHotel;
