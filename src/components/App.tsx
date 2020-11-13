import * as React from "react";

import {
	ThemeProvider
} from '@material-ui/core';

import theme from '../assets/theme';

import Nav from './Nav'

export interface HelloWorldProps {
	userName: string;
	lang: string;
};

export const App = (props: HelloWorldProps) => (
	<ThemeProvider
		theme={theme}
	>
        <Nav />
	</ThemeProvider>
);
