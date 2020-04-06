import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import AppModule from '../modules/Application';
// Create a theme instance.
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});
const useStyles = makeStyles({
    '@global': {
        'h1, h2, h3, h4, h5, h6 a': {
            fontSize: '14px',
            textDecoration: 'none'
        },
    },
    root: {
        color: 'blue', // 🔵
    },
});
export default function Theme({children}) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme} className={classes.root}>
            <AppModule.COMPONENTS.Layout>
                {children}
            </AppModule.COMPONENTS.Layout>
        </ThemeProvider>
    );
}