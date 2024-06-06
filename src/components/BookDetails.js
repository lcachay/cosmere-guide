import { Grid, Link, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useUser } from '../contexts/UserContext';

const BookStatus = {
  Completed: 'Completed!',
  Reading: 'Reading...',
  Unread: 'Unread',
}

const BookDetails = ({ book }) => {
  const { booksInProgress, booksCompleted, markAsRead, markAsReading, markAsUnread } = useUser(useUser);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (booksCompleted.find(title => title === book.Title)) {
      setStatus(BookStatus.Completed);
    } else if (booksInProgress.find(title => title === book.Title)) {
      setStatus(BookStatus.Reading);
    } else {
      setStatus(BookStatus.Unread);
    }
  }, [])

  return (
    <Grid container flexDirection='column' justifyContent='space-between' className='h-full' flexWrap='nowrap' >
      <Grid item>
        <Grid container justifyContent='space-between' alignItems='baseline'>
          <div>
            <p className='flex place-items-center gap-1'>
              <Tooltip disableInteractive title='Saga' arrow placement='top'>
                <BookIcon /> 
              </Tooltip>
              {book.Saga}</p>
            <p className='flex place-items-center gap-1'>
              <Tooltip disableInteractive title='Planet and solar system' arrow placement='top'>
                <PublicIcon /> 
              </Tooltip>
              {book.Planet} ({book.System})</p>
          </div>
          <p className='text-right italic flex place-items-center gap-1'>
            <Tooltip disableInteractive title='Date of release' arrow placement='top'>
              <CalendarTodayIcon /> 
            </Tooltip>
            {book.Year}-{book.Month}-{book.Day}</p>
        </Grid>
        <p>{book.Notes}</p>
        <p>Want to know more? <Link target="_blank" rel="noreferrer" underline="hover" href={book.Link || '#'} className='link'>Check Brandon's official page!</Link></p>
      </Grid>
      <Grid item>
        <p className='w-full bg-slate-800 text-center cursor-default p-2'>Status: {status}</p>
        <div className='w-full bg-slate-600 text-center outline outline-2 outline-slate-600'>Change status?</div>
        <div className='grid grid-cols-2'>
          {
            status !== BookStatus.Unread &&
            <button onClick={() => markAsUnread(book.Title)} className='btn btn-outlined text-xs'>Mark as unread</button>
          }
          {
            status !== BookStatus.Reading &&
            <button onClick={() => markAsReading(book.Title)} className='btn btn-outlined text-xs'>In progress...</button>
          }
          {
            status !== BookStatus.Completed &&
            <button onClick={() => markAsRead(book.Title)} className='btn btn-outlined text-xs'>Complete!</button>
          }
        </div>
      </Grid>
    </Grid>
  )
}

export default BookDetails;