import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

const HomePage = () => {
  // const isAuthenticated = localStorage.getItem('token') !==null;
  console.log("Home component rendered");

  // if(!isAuthenticated){
  //   return <Navigate to='/login' />
  // }
  return (
    <div>
    <h1>Welcome to Home Page!</h1>
    <button>Request Lunch</button>
    <button>Request HouseKeeping</button>
    <button>Register an issue</button>

    </div>
  )
}

export default HomePage

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik5hcmF5YW5AZ21haWwuY29tIiwidXNlcklkIjoiMTJkYzM1YTUtMzMxMS00YWJiLTkxNmEtZWE0NWU3M2E1OTRkIiwiaWF0IjoxNzE5NjY2NDI1fQ.wMz_2252KWEpLvCuHSvPlgt3UVR6ck3cKg_punF8ZYM