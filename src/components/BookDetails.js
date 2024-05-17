import { ButtonGroup, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PublicIcon from '@mui/icons-material/Public';
import { useUser } from '../contexts/UserContext';

const BookStatus = {
  Completed: 'Completed!',
  Reading: 'Reading...',
  Unread: 'Unread',
}

const BookDetails = ({book}) => {
  const { booksInProgress, booksCompleted, markAsRead, markAsReading, markAsUnread } = useUser(useUser);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (booksCompleted.find(title => title === book.Title)){
      setStatus(BookStatus.Completed);
    } else if(booksInProgress.find(title => title === book.Title)){
      setStatus(BookStatus.Reading);
    } else {
      setStatus(BookStatus.Unread);
    }
  }, [])
  

  return (
    <Grid container>
      <Grid item>
        <p>Released on: {book.Year}-{book.Month}-{book.Day}</p>
        <p>{book.Saga}</p>
        <p><PublicIcon/> {book.Planet} ({book.System})</p>
      </Grid>
      <Grid item>
        <p>{book.Notes}</p>
        <p>Want to know more? <a href={book.Link || '#'}>Check Brandon's official page!</a></p>
      </Grid>
      <Grid item>
        <p>{status}. Change status?</p>
        <div className='inline-flex'>
          {
            status !== BookStatus.Unread &&
            <button onClick={() => markAsUnread(book.Title)} className='btn btn-text'>Mark as unread</button>
          }
          {
            status !== BookStatus.Reading &&
            <button onClick={() => markAsReading(book.Title)} className='btn btn-text'>In progress...</button>
          }
          {
            status !== BookStatus.Completed &&
            <button onClick={() => markAsRead(book.Title)} className='btn btn-text'>Complete!</button>
          }
        </div>
      </Grid>
    </Grid>
  )
}

export default BookDetails;