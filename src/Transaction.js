import React from 'react';

export default function Transaction({ transaction }) {
  const sign = transaction.amount >= 0 ? '+' : '';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}
        {transaction.amount}
      </span>
      <button className='delete-btn'>x</button>
    </li>
  );
}
