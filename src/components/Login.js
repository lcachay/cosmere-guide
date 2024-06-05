import React from 'react';
import { useAuth } from '../contexts/AuthContext'
import GoogleButton from './ExternalComponents/GoogleButton';
import { Avatar, Grid } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Login = () => {
  const {signInWithGooglePopup} = useAuth()
  return (
    <Grid item container gap='3.5em' flexDirection='column' alignItems='center' className='text-slate-50 max-w-lg grow text-center mt-28 p-8'>
      <Avatar className='size-40 bg-slate-600' alt="Illustration of Brandon Sanderson with his secret project's manuscripts" src="../assets/brandonillustration">
        <MenuBookIcon className='text-8xl text-orange-400' alt='Illustration of a book'/>
      </Avatar>
      <h1 className='p-0 m-0'>Cosmere Guide</h1>
      <p className='p-0 m-0'>Welcome to your ultimate companion in navigating the intricate worlds inside the Cosmere!</p>
      <div>
        <GoogleButton onClick={signInWithGooglePopup}/>
        <p className='italic text-sm mt-4'>*Other login methods coming soon!</p>
      </div>
    </Grid>
  );
}

export default Login;
