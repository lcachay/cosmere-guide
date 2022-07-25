import React from 'react';

const TabButton = (props) => {
  return (
    <button className={`sticky transition-colors duration-200 text-slate-50 bg-slate-700 z-10 drop-shadow-lg hover:bg-slate-600 ${props.bottom ? " left-0 bottom-0 top-0 " : "top-0 right-0"} uppercase tracking-wide p-4 ${!props.bottom && "w-full text-right"}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default TabButton;
