import React, { useEffect, useState } from 'react';
import useFatch from '../hookes/usefetch';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HotelReport() {
    const [hotels, setHotels] = useState([]);
    const { datas, loading, error } = useFatch('http://localhost:8800/api/hotel/report');

    useEffect(() => {
        if (!loading && !error) {
            setHotels(datas);
        }
    }, [datas, loading, error]);

    return (
        <div>
            <Navbar />
            <div className="report-container max-w-screen-lg mx-auto my-10">
                <h1 className="text-2xl font-bold mb-5">Hotel Report</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error loading data...</p>
                ) : (
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Type</th>
                                <th className="px-4 py-2">City</th>
                                <th className="px-4 py-2">Address</th>
                                
                                <th className="px-4 py-2">Cheapest Price</th>
                                <th className="px-4 py-2">Featured</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotels.map((hotel) => (
                                <tr key={hotel._id}>
                                    <td className="border px-4 py-2">{hotel.name}</td>
                                    <td className="border px-4 py-2">{hotel.type}</td>
                                    <td className="border px-4 py-2">{hotel.city}</td>
                                    <td className="border px-4 py-2">{hotel.address}</td>
                                    
                                    <td className="border px-4 py-2">${hotel.cheapestprice}</td>
                                    <td className="border px-4 py-2">{hotel.featured ? 'Yes' : 'No'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            
        </div>
    );
}
export default HotelReport