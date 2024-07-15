import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const RegistrationPage = () => {
    const [formData, setFormData] = useState({username:"", email:"",password:""});
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', formData);
            console.log(response.data);
            //redirecting to login page
            navigate('/login')

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>

        <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} required />

        <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />

        <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />

        <button type='submit'>Register</button>

        </form>
        <p>Already a user?<a href='/login'>Login here</a></p>


    </div>
  )
}

export default RegistrationPage