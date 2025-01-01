import React from 'react';
import Balance from './components/Balance1';
import './App.css';
import Heading1 from './components/Heading1';
import Incomeexpenses from './components/Incomeexpenses';
import Addtransaction from './components/Addtransaction';
import Transactionlist from './components/Transactionlist';
import { GlobalProvider } from './components/context/Globalstate';

function App() {
  return (
    <GlobalProvider>
      <div >
        <Heading1 />
        <div className='container'>
          <Balance /> 
          <Incomeexpenses/>
          <Transactionlist/>
          <Addtransaction/>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
