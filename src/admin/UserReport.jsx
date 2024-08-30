import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function UserReport() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/users/userReport');
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Navbar/>
            <div className='container mx-auto py-4'>
            <h1 className='text-2xl font-bold text-center'>User Report</h1>
            <table className='min-w-full bg-white mt-4 border-2 border-solid'>
                <thead>
                    <tr className='border-2 file: border-solid border-b'>
                        <th className='py-2 px-4 border-b'>Username</th>
                        <th className='py-2 px-4 border-b'>Email</th>
                        <th className='py-2 px-4 border-b'>Admin</th>
                        <th className='py-2 px-4 border-b'>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className='py-2 px-4 border-b'>{user.username}</td>
                            <td className='py-2 px-4 border-b'>{user.email}</td>
                            <td className='py-2 px-4 border-b'>{user.isAdmin ? 'Yes' : 'No'}</td>
                            <td className='py-2 px-4 border-b'>{new Date(user.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default UserReport;