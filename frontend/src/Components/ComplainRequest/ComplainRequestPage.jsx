import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';

const ComplainRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ name: '', issue: '', roomNumber: '' });

  useEffect(() => {
    fetchRequests();
  }, []);

  // Fetch existing complain requests
  const fetchRequests = async () => {
    try {
      // const response = await axios.get('http://localhost:3000/requests/complains');
      const response = await axios.get('https://hostel-management-app-e3rs.onrender.com/requests/complains');

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
      const response = await axios.post('https://hostel-management-app-e3rs.onrender.com/create/complain', newRequest, {
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
      await axios.delete(`https://hostel-management-app-e3rs.onrender.com/delete/complains/${id}`, {
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
      const response = await axios.put(`https://hostel-management-app-e3rs.onrender.com/update/complains/${id}`, updatedRequest, {
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
      <Navbar />
    
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Register an Issue</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newRequest.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="text"
          name="issue"
          placeholder="Issue"
          value={newRequest.issue}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="text"
          name="roomNumber"
          placeholder="Room Number"
          value={newRequest.roomNumber}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
          Submit
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8 mb-4">Today's Requests</h2>
      <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
        {requests.length > 0 ? (
          requests.map(request => (
            <li key={request._id} className="border-b last:border-none pb-4 last:pb-0">
              {request.isEditing ? (
                <div className="space-y-2">
                  <input 
                    type="text" 
                    name="name" 
                    value={request.name} 
                    onChange={(e) => handleChange(e, request._id)} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <input 
                    type="text" 
                    name="issue" 
                    value={request.issue} 
                    onChange={(e) => handleChange(e, request._id)} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <input 
                    type="text" 
                    name="roomNumber" 
                    value={request.roomNumber} 
                    onChange={(e) => handleChange(e, request._id)} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <button onClick={() => handleSaveUpdate(request._id)} className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
                    Save
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <p><strong>Name:</strong> {request.name}</p>
                  <p><strong>Issue:</strong> {request.issue}</p>
                  <p><strong>Room Number:</strong> {request.roomNumber}</p>
                  <div className="flex space-x-4">
                    <button onClick={() => handleEdit(request._id)} className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(request._id)} className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300">
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>You haven't made any requests</li>
        )}
      </ul>
    </div>
    </div>
  )
}

export default ComplainRequestPage;
