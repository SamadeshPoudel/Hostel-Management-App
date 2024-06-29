import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const LoginPage = () => {
    const [formData, setFormData] = useState({email:"", password:""});
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", formData);
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            navigate('/home');

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />

        <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} required />

        <button type='submit'>Login</button>

    </form>
  )
}

export default LoginPage