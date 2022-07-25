import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import TabButton from './TabButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from '../contexts/AuthContext';


const DUMMY = [
  {
    "Day": 21,
    "Month": 4,
    "Notes": "",
    "Planet": "Sel",
    "Saga": "Elantris",
    "System": "Selish",
    "Title": "Elantris",
    "Year": 2005
  },
  {
    "Day": 17,
    "Month": 7,
    "Notes": "",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "The Final Empire",
    "Year": 2006
  },
  {
    "Day": 1,
    "Month": 1,
    "Notes": "Part of the Arcanum Unbounded and also available for free in Brandon’s website https://www.brandonsanderson.com/the-hope-of-elantris/",
    "Planet": "Sel",
    "Saga": "Elantris",
    "System": "Selish",
    "Title": "The Hope of Elantris",
    "Year": 2007
  },
  {
    "Day": 21,
    "Month": 8,
    "Notes": "",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "The Well of Ascension",
    "Year": 2007
  },
  {
    "Day": 14,
    "Month": 10,
    "Notes": "",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "The Hero of Ages",
    "Year": 2008
  },
  {
    "Day": 9,
    "Month": 6,
    "Notes": "Not a standalone since there is a sequel already planned",
    "Planet": "Nalthis",
    "Saga": "Warbreaker",
    "System": "Nalthian",
    "Title": "Warbreaker",
    "Year": 2009
  },
  {
    "Day": 31,
    "Month": 8,
    "Notes": "",
    "Planet": "Roshar",
    "Saga": "Stormlight Archive",
    "System": "Rosharan",
    "Title": "The Way of Kings (#1)",
    "Year": 2010
  },
  {
    "Day": 8,
    "Month": 11,
    "Notes": "",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "The Alloy of Law",
    "Year": 2011
  },
  {
    "Day": 16,
    "Month": 12,
    "Notes": "Part of the Arcanum Unbounded",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "The Eleventh Metal",
    "Year": 2011
  },
  {
    "Day": 10,
    "Month": 10,
    "Notes": "Part of the Arcanum Unbounded",
    "Planet": "Sel",
    "Saga": "Elantris",
    "System": "Selish",
    "Title": "The Emperor's Soul",
    "Year": 2012
  },
  {
    "Day": 27,
    "Month": 11,
    "Notes": "Part of the Arcanum Unbounded",
    "Planet": "Threnody",
    "Saga": "Standalone",
    "System": "Threnodite",
    "Title": "Shadows for Silence in the Forests of Hell",
    "Year": 2013
  },
  {
    "Day": 4,
    "Month": 3,
    "Notes": "",
    "Planet": "Roshar",
    "Saga": "Stormlight Archive",
    "System": "Rosharan",
    "Title": "Words of Radiance (#2)",
    "Year": 2014
  },
  {
    "Day": 7,
    "Month": 8,
    "Notes": "Part of the Arcanum Unbounded",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "Allomancer Jak and the Pits of Eltania",
    "Year": 2014
  },
  {
    "Day": 30,
    "Month": 6,
    "Notes": "Part of the Arcanum Unbounded",
    "Planet": "First of the Sun",
    "Saga": "Standalone",
    "System": "Drominad",
    "Title": "Sixth of the Dusk",
    "Year": 2014
  },
  {
    "Day": 6,
    "Month": 10,
    "Notes": "",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "Shadow of Self",
    "Year": 2015
  },
  {
    "Day": 26,
    "Month": 1,
    "Notes": "",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "The Bands of Mourning",
    "Year": 2016
  },
  {
    "Day": 26,
    "Month": 1,
    "Notes": "Part of the Arcanum Unbounded. Was originally released as a companion story to the original Mistborn trilogy, and is intended to be read after The Bands of Mourning",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "Secret History",
    "Year": 2016
  },
  {
    "Day": 28,
    "Month": 6,
    "Notes": "Graphic novel",
    "Planet": "Taldain",
    "Saga": "White Sand",
    "System": "Taldain",
    "Title": "Volume I",
    "Year": 2016
  },
  {
    "Day": 22,
    "Month": 11,
    "Notes": "Part of the Arcanum Unbounded",
    "Planet": "Roshar",
    "Saga": "Stormlight Archive",
    "System": "Rosharan",
    "Title": "Edgedancer (#2.5)",
    "Year": 2016
  },
  {
    "Day": 22,
    "Month": 11,
    "Notes": "",
    "Planet": "Cosmere",
    "Saga": "Collections",
    "System": "Cosmere",
    "Title": "Arcanum Unbounded",
    "Year": 2016
  },
  {
    "Day": 14,
    "Month": 11,
    "Notes": "",
    "Planet": "Roshar",
    "Saga": "Stormlight",
    "System": "Rosharan",
    "Title": "Oathbringer (#3)",
    "Year": 2017
  },
  {
    "Day": 20,
    "Month": 2,
    "Notes": "Graphic novel",
    "Planet": "Taldain",
    "Saga": "White Sand",
    "System": "Taldain",
    "Title": "Volume II",
    "Year": 2018
  },
  {
    "Day": 18,
    "Month": 9,
    "Notes": "Graphic novel",
    "Planet": "Taldain",
    "Saga": "White Sand",
    "System": "Taldain",
    "Title": "Volume III",
    "Year": 2019
  },
  {
    "Day": 5,
    "Month": 11,
    "Notes": "",
    "Planet": "Roshar",
    "Saga": "Stormlight Archive",
    "System": "Rosharan",
    "Title": "Dawnshard (#3.5)",
    "Year": 2020
  },
  {
    "Day": 17,
    "Month": 11,
    "Notes": "",
    "Planet": "Roshar",
    "Saga": "Stormlight Archive",
    "System": "Rosharan",
    "Title": "Rhythm of War (#4)",
    "Year": 2020
  },
  {
    "Day": 15,
    "Month": 11,
    "Notes": "",
    "Planet": "Scadrial",
    "Saga": "Mistborn",
    "System": "Scadrian",
    "Title": "The Lost Metal",
    "Year": 2022
  },
  {
    "Day": "",
    "Month": 1,
    "Notes": "",
    "Planet": "",
    "Saga": "Secret Project",
    "System": "",
    "Title": "Tress of the Emerald Sea",
    "Year": 2023
  },
  {
    "Day": "",
    "Month": 7,
    "Notes": "",
    "Planet": "",
    "Saga": "Secret Project",
    "System": "",
    "Title": "Yumi and the Nightmare Painter",
    "Year": 2023
  },
  {
    "Day": "",
    "Month": 10,
    "Notes": "",
    "Planet": "",
    "Saga": "Secret Project",
    "System": "",
    "Title": "The Sunlit Man",
    "Year": 2023
  }
]

const BooksNavbar = () => {
  const md = useMediaQuery('(min-width:600px)');
  const [selectedTab, setSelectedTab] = useState(0);
  const {logout} = useAuth();

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
        <TabButton bottom={!md} onClick={logout}>{md && "Logout "}<ExitToAppIcon fontSize="large"/></TabButton>
        {
          DUMMY.map((book, index) => (
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
              {/* <a  className={` ${!md ? "whitespace-nowrap h-16" : "w-full text-right p-2"}`}> */}
                {book.Title}
              {/* </a> */}
            </ToggleButton>
          ))
        }
      </ToggleButtonGroup>
    </Box>
  );
}

export default BooksNavbar;
