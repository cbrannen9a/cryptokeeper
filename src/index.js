import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import App from './components/App';
import * as serviceWorker from './utilities/serviceWorker';

const theme = createMuiTheme();

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root'));

serviceWorker.unregister();
