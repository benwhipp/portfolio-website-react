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
    }
});