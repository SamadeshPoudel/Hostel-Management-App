import React, { useEffect, useState } from 'react';
import LunchRequestItem from './LunchRequestItem';
import axios from 'axios';

const LunchRequestList = () => {
  const [requests, setRequests] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/requests/lunch')
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.error('Error fetching lunch requests from the server:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete/lunch/${id}`)
      .then(() => {
        setRequests(requests.filter(request => request._id !== id));
      })
      .catch(error => {
        console.error('Error deleting request:', error);
      });
  };

  const handleUpdate = (id) => {
    const requestToUpdate = requests.find(request => request._id === id);
    if (requestToUpdate) {
      setUpdateFormData(requestToUpdate);
      setShowUpdateForm(true);
    }
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const { name, college, phoneNumber } = e.target.elements;
    const updatedData = {
      name: name.value,
      college: college.value,
      phoneNumber: phoneNumber.value,
    };
    axios.put(`http://localhost:3000/update/lunch/${updateFormData._id}`, updatedData)
      .then(() => {
        setRequests(requests.map(request => request._id === updateFormData._id ? { ...request, ...updatedData } : request));
        setShowUpdateForm(false);
        setUpdateFormData(null);
      })
      .catch(error => {
        console.error('Error updating request:', error);
      });
  };

  return (
    <div>
      <h2>Lunch Requests</h2>
      {showUpdateForm && (
        <form onSubmit={handleSubmitUpdate}>
          <input
            type="text"
            name="name"
            defaultValue={updateFormData.name}
            required
          />
          <input
            type="text"
            name="college"
            defaultValue={updateFormData.college}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            defaultValue={updateFormData.phoneNumber}
            required
          />
          <button type="submit">Submit Update</button>
        </form>
      )}
      <ul>
        {requests.map(request => (
          <LunchRequestItem
            key={request._id}
            request={request}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default LunchRequestList;
 