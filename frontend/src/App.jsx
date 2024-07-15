import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ProtectedRoute from './ProtectedRoute';
import LunchRequestPage from './Components/LunchRequest/LunchRequestPage';
import HousekeepingRequestPage from './Components/HousekeepingRequest/HousekeepingRequestPage';
import ComplainRequestPage from './Components/ComplainRequest/ComplainRequestPage';


const App = () => {
  return (
   <BrowserRouter>
   <Routes>

    <Route path='/register' element={<RegistrationPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path="/home" element={
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    }/>
    <Route path="/" element={<RegistrationPage />} />

    
    <Route path='/request-lunch' element={
      <ProtectedRoute>
        <LunchRequestPage />
      </ProtectedRoute>
    } />

    <Route path='/request-housekeeping' element={
      <ProtectedRoute>
        <HousekeepingRequestPage />
      </ProtectedRoute>
    } />

    <Route path='/register-issue' element={
      <ProtectedRoute>
        <ComplainRequestPage />
      </ProtectedRoute>
    } />

   </Routes>
   </BrowserRouter>
  );
};

export default App;
