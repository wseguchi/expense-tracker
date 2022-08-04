import React, { useContext, useState } from 'react';
import { GlobalContext } from './context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    if (text === '' || amount == 0) {
      alert('Please add a label and amount');
    } else {
      addTransaction(newTransaction);
      setText('');
      setAmount('');
    }
  };

  return (
    <div id='add-transaction'>
      <h3>
        Add a new transaction <div className='rotate'>&#8963;</div>
      </h3>
      <form className='form-container' onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'></label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'></label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};
