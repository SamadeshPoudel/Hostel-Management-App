import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ProtectedRoute from './ProtectedRoute';


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
   </Routes>
   </BrowserRouter>
  );
};

export default App;
