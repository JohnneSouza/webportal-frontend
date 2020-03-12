import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { Create, ChipField, List, Datagrid, TextField, EmailField,
        SimpleForm, TextInput, EditButton, SimpleList, TabbedForm, 
        FormTab, Edit } from 'react-admin';

export const CustomerList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List title="Consulta Clientes" {...props}>  
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.email}
                    tertiaryText={record => record.phone}
                />
            ) : (
                <Datagrid>
                    <TextField label="Nome" source="name" />
                    <EmailField label="e-mail" source="email" />
                    <ChipField label="Telefone" source="phone" />
                    <TextField label="Observações" source="annotations" />
                    <EditButton />
                </Datagrid>
            )}           
        </List>
    );    
};

const CustomerTitle = ({ record }) => {
    return <span>Cliente {record ? `"${record.name}"` : ''}</span>;
};

export const CustomerEdit = props => (
    <Edit undoable={false} title={<CustomerTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Cadastro">
                <TextInput label="Nome" source="name" />
                <TextInput label="E-mail" source="email" />
                <TextInput label="Telefone" source="phone" />
                <TextInput label="CPF" source="document" />
            </FormTab>
            <FormTab label="Endereço">
                <TextInput label="Rua" source="address.street" />
                <TextInput label="Numero" source="address.number" />
                <TextInput label="Cep" source="address.zip" />
                <TextInput label="Bairro" source="address.neighborhood" />
                <TextInput label="Estado" source="address.state" />
                <TextInput label="Cidade" source="address.city" />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const CustomerCreate = props => (
    <Create title="Cadastrar Novo Cliente" {...props}>
        <SimpleForm>
            <TextInput label="Nome" source="name" />
            <TextInput label="CPF" source="document" />
            <TextInput label="e-mail" source="email" />
            <TextInput label="Telefone" source="phone" />
            <TextField label="Endereço" />
            <TextInput label="Rua" source="address.street" />
            <TextInput label="Numero" source="address.number" />
            <TextInput label="Cep" source="address.zip" />
            <TextInput label="Bairro" source="address.neighborhood" />
            <TextInput label="Estado" source="address.state" />
            <TextInput label="Cidade" source="address.city" />
        </SimpleForm>
    </Create>
);