import React, {useState, useEffect} from 'react';
import {getUsers} from '../../services/apiService';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
        .then(response => {setUsers(response.data);})
        .catch(error => {
            console.error('Error while fetching the users', error);
        });
    },[]);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>

            <Link to="/create-user">Create New User</Link>
        </div>
    );

};
export default Users;