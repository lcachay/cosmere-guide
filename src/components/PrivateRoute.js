import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useBooks } from '../contexts/BooksContext';
import { useLoading } from '../contexts/LoadingContext';

const PrivateRoute = (props) => {
  const {currentUser} = useAuth()
  const {getBooks} = useBooks();
  const {loading} = useLoading();
  if (!currentUser) {
    return <Navigate to={"/login"} replace />;
  }

  useEffect(() => {
    getBooks()
  }, []);

  return props.children ? props.children : <Outlet />;
}

export default PrivateRoute;
