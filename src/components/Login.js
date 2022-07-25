import React from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
  const {signInWithGooglePopup} = useAuth()

  return (
    <>
      <Button onClick={() => signInWithGooglePopup()}>
        Login popup
      </Button>
    </>
  );
}

export default Login;
