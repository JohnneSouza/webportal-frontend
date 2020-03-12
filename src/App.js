import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import portugueseMessages from 'ra-language-portuguese'

import UserIcon from '@material-ui/icons/People';

import { CustomerList, CustomerEdit, CustomerCreate } from './components/customer/Customer'

const dataProvider = jsonServerProvider('http://localhost:8090/v1');

const i18nProvider = polyglotI18nProvider(() => portugueseMessages, 'pt');

const App = () => (
  <Admin 
    dataProvider={dataProvider} 
    i18nProvider={i18nProvider}
    >
    <Resource name="customers" options={{ label: 'Clientes' }} 
              list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={UserIcon} />
    
  
  </Admin>
);

export default App;