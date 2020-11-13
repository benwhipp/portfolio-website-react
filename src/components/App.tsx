import * as React from "react";

import {
  Typography,
  ThemeProvider
} from '@material-ui/core';

import theme from '../assets/theme';

export interface HelloWorldProps {
  userName: string;
  lang: string;
};

export const App = (props: HelloWorldProps) => (
  <ThemeProvider
    theme={theme}
  >
    <Typography>
      Hi {props.userName} from React! Welcome to {props.lang}!
    </Typography>
  </ThemeProvider>
);
