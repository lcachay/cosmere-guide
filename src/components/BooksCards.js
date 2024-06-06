import { Grid, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useBooks } from '../contexts/BooksContext';
import BooksCard from './BookCard';
import Modal from './Modal';
import BookDetails from './BookDetails';


const BooksCards = () => {
  const md = useMediaQuery('(min-width:600px)');
  const {books} = useBooks();
  const [openDetailsModal, setOpenDetailsModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState()
   
  useEffect(() => {
    if(selectedBook){
      setOpenDetailsModal(true);
    }
  }, [selectedBook])
  
  return ((
    <Grid container className='grow overflow-scroll' sx={{padding: '4em 2em'}} gap={md ? 6 : 4} justifyContent='center' alignItems='center'>
      {
        books.map((book, index) => (
        <BooksCard setSelectedBook={setSelectedBook} key={index} book={book} index={index}/>
        ))
      }
      <Modal 
        open={openDetailsModal} 
        close={() => {setSelectedBook(false); setOpenDetailsModal(false)}}
        title={selectedBook?.Title} 
      >
        <BookDetails book={selectedBook}/>
      </Modal>
    </Grid>
    
  ));
}

export default BooksCards;
