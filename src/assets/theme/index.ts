import { createMuiTheme } from '@material-ui/core';

import palette from './palette';

const defaultTheme = createMuiTheme();

export default createMuiTheme({
    palette: palette,
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(',')
    },
    overrides: {
        MuiButtonBase: {
            root: {
                padding: defaultTheme.spacing(5)
            }
        },
        MuiButton: {
            root: {
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                borderRadius: '10px'
            },
            outlined: {
                border: `3px solid ${palette.secondary.main}`,
                padding: defaultTheme.spacing(3, 9)
            },
            text: {
                padding: defaultTheme.spacing(3, 9)
            }
        }
    }
});