import React from 'react';
import Button from '@material-ui/core/Button';
import { useSetLocale } from 'react-admin';

const LocaleSwitcher = () => {
    const setLocale = useSetLocale();
    return (
        <div>
            <div>Language</div>
            <Button onClick={() => setLocale('fr')}>English</Button>
            <Button onClick={() => setLocale('pt')}>Português</Button>
        </div>
    );
};

export default LocaleSwitcher;