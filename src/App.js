import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { CustomerList, CustomerEdit, CustomerCreate } from './components/customer/Customer'

const dataProvider = jsonServerProvider('http://localhost:8090/v1');

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate}/>
  </Admin>
);

export default App;