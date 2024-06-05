import { Box, Link } from '@mui/material';
import React, { useState } from 'react';
import Modal from './Modal'
import About from './About';
import Terms from './Terms';

const Footer = () => {
  const [openTerms, setOpenTerms] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  return (
    <Box className="text-slate-50 px-8 py-4 line-separator ">
      <button onClick={() => setOpenTerms(true)} className='btn btn-text'>TERMS</button>
      <button onClick={() => setOpenAbout(true)} className='btn btn-text'>ABOUT</button>
      <Link target="_blank" rel="noreferrer" href="https://github.com/lcachay/cosmere-guide/issues"><button className='btn btn-text'>CONTACT</button></Link>
      {
        openTerms && 
        <Modal 
          open={openTerms} 
          close={() => setOpenTerms(false)}
          title='Terms of Service' 
        >
          <Terms/>
        </Modal>
      }
      {
        openAbout && 
        <Modal 
          open={openAbout} 
          close={() => setOpenAbout(false)}
          title='About Cosmere Guide' 
        >
          <About/>
        </Modal>
      }
    </Box>
  );
}

export default Footer;
