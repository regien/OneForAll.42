import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from '../../themes';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';

// Show / Hide Toogle:
// https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={ themes }>
          <CssBaseline />
          <AppHeader />
          <TabNavbar />
          <h1>{ "RootContainer" }</h1>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

export default RootContainer;
