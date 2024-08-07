import React, {useState, useEffect} from 'react';
import {getUser, updateUser, deleteUser} from '../../services/apiService';
import { useParams } from 'react-router-dom';

const UserDetails = ({match}) => {
    const [user, setUser] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        getUser(id)
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            console.error('Error in UserDetails component', error);
        })
    }, [id]);

    if(!user) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Status: {user.status}</p>
        </div>
    )

};

export default UserDetails;