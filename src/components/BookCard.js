import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardHeader } from '@mui/material';
import BookSubtitle from './BookSubtitle';
import BookTitle from './BookTitle';
import { useUser } from '../contexts/UserContext';

const BooksCard = ({book, index, setSelectedBook}) => {
  const { booksInProgress, booksCompleted, markAsRead, markAsReading, markAsUnread } = useUser(useUser);
  
  return (
    <Card id={`card-${index}`} sx={{ width: '20em', height: '27em', backgroundColor: 'transparent' }} classes={{ root: `flex flex-col justify-between bg-slate-700` }} key={index}>
      <CardHeader classes={{ root: `bg-slate-700` }}></CardHeader>
      <CardActionArea classes={{ root: `h-full overflow-auto` }}> 
      {/* // TODO: handleZoomBookCover */}
        <CardContent className="text-slate-50" classes={{ root: `bg-slate-700 flex flex-col justify-between h-full` }}>
          <BookTitle>
            {book.Title}
          </BookTitle>
          <BookSubtitle>
            {book.Saga}
          </BookSubtitle>
        </CardContent>
      </CardActionArea>
      <CardActions classes={{ root: `bg-slate-600 justify-between` }}>
        <button className='btn' onClick={() => setSelectedBook(book)}> 
          Details
        </button>
        {
          !booksCompleted.find(title => title === book.Title) && (
            !!booksInProgress.find(title => title === book.Title) ?
              <button className='btn' onClick={async () => await  markAsRead(book.Title)}> 
                Mark as completed
              </button> 
            :
              <button className='btn' onClick={async () => await  markAsReading(book.Title)}>
                Mark as reading
              </button>
          )
        }
      </CardActions>
    </Card>
  )
}

export default BooksCard;