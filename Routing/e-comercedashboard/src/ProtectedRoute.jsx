import React from 'react'
import { useAuth } from './assets/Context/context'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const {user}=useAuth();
  return user ? children : <Navigate to="/login" />
}

export default ProtectedRoute