import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import Transaction from './Transaction';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div className={transactions.length == 0 ? 'history' : 'history show'}>
      <h3>
        <CounterClockwiseClockIcon className='icon' />
        History
      </h3>

      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
