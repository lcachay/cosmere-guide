import React from 'react';

const BookSubtitle = (props) => {
  return (
    <p className='book-subtitle'>
      {props.children}
    </p>
  );
}

export default BookSubtitle;
