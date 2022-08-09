import React from 'react';

const CardButton = (props) => {
  return (
    <button className={`transition-colors duration-200 text-slate-50 hover:bg-slate-700 uppercase tracking-wide p-3`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default CardButton;
