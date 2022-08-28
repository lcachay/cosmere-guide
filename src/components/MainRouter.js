import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useBooks } from '../contexts/BooksContext';
import BooksCards from './BooksCards';
import BooksNavbar from './BooksNavbar';
import Footer from './Footer';
import Layout from './Layout';
import Login from './Login';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import SkeletonCards from './SkeletonCards';
import SkeletonNavbar from './SkeletonNavbar';
import ProgressBar from './ProgressBar';


const MainRouter = () => {
  const {currentUser} = useAuth();
  const {loadingBooks} = useBooks();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!currentUser ? <Layout footer={<Footer/>}/> : <Navigate to={"/"} replace />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout header={<ProgressBar />} sidebarRight={loadingBooks ? <SkeletonNavbar/> : <BooksNavbar/>} footer={<Footer/>}/>}>
            <Route index element={loadingBooks ? <SkeletonCards /> : <BooksCards/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
