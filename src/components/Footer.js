import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box className="text-slate-50 px-8 py-4 line-separator ">
      <button className='btn btn-text'>TERMS</button>
      <button className='btn btn-text'>ABOUT</button>
      <button className='btn btn-text'>CONTACT</button>
    </Box>
  );
}

export default Footer;
