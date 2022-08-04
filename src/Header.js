import React, { useState, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

export const Header = () => {
  const [theme, setTheme] = useState('dark');
  const { changeTheme } = useContext(GlobalContext);

  const toggleTheme = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark');
    if (theme === 'dark') {
      setTheme('light');
      document.body.classList.add('light');
    } else {
      setTheme('dark');
      document.body.classList.remove('light');
    }
    // To be improved!
  };

  return (
    <div id='header'>
      <h1 className='title'>Expense Tracker</h1>
      <label className='switch'>
        <input type='checkbox' onClick={toggleTheme} />
        <span className='slider round'></span>
      </label>
    </div>
  );
};
