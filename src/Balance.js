import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sign = total < 0 ? '-' : '';

  return (
    <div>
      <h3>Your Balance</h3>
      <h1 id='balance'>
        {sign}${Math.abs(total)}
      </h1>
    </div>
  );
};
