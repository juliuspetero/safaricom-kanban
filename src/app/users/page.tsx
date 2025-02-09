import React from 'react';
import User from '@/types/User';
import UserComponent from '@/components/User/User.Component';
import Container from '@mui/material/Container';

const Users = async () => {
    const results = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await results.json();
  return (
    <Container>
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Users Page</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100" >
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Username</th>
                        <th className="py-2 px-4 border-b">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.username}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                    {users.length > 0 ? (
                        users.map(user => <UserComponent key={user.id} user={user} />)
                        ) : (
                            <p>No User Available at the moment</p>
                        )
                    }
            
            </div>
        </div>
    </Container>
  )
}

export default Users;
