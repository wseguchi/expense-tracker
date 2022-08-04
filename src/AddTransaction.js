import React, { useContext, useState } from 'react';
import { GlobalContext } from './context/GlobalState';
import { PlusCircledIcon } from '@radix-ui/react-icons';

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
        <PlusCircledIcon className='icon' /> Add a new transaction
      </h3>
      <form className='form-container' onSubmit={onSubmit}>
        <div className='form-control radio'>
          <span>
            <input type='radio' id='html' name='fav_language' value='HTML' /> {' '}
            <label htmlFor='html'>Income</label>
          </span>
          <span>
            <input type='radio' id='css' name='fav_language' value='CSS' /> {' '}
            <label htmlFor='css'>Expense</label>
          </span>
        </div>
        <div className='form-control'>
          <label htmlFor='text'></label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text... (eg. Food)'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'></label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount... (eg. $12.90)'
          />
        </div>
        <button className='btn'>
          <PlusCircledIcon className='icon' /> Add Transaction
        </button>
      </form>
    </div>
  );
};
