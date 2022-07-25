import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = (props) => {
  const {currentUser} = useAuth()
  if (!currentUser) {
    return <Navigate to={"/login"} replace />;
  }
  return props.children ? props.children : <Outlet />;
}

export default PrivateRoute;
