import React from 'react';
import Router from './routes/Router';
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette:{
		primary:{
			main: '#5CB646',
		}
	}
})
function App() {
  return (
  	<ThemeProvider theme={theme}>
	    <div >
	      <Router/>
	    </div>
    </ThemeProvider>
  );
}

export default App;
