import React, { useContext } from 'react';
import { GlobalContext } from './context/GlobalState';
import { CrossCircledIcon } from '@radix-ui/react-icons';

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <div>
        {transaction.text}
        <span>{transaction.amount.toFixed(2)}</span>
      </div>
      <button
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >
        <CrossCircledIcon />
      </button>
    </li>
  );
}
