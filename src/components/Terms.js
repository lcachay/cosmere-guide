import { Paper } from '@mui/material'
import React from 'react'

function Terms() {
  return (
    <Paper className='p-3 overflow-scroll' sx={{maxHeight: '30em', maxWidth: '40em'}}>
      <h3>Introduction</h3> 
      <p>Welcome to Cosmere Guide. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our site.</p>
      <h3>Disclaimer of Warranties</h3> 
      <p>Cosmere Guide is provided "as is" without any warranties of any kind, either express or implied. We do not warrant that the content on our site is accurate, complete, or up-to-date.</p>
      <h3>Limitation of Liability</h3> 
      <p>In no event shall Cosmere Guide or its owners be liable for any damages arising out of or in connection with your use of our site. This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages.</p>
      <h3>Third-Party Links</h3> 
      <p>Our website may contain links to third-party websites. These links are provided for your convenience and do not signify that we endorse the website(s). We have no responsibility for the content or practices of linked sites.</p>
      <h3>Changes to the Terms</h3> 
      <p>We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the site constitutes acceptance of the new terms.</p>

    </Paper>
  )
}

export default Terms