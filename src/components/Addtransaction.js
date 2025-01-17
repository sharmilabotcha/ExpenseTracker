import React, { useState, useContext } from 'react';
import { GlobalContext } from './context/Globalstate';

const Addtransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  }

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input 
            type='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter the text"
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount<br />
            ('-' expense, '+' income)
          </label>
          <input 
            type='number' 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder='Enter Amount'
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default Addtransaction;
