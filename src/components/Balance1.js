import React, { useContext } from 'react';
import { GlobalContext } from './context/Globalstate';

const Balance1 = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h2 id="balance">${total}</h2>
    </div>
  );
}

export default Balance1;
