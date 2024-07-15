import React from 'react'
import { BrowserRouter, Navigate, Routes, Route, Link} from 'react-router-dom';


const HomePage = () => {
  // const isAuthenticated = localStorage.getItem('token') !==null;
  console.log("Home component rendered");

  // if(!isAuthenticated){
  //   return <Navigate to='/login' />
  // }

  return (
    <div>
    <h1>Welcome to Home Page!</h1>
    <Link to={"/request-lunch"}><button>Request Lunch</button></Link>
    <Link to={"/request-housekeeping"}><button>Request Housekeeping</button></Link>
    <Link to={"/register-issue"}><button>Register an issue</button></Link>

    </div>
  )
}

export default HomePage