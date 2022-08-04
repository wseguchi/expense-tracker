import React from 'react';

export const Header = () => {
  return (
    <div id='header'>
      <h1 className='title'>Expense Tracker</h1>
      <label className='switch'>
        <input type='checkbox' />
        <span className='slider round'></span>
      </label>
    </div>
  );
};
