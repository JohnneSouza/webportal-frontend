import React from 'react';
import { Create, ChipField, List, Datagrid, TextField, EmailField,
        TabbedForm, FormTab, SimpleForm, Edit, TextInput } from 'react-admin';

export const CustomerList = props => (
    <List title="Consulta Clientes" {...props}>
        <Datagrid rowClick="edit">
            <ChipField label="Nome" source="name" />
            <EmailField label="e-mail" source="email" />
            <TextField label="Telefone" source="phone" />
            <TextField label="Observações" source="annotations" />
        </Datagrid>
    </List>
);

const CustomerTitle = ({ record }) => {
    return <span>Cliente {record ? `"${record.name}"` : ''}</span>;
};

export const CustomerEdit = props => (
    <Edit title={<CustomerTitle />} {...props}>
        <TabbedForm>
            <FormTab label="Cadastro">
                <TextInput label="Nome" source="name" />
                <TextInput label="E-mail" source="email" />
                <TextInput label="Telefone" source="phone" />
                <TextInput label="CPF" source="id_document" />
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
            <TextInput label="CPF" source="id_document" />
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