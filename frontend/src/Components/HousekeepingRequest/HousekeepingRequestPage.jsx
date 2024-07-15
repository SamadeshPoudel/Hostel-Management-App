// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// axios

// const HousekeepingRequestPage = () => {
//   const [requests, setRequests] = useState([]);
//   const [newRequest, setNewRequest] = useState({name:"", roomNumber:""});

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   //FETCH EXISTING HOUSEKEEPING REQUESTS
//   const fetchRequests = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/requests/housekeeping');
//       console.log('Response data:', response.data); // Log the response data
//       setRequests(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error('Error fetching housekeeping requests:', error);
//       setRequests([]); // Ensure requests is an empty array on error
//     }
//   };

//    // Handle form input changes
//    const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRequest({ ...newRequest, [name]: value });
//   };
  

//   // Handle form submission to create a new housekeeping request
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token'); // Retrieve the token from local storage
//       const response = await axios.post('http://localhost:3000/create/housekeeping', newRequest, {
//         headers: {
//           'Authorization': token // Include the token in the request headers
//         }
//       });
//       setRequests([...requests, response.data]);
//       setNewRequest({ name: '', roomNumber: '' });
//     } catch (error) {
//       console.error('Error creating housekeeping request:', error);
//     }
//   };

//   // Handle deleting housekeeping request
//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve the token from local storage
//       await axios.delete(`http://localhost:3000/delete/housekeeping/${id}`, {
//         headers: {
//           'Authorization': token // Include the token in the request headers
//         }
//       });
//       setRequests(requests.filter(request => request._id !== id));
//     } catch (error) {
//       console.error('Error deleting housekeeping request:', error);
//     }
//   };

//   // Handle editing housekeeping request
//   const handleEdit = (id) => {
//     const updatedRequests = requests.map(request =>
//       request._id === id ? { ...request, isEditing: true } : request
//     );
//     setRequests(updatedRequests);
//   };

//   const handleSaveUpdate = async (id) => {
//     const updatedRequest = requests.find(request => request._id === id);
//     try {
//       const token = localStorage.getItem('token'); // Retrieve the token from local storage
//       const response = await axios.put(`http://localhost:3000/update/housekeeping/${id}`, updatedRequest, {
//         headers: {
//           'Authorization': token // Include the token in the request headers
//         }
//       });
//       const updatedHousekeeping = response.data.updatedHousekeeping; // Extract the updated lunch data
//       setRequests(requests.map(request => (request._id === id ? updatedHousekeeping : request)));
//     } catch (error) {
//       console.error('Error editing housekeeping request:', error);
//     }
//   };

//   const handleChange = (e, id) => {
//     const { name, value } = e.target;
//     const updatedRequests = requests.map(request =>
//       request._id === id ? { ...request, [name]: value } : request
//     );
//     setRequests(updatedRequests);
//   };

//   console.log('Requests:', requests); // Added to see the requests field in console

//   return (
//     <div>
//       <h1>Request Housekeeping</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={newRequest.name}
//           onChange={handleInputChange}
//           required
//         />

//         <input
//           type="text"
//           name="roomNumber"
//           placeholder="Room Number"
//           value={newRequest.roomNumber}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Today's Request</h2>
//       <ul>
//         {requests.length > 0 ? (
//           requests.map(request => (
//             <li key={request._id}>
//               {request.isEditing ? (
//                 <div>
//                   <input 
//                     type="text" 
//                     name="name" 
//                     value={request.name} 
//                     onChange={(e) => handleChange(e, request._id)} 
//                   />
                  
//                   <input 
//                     type="text" 
//                     name="roomNumber" 
//                     value={request.roomNumber} 
//                     onChange={(e) => handleChange(e, request._id)} 
//                   />
//                   <button onClick={() => handleSaveUpdate(request._id)}>Save</button>
//                 </div>
//               ) : (
//                 <div>
//                   <p><strong>Name:</strong> {request.name}</p>
                  
//                   <p><strong>Room Number:</strong> {request.roomNumber}</p>
//                   <button onClick={() => handleEdit(request._id)}>Edit</button>
//                   <button onClick={() => handleDelete(request._id)}>Delete</button>
//                 </div>
//               )}
//             </li>
//           ))
//         ) : (
//           <li>No requests found.</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default HousekeepingRequestPage

//GPT-4 CODE: to solve after save button and its not rendering anything on name and roomNumber field
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HousekeepingRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ name: "", roomNumber: "" });

  useEffect(() => {
    fetchRequests();
  }, []);

  // Fetch existing housekeeping requests
  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/requests/housekeeping');
      console.log('Response data:', response.data); // Log the response data
      setRequests(Array.isArray(response.data) ? response.data.map(request => ({ ...request, isEditing: false })) : []);
    } catch (error) {
      console.error('Error fetching housekeeping requests:', error);
      setRequests([]); // Ensure requests is an empty array on error
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  // Handle form submission to create a new housekeeping request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const response = await axios.post('http://localhost:3000/create/housekeeping', newRequest, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      setRequests([...requests, { ...response.data, isEditing: false }]);
      setNewRequest({ name: '', roomNumber: '' });
    } catch (error) {
      console.error('Error creating housekeeping request:', error);
    }
  };

  // Handle deleting a housekeeping request
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      await axios.delete(`http://localhost:3000/delete/housekeeping/${id}`, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      setRequests(requests.filter(request => request._id !== id));
    } catch (error) {
      console.error('Error deleting housekeeping request:', error);
    }
  };

  // Handle editing a housekeeping request
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
      const response = await axios.put(`http://localhost:3000/update/housekeeping/${id}`, updatedRequest, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      const updatedHousekeeping = response.data.updatedHousekeeping; // Extract the updated lunch data
      setRequests(requests.map(request => (request._id === id ? { ...updatedHousekeeping, isEditing: false } : request)));
    } catch (error) {
      console.error('Error editing housekeeping request:', error);
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
      <h1>Request Housekeeping</h1>
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
          name="roomNumber"
          placeholder="Room Number"
          value={newRequest.roomNumber}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Today's Requests</h2>
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
                    name="roomNumber" 
                    value={request.roomNumber} 
                    onChange={(e) => handleChange(e, request._id)} 
                  />
                  <button onClick={() => handleSaveUpdate(request._id)}>Save</button>
                </div>
              ) : (
                <div>
                  <p><strong>Name:</strong> {request.name}</p>
                  <p><strong>Room Number:</strong> {request.roomNumber}</p>
                  <button onClick={() => handleEdit(request._id)}>Edit</button>
                  <button onClick={() => handleDelete(request._id)}>Delete</button>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>You haven't made any requests today</li>
        )}
      </ul>
    </div>
  );
}

export default HousekeepingRequestPage;






