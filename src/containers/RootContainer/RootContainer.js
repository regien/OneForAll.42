import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from '../../themes';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
import ServiceScreen from '../../screens/ServiceScreen';

import LanguagesContainer from '../LanguagesContainer';
import ServicesContainer from '../ServicesContainer';
import ThemesContainer from '../ThemesContainer';

// Show / Hide Toogle:
// https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      service: 'Boku no Hero',
      serviceUrl: 'https://42schoolsiliconvalley.slack.com'
    };
    return ;
  }
  handleNavBar (val) {
    // alert("Hello, Father!");
    alert(val);
    return ;
  }
  switchTabs (val) {
    var tab = this.state.service;
    switch (val) {
      case 'intra':
        tab = services.intra;
        break ;
      case 'slack':
        tab = services.slack;
        break ;
      case 'campus':
        tab = services.campus;
        break ;
      // case 'grandExchange':
      //   tab = services.grandExchange;
      //   break ;
      case 'cantina':
        tab = services.cantina;
        break ;
      case 'dorms':
        tab = services.dorms;
        break ;
    }
    this.setState({ serviceUrl: tab })
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={ themes }>
          <CssBaseline>
            <AppHeader />
            <ServiceScreen service={ this.state.serviceUrl } />
            {/*

            <ServicesContainer />
            <ThemesContainer />
            <LanguagesContainer />

            */}
            <TabNavbar />
          </CssBaseline>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

const services = {
  intra: 'https://intra.42.fr',
  slack: 'https://42siliconvalleyschool.slack.com',
  campus: 'https://campus.42.us.org',
  grandExchange: {
    shop42: 'https://shop.42.us.org',
    bazaar: 'https://chupamelo.com',
    crowdFunding: 'https://rico.com'
  },
  cantina: 'https://cantina.42.us.org',
  dorms: 'https://jraleman.com/nostromo-dorms'
}

export default RootContainer;
