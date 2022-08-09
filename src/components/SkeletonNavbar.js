import { Box, Skeleton, ToggleButton, ToggleButtonGroup, useMediaQuery } from '@mui/material';
import React from 'react';
import TabButton from './TabButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SkeletonNavbar = () => {
  const md = useMediaQuery('(min-width:600px)');
  const skeletonData = Array.from('adonalsiumshards')

  return (
    <Box component="nav" className=" drop-shadow-lg">
      <ToggleButtonGroup
        value={skeletonData[0]}
        sx={{display: "flex", gap: ".5em"}}
        orientation={md ? "vertical" : "horizontal" }
        exclusive
        className={`relative bg-slate-700 ${!md && "overflow-y-hidden items-center" }  `}
      >
        <TabButton bottom={!md}>{md ? "Logout" : <ExitToAppIcon fontSize="large"/>}</TabButton>
        {
          skeletonData.map((placeholder, index) => (
            <ToggleButton 
              disableRipple
              sx={{color: "#fff", textAlign: "right", justifyContent: "flex-end", border: 0, "&:hover": {background: "rgba(0, 0, 0, 0.06)"}}}
              component="a" 
              href={`#card-${index}`} 
              key={index} 
              value={index} 
              className={`${!md && " whitespace-nowrap h-16 px-2 text-sm"}`} 
              selected={0 === index} 
              classes={{selected: "active-book-tab pointer-events-none", root: "text-slate-50 book-tab"}}
            >
              <Skeleton width='90%' />
            </ToggleButton>
          ))
        }
      </ToggleButtonGroup>
    </Box>
  );
}

export default SkeletonNavbar;
