import { Paper } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Paper className='p-3 overflow-scroll' sx={{maxHeight: '30em', maxWidth: '40em'}}>
      <p>
        Having trouble keeping up with all the latest Cosmere books?
        Feeling overwhelmed by the sheer number of titles in Brandon Sanderson's expansive universe?
        Not sure where to start or what to read next?
        Here we help you track your reading progress and ensure you never loose yourself in this epic saga.
        Dive in and let us simplify your Cosmere journey! 
      </p>
      <hr />
      <p>
        <span className='font-extrabold'>Disclaimer: </span>Cosmere Guide is an unofficial fan website  and is not affiliated with, endorsed, or sponsored by Brandon Sanderson  or his publishers. This site is created by fans, for fans, and is  intended for non-profit purposes only.
      </p>
      <p className='font-semibold'>
        All rights to the Cosmere series  and related works remain the property of Brandon Sanderson and his  respective publishers.
      </p>
    </Paper>
  )
}

export default About