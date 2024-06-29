import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  console.log('ProtectedRoute:', isAuthenticated); // Add this log
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
