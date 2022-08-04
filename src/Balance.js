import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const sign = total < 0 ? '-' : '';

  return (
    <div className='balance'>
      <h4>Your Balance</h4>
      <h1 className={total < 0 ? 'balance-red' : 'balance-green'}>
        {sign}${Math.abs(total)}
      </h1>
    </div>
  );
};
