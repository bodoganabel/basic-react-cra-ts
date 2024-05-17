import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


interface ICustomer {
  id: string;
  name: string;
  email: string;
}

// Simulating a fetch function that returns customer data
const fetchCustomers = ():Promise<ICustomer[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 'asdfmn1', name: 'John Doe', email: 'john.doe@example.com' },
        { id: '1m1vbfo', name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 'sfx44kr', name: 'Jane Smith3', email: 'jane.smith2@example.com' }
      ]);
    }, 1000);
  });
};


function App() {

  const [customers,setCustomers] = useState<ICustomer[]>([]);
  
  useEffect(() => { 
    const getCustomersAsync = async () => {  
      const getCustomersResult = await fetchCustomers();
      setCustomers(getCustomersResult);
    
    };
    getCustomersAsync();


   }, [])


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
- useCustomers
- Customers display component
- Types into separate file
- useAsyncEffect/useEffectAsync - cleaner code
- loading indicator
*/