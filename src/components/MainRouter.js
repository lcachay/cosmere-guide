import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import BooksCards from './BooksCards';
import BooksNavbar from './BooksNavbar';
import Footer from './Footer';
import Layout from './Layout';
import Login from './Login';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';


const MainRouter = () => {
  const {currentUser} = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!currentUser ? <Layout footer={<Footer/>}/> : <Navigate to={"/"} replace />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout sidebarRight={<BooksNavbar/>} footer={<Footer/>}/>}>
            <Route index element={<BooksCards />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
