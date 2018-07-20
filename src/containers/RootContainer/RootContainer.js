import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from '../../themes';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
import ServiceScreen from '../../screens/ServiceScreen';

// Show / Hide Toogle:
// https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      serviceUrl: 'https://intra.42.fr'
    };
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={ themes }>
          <CssBaseline>
            <AppHeader />
            <ServiceScreen
              service={ this.state.serviceUrl }
            />
            <TabNavbar />
          </CssBaseline>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

const services = {
  intra: 'https://intra.42.fr',

}

export default RootContainer;
