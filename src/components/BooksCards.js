import { Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useBooks } from '../contexts/BooksContext';
import BookSubtitle from './BookSubtitle';
import BookTitle from './BookTitle';
import CardButton from './CardButton';

const BooksCards = () => {
  const md = useMediaQuery('(min-width:600px)');
  const {books} = useBooks();
   
  return ((
    <Grid container sx={{padding: '4em 2em'}} gap={md ? 6 : 4} justifyContent='center' alignItems='center'>
    {
      books.map((book, index) => (
      <Card sx={{ width: '20em', height: '27em', backgroundColor:'transparent' }} classes={{root: `flex flex-col justify-between bg-slate-700`}} key={index}>
        <CardHeader classes={{root: `bg-slate-700`}}></CardHeader>
        <CardActionArea classes={{root: `h-full overflow-auto`}}>
          <CardContent className="text-slate-50" classes={{root: `bg-slate-700 flex flex-col justify-between h-full`}}>
            <BookTitle>
              {book.Title}
            </BookTitle>
            <BookSubtitle>
              {book.Saga}
            </BookSubtitle>
          </CardContent>
        </CardActionArea>
        <CardActions classes={{root: `bg-slate-600 justify-between`}}>
          <CardButton>
            Details
          </CardButton>
          <CardButton>
            Mark as complete
          </CardButton>
        </CardActions>
      </Card>
      ))
    }
    </Grid>
    
  ));
}

export default BooksCards;
