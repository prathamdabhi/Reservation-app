import React, { useState } from 'react';
import axios from 'axios';

function CreateRoom() {
    const [room, setRoom] = useState({
        hotelId: "",
        title: "",
        price: 0,
        maxPeople: 0,
        desc: "",
        roomNumbers: []
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setRoom(prev => ({ ...prev, [id]: value }));
    };

    const handleRoomNumbersChange = (e) => {
        const roomNumbers = e.target.value.split(",").map(num => ({ number: Number(num) }));
        setRoom(prev => ({ ...prev, roomNumbers }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send room data to backend
            const response = await axios.post(`http://localhost:8800/api/room/${room.hotelId}`, room, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (err) {
            setError(err.response ? err.response.data : err.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Create New Room</h2>
                <input type="text" placeholder="Hotel ID" id="hotelId" onChange={handleChange} className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Room Title" id="title" onChange={handleChange} className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="number" placeholder="Price" id="price" onChange={handleChange} className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="number" placeholder="Max People" id="maxPeople" onChange={handleChange} className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea placeholder="Description" id="desc" onChange={handleChange} className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <input type="text" placeholder="Room Numbers (comma-separated)" id="roomNumbers" onChange={handleRoomNumbersChange} className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Create Room</button>
                {error && <span className="text-red-500 mt-2 block">{error.message}</span>}
            </div>
        </div>
    );
}

export default CreateRoom;
