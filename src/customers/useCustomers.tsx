import { useEffect, useState } from "react";
import { ICustomer } from "./customers.types";


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
  

export const useCustomers = () => {
    
    const [customers,setCustomers] = useState<ICustomer[]>([]);
  
    useEffect(() => { 
      const getCustomersAsync = async () => {  
        const getCustomersResult = await fetchCustomers();
        setCustomers(getCustomersResult);
      
      };
      getCustomersAsync();
     }, [])
    return {customers}
 } 