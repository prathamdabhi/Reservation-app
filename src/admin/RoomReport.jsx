import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const RoomReport = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/room/report');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
        
      <h1 className="text-2xl font-bold mb-4">Room Report</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Max People</th>
            <th className="py-2 px-4 border-b">Room Numbers</th>
            
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td className="py-2 px-4 border-b">{room.title}</td>
              <td className="py-2 px-4 border-b">{room.desc}</td>
              <td className="py-2 px-4 border-b">${room.price}</td>
              <td className="py-2 px-4 border-b">{room.maxPeaple}</td>
              <td className="py-2 px-4 border-b">
                {room.roomNumbers.map((roomNumber) => (
                  <div key={roomNumber.number}>{roomNumber.number}</div>
                ))}
              </td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default RoomReport;