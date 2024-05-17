import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useCustomers } from './customers/useCustomers';

function App() {

  const {customers} = useCustomers();

  return (
    <div className="App">
      <header className="App-header">
      {customers.map((customer) => <div key={customer.id}>{customer.email}</div>)}
      </header>
    </div>
  );
}

export default App;

/* TODO: 
- ✅ useCustomers
- Customers display component
- Types into separate file
- useAsyncEffect/useEffectAsync - cleaner code
- loading indicator (empyt array/isfetching variable from useCustomers)
*/