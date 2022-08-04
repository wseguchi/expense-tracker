import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
  theme: 'dark',
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function changeTheme(theme) {
    dispatch({
      type: 'CHANGE_THEME',
      payload: theme,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        theme: state.theme,
        deleteTransaction,
        addTransaction,
        changeTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
