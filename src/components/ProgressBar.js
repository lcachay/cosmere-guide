import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = () => {
  const [userProgress, setUserProgress] = useState(0); //TODO: update to use usercontext
  return (
    <LinearProgress color="primary" variant="determinate" value={userProgress} sx={{height: '1.5em', '& .MuiLinearProgress-bar': {
      background: 'linear-gradient(90deg, #581C87 0%, #86198F 44%, #6B21A8 100%)',
    }, '&.MuiLinearProgress-root': {
      backgroundColor: '#475569',
    }}} />
  );
}

export default ProgressBar;
