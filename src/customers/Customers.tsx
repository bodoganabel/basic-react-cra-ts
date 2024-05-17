import React from 'react';
import { ICustomer } from './customers.types';
const Customer = (props: {customer: ICustomer}) => {


    const {customer} = props;

    return (
    <div className='Customer' key={customer.id}>
        {customer.email}
    </div>
    );

}


export default Customer;