import React, { useContext, useState } from 'react';
import { GlobalContext } from './context/GlobalState';
import { PlusCircledIcon } from '@radix-ui/react-icons';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (type === '') {
      alert('Please choose a type: Income or Expense');
    } else if (text === '' || amount == 0) {
      alert('Please add a label and amount');
    } else {
      let newAmount;
      if (type === 'expense') {
        newAmount = -parseFloat(amount);
      } else {
        newAmount = parseFloat(amount);
      }

      const newTransaction = {
        id: Date.now(),
        text,
        amount: newAmount,
      };

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
            <input
              type='radio'
              value='income'
              id='income'
              name='type'
              onChange={(e) => setType(e.target.value)}
            />
              <label htmlFor='income'>Income</label>
          </span>
          <span>
            <input
              type='radio'
              value='expense'
              id='expense'
              name='type'
              onChange={(e) => setType(e.target.value)}
            />
              <label htmlFor='expense'>Expense</label>
          </span>
        </div>
        <div className='form-control'>
          <label htmlFor='text'></label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Transaction name... (eg. Grosseries)'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'></label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Amount... (eg. $12.90)'
          />
        </div>
        <button className='btn'>
          <PlusCircledIcon className='icon' /> Add Transaction
        </button>
      </form>
    </div>
  );
};
