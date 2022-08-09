import React from 'react';

const BookTitle = (props) => {
  return (
    <h2 className='book-title'>
      {props.children}
    </h2>
  );
}

export default BookTitle;
