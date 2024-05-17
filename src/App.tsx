import './App.css';
import { useCustomers } from './customers/useCustomers';
import Customer from './customers/Customers';

function App() {

  const {customers} = useCustomers();

  return (
    <div className="App">
      <header className="App-header">
      {customers.map((customer) => <Customer customer={customer}/>)}
      </header>
    </div>
  );
}

export default App;

/* TODO: 
- ✅ useCustomers
- ✅ Customers display component
- ✅ Types into separate file
- useAsyncEffect/useEffectAsync - cleaner code
- loading indicator (empyt array/isfetching variable from useCustomers)
*/