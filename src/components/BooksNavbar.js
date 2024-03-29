import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import TabButton from './TabButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from '../contexts/AuthContext';
import { useBooks } from '../contexts/BooksContext';

const BooksNavbar = () => {
  const md = useMediaQuery('(min-width:600px)');
  const [selectedTab, setSelectedTab] = useState(0);
  const {logout} = useAuth();
  const {books} = useBooks();
  
  const handleChange = (event, newSelection) => {
    setSelectedTab(newSelection);
  };

  return (
    <Box component="nav" className=" drop-shadow-lg">
      <ToggleButtonGroup
        value={selectedTab}
        sx={{display: "flex", gap: ".5em"}}
        orientation={md ? "vertical" : "horizontal" }
        exclusive
        onChange={handleChange}
        className={`relative bg-slate-700 ${!md && "overflow-y-hidden items-center" }  `}
      >
        <TabButton bottom={!md} onClick={logout}>{md ? "Logout" : <ExitToAppIcon fontSize="large"/>}</TabButton>
        {
          books.map((book, index) => (
            <ToggleButton 
              disableRipple
              sx={{color: "#fff", textAlign: "right", justifyContent: "flex-end", border: 0, "&:hover": {background: "rgba(0, 0, 0, 0.06)"}}}
              component="a" 
              href={`#card-${index}`} 
              key={index} 
              value={index} 
              className={`${!md && " whitespace-nowrap h-16 px-2 text-sm"}`} 
              selected={selectedTab === index} 
              classes={{selected: "active-book-tab pointer-events-none", root: "text-slate-50 book-tab"}}
            >
              {book.Title}
            </ToggleButton>
          ))
        }
      </ToggleButtonGroup>
    </Box>
  );
}

export default BooksNavbar;
