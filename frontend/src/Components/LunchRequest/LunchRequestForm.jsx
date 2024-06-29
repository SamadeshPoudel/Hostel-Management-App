import React, { useState } from 'react';
import axios from 'axios';

const LunchRequestForm = ({ onRequestCreated }) => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = { name, college, phoneNumber };
    axios.post('http://localhost:3000/requests/lunch', newRequest)
      .then(response => {
        setName('');
        setCollege('');
        setPhoneNumber('');
        onRequestCreated(response.data);
      })
      .catch(error => {
        console.error('Error creating new lunch request:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />
      <input
        type="text"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        placeholder="Enter your college"
        required
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter your phone number"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LunchRequestForm;
