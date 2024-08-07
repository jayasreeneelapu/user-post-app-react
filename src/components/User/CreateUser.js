import React, {useState} from 'react';
import {createUser} from '../../services/apiService';

const CreateUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(formData).then(response => {
            console.log(response.data);
            setFormData({        
            name: '',
            email: '',
            gender: '',
            status: ''});
        })
        .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={formData.name}
                onChange={(e)=> setFormData({...formData, name:e.target.value})}
                placeholder="Name"
            />
            <input 
                type="email"
                value={formData.email}
                onChange={(e)=> setFormData({...formData, email:e.target.value})}
                placeholder="Email"
            />
            <input 
                type="text"
                value={formData.gender}
                onChange={(e)=> setFormData({...formData, gender:e.target.value})}
                placeholder="Gender"
            />
            <input 
                type="text"
                value={formData.status}
                onChange={(e)=> setFormData({...formData, status:e.target.value})}
                placeholder="Status"
            />

            <button type="submit">Create User</button>
        </form>
    )
};

export default CreateUser;