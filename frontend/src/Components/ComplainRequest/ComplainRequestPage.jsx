import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ComplainRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ name: '', issue: '', roomNumber: '' });

  useEffect(() => {
    fetchRequests();
  }, []);

  // Fetch existing complain requests
  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/requests/complains');
      console.log('Response data:', response.data); // Log the response data
      setRequests(Array.isArray(response.data) ? response.data.map(request => ({ ...request, isEditing: false })) : []);
    } catch (error) {
      console.error('Error fetching complain requests:', error);
      setRequests([]); // Ensure requests is an empty array on error
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  // Handle form submission to create a new complain request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const response = await axios.post('http://localhost:3000/create/complain', newRequest, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      setRequests([...requests, { ...response.data, isEditing: false }]);
      setNewRequest({ name: '', issue: '', roomNumber: '' });
    } catch (error) {
      console.error('Error creating complain request:', error);
    }
  };

  // Handle deleting a complain request
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      await axios.delete(`http://localhost:3000/delete/complains/${id}`, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      setRequests(requests.filter(request => request._id !== id));
    } catch (error) {
      console.error('Error deleting complain request:', error);
    }
  };

  // Handle editing a complain request
  const handleEdit = (id) => {
    const updatedRequests = requests.map(request =>
      request._id === id ? { ...request, isEditing: true } : request
    );
    setRequests(updatedRequests);
  };

  const handleSaveUpdate = async (id) => {
    const updatedRequest = requests.find(request => request._id === id);
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const response = await axios.put(`http://localhost:3000/update/complains/${id}`, updatedRequest, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      const updatedComplain = response.data.updatedComplain; // Extract the updated lunch data
      setRequests(requests.map(request => (request._id === id ? { ...updatedComplain, isEditing: false } : request)));
    } catch (error) {
      console.error('Error editing complain request:', error);
    }
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    const updatedRequests = requests.map(request =>
      request._id === id ? { ...request, [name]: value } : request
    );
    setRequests(updatedRequests);
  };

  console.log('Requests:', requests); // Added to see the requests field in console


  return (
    <div>
      <h1>Register an issue</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newRequest.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="issue"
          placeholder="issue"
          value={newRequest.issue}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={newRequest.roomNumber}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Today's Request</h2>
      <ul>
        {requests.length > 0 ? (
          requests.map(request => (
            <li key={request._id}>
              {request.isEditing ? (
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    value={request.name} 
                    onChange={(e) => handleChange(e, request._id)} 
                  />
                  <input 
                    type="text" 
                    name="issue" 
                    value={request.issue} 
                    onChange={(e) => handleChange(e, request._id)} 
                  />
                  <input 
                    type="text" 
                    name="roomNumber" 
                    value={request.roomNumber} 
                    onChange={(e) => handleChange(e, request._id)} 
                  />
                  <button onClick={() => handleSaveUpdate(request._id)}>Save</button>
                </div>
              ) : (
                <div>
                  <p><strong>Name:</strong> {request.name}</p>
                  <p><strong>Issue:</strong> {request.issue}</p>
                  <p><strong>Room Number:</strong> {request.roomNumber}</p>
                  <button onClick={() => handleEdit(request._id)}>Edit</button>
                  <button onClick={() => handleDelete(request._id)}>Delete</button>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>You haven't made any requests</li>
        )}
      </ul>
    </div>
  )
}

export default ComplainRequestPage