import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';
import Mainrouter from './components/MainRouter';

export default function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <Mainrouter/>
      </AuthProvider>
    </>
  )
}
