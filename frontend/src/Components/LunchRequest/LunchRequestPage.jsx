// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LunchRequestPage = () => {
//   const [requests, setRequests] = useState([]);
//   const [newRequest, setNewRequest] = useState({ name: '', college: '', phoneNumber: '' });

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   // Fetch existing lunch requests
//   const fetchRequests = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/requests/lunch');
//       console.log('Response data:', response.data); // Log the response data
//       setRequests(Array.isArray(response.data.lunchReq) ? response.data.lunchReq : []);
//     } catch (error) {
//       console.error('Error fetching lunch requests:', error);
//       setRequests([]); // Ensure requests is an empty array on error
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRequest({ ...newRequest, [name]: value });
//   };

//   // Handle form submission to create a new lunch request
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const token = localStorage.getItem('token'); // Retrieve the token from local storage
//     const response = await axios.post('http://localhost:3000/create/lunch', newRequest, {
//       headers: {
//         'Authorization': token // Include the token in the request headers
//       }
//     });
//     setRequests([...requests, response.data]);
//     setNewRequest({ name: '', college: '', phoneNumber: '' });
//   } catch (error) {
//     console.error('Error creating lunch request:', error);
//   }
// };

// // Handle deleting a lunch request
// const handleDelete = async (id) => {
//   try {
//     const token = localStorage.getItem('token'); // Retrieve the token from local storage
//     await axios.delete(`http://localhost:3000/delete/lunch/${id}`, {
//       headers: {
//         'Authorization': token// Include the token in the request headers
//       }
//     });
//     setRequests(requests.filter(request => request._id !== id));
//   } catch (error) {
//     console.error('Error deleting lunch request:', error);
//   }
// };

//   // Handle editing a lunch request
//   const handleEdit = async (id) => {
//     const updatedRequest = requests.find(request => request._id === id);
//     const newName = prompt('Enter new name:', updatedRequest.name);
//     const newCollege = prompt('Enter new college:', updatedRequest.college);
//     const newPhoneNumber = prompt('Enter new phone number:', updatedRequest.phoneNumber);

//     if (newName && newCollege && newPhoneNumber) {
//       try {
//         const response = await axios.put(`http://localhost:3000/update/lunch/${id}`, {
//           name: newName,
//           college: newCollege,
//           phoneNumber: newPhoneNumber
//         });
//         setRequests(requests.map(request => (request._id === id ? response.data : request)));
//       } catch (error) {
//         console.error('Error editing lunch request:', error);
//       }
//     }
//   };
//   console.log('Requests:', requests); //added to see the requests field in console

//   return (
//     <div>
//       <h1>Request Lunch</h1>
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
//           name="college"
//           placeholder="College"
//           value={newRequest.college}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="phoneNumber"
//           placeholder="Phone Number"
//           value={newRequest.phoneNumber}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Previous Requests</h2>
//       <ul>
//         {requests.length > 0 ? (
//           requests.map(request => (
//             <li key={request._id}>
//               {request.name} - {request.college} - {request.phoneNumber}
//               <button onClick={() => handleEdit(request._id)}>Edit</button>
//               <button onClick={() => handleDelete(request._id)}>Delete</button>
//             </li>
//           ))
//         ) : (
//           <li>No requests found.</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default LunchRequestPage;


//GPT CODE- WHICH DOES EVERYTHING BUT CANT SHOW ALL THE PREVIOUS REQUESTS OF THE USER, ONLY SHOWS RECENT ONE

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LunchRequestPage = () => {
//   const [requests, setRequests] = useState([]);
//   const [newRequest, setNewRequest] = useState({ name: '', college: '', phoneNumber: '' });

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   // Fetch existing lunch requests
//   const fetchRequests = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/requests/lunch');
//       console.log('Response data:', response.data); // Log the response data
//       setRequests(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error('Error fetching lunch requests:', error);
//       setRequests([]); // Ensure requests is an empty array on error
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRequest({ ...newRequest, [name]: value });
//   };

//   // Handle form submission to create a new lunch request
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token'); // Retrieve the token from local storage
//       const response = await axios.post('http://localhost:3000/create/lunch', newRequest, {
//         headers: {
//           'Authorization': token // Include the token in the request headers
//         }
//       });
//       setRequests([...requests, response.data]);
//       setNewRequest({ name: '', college: '', phoneNumber: '' });
//     } catch (error) {
//       console.error('Error creating lunch request:', error);
//     }
//   };

//   // Handle deleting a lunch request
//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve the token from local storage
//       await axios.delete(`http://localhost:3000/delete/lunch/${id}`, {
//         headers: {
//           'Authorization': token // Include the token in the request headers
//         }
//       });
//       setRequests(requests.filter(request => request._id !== id));
//     } catch (error) {
//       console.error('Error deleting lunch request:', error);
//     }
//   };

//   // Handle editing a lunch request
//   const handleEdit = async (id) => {
//     const updatedRequest = requests.find(request => request._id === id);
//     const newName = prompt('Enter new name:', updatedRequest.name);
//     const newCollege = prompt('Enter new college:', updatedRequest.college);
//     const newPhoneNumber = prompt('Enter new phone number:', updatedRequest.phoneNumber);

//     if (newName && newCollege && newPhoneNumber) {
//       try {
//         const token = localStorage.getItem('token'); // Retrieve the token from local storage
//         const response = await axios.put(`http://localhost:3000/update/lunch/${id}`, {
//           name: newName,
//           college: newCollege,
//           phoneNumber: newPhoneNumber
//         }, {
//           headers: {
//             'Authorization': token // Include the token in the request headers
//           }
//         });
//         console.log('Updated request:', response.data)//LOGGING THE UPDATED REQUEST
//         const updatedLunch = response.data.updatedLunch; //EXTRACTING THE UPDATED LUNCH DATA
//         setRequests(requests.map(request => (request._id === id ? updatedLunch: request)));
//       } catch (error) {
//         console.error('Error editing lunch request:', error);
//       }
//     }
//   };

//   console.log('Requests:', requests); // Added to see the requests field in console

//   return (
//     <div>
//       <h1>Request Lunch</h1>
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
//           name="college"
//           placeholder="College"
//           value={newRequest.college}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="text"
//           name="phoneNumber"
//           placeholder="Phone Number"
//           value={newRequest.phoneNumber}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Previous Requests</h2>
//       <ul>
//         {requests.length > 0 ? (
//           requests.map(request => (
//             <li key={request._id}>
//               {request.name} - {request.college} - {request.phoneNumber}
//               <button onClick={() => handleEdit(request._id)}>Edit</button>
//               <button onClick={() => handleDelete(request._id)}>Delete</button>
//             </li>
//           ))
//         ) : (
//           <li>No requests found.</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default LunchRequestPage;

//NEW CODE WITH BETTER FORM FOR EDITING with tailwind css in it
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

const LunchRequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ name: '', college: '', phoneNumber: '' });

  useEffect(() => {
    fetchRequests();
  }, []);

  // Fetch existing lunch requests
  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/requests/lunch');
      console.log('Response data:', response.data); // Log the response data
      setRequests(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching lunch requests:', error);
      setRequests([]); // Ensure requests is an empty array on error
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  // Handle form submission to create a new lunch request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const response = await axios.post('http://localhost:3000/create/lunch', newRequest, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      setRequests([...requests, response.data]);
      setNewRequest({ name: '', college: '', phoneNumber: '' });
    } catch (error) {
      console.error('Error creating lunch request:', error);
    }
  };

  // Handle deleting a lunch request
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      await axios.delete(`http://localhost:3000/delete/lunch/${id}`, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      setRequests(requests.filter(request => request._id !== id));
    } catch (error) {
      console.error('Error deleting lunch request:', error);
    }
  };

  // Handle editing a lunch request
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
      const response = await axios.put(`http://localhost:3000/update/lunch/${id}`, updatedRequest, {
        headers: {
          'Authorization': token // Include the token in the request headers
        }
      });
      const updatedLunch = response.data.updatedLunch; // Extract the updated lunch data
      setRequests(requests.map(request => (request._id === id ? updatedLunch : request)));
    } catch (error) {
      console.error('Error editing lunch request:', error);
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
      <h1 className="text-2xl font-bold mb-4">Request Lunch</h1>
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
          name="college"
          placeholder="College"
          value={newRequest.college}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={newRequest.phoneNumber}
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
                    name="college" 
                    value={request.college} 
                    onChange={(e) => handleChange(e, request._id)} 
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  <input 
                    type="text" 
                    name="phoneNumber" 
                    value={request.phoneNumber} 
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
                  <p><strong>College:</strong> {request.college}</p>
                  <p><strong>Phone Number:</strong> {request.phoneNumber}</p>
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
          <li>You haven't made any requests today</li>
        )}
      </ul>
    </div>
    </div>
  );
};

export default LunchRequestPage;
