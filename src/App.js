import React, { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import Mainrouter from './components/MainRouter';
import { LoadingProvider } from './contexts/LoadingContext';
import { BooksProvider } from './contexts/BooksContext';

export default function App() {
  
  return (
    <>
      <CssBaseline />
      <LoadingProvider>
        <BooksProvider>
          <AuthProvider>
            <Mainrouter/>
          </AuthProvider>
        </BooksProvider>
      </LoadingProvider>
    </>
  )
}
