/*
  Copy-pasta from https://material-ui.com/demos/dialogs/
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from '../../themes';
import AppHeader from '../../components/AppHeader';
import TabNavbar from '../../components/TabNavbar';
import ServiceScreen from '../../screens/ServiceScreen';

import LanguagesContainer from '../LanguagesContainer';
import ServicesContainer from '../ServicesContainer';
import ThemesContainer from '../ThemesContainer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

// Show / Hide Toogle:
// https://stackoverflow.com/questions/29913387/show-hide-components-in-reactjs

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

class RootContainer extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {
      service: 'Boku no Hero',
      serviceUrl: 'https://42schoolsiliconvalley.slack.com',
      open: false,
      value: 'Done',
    };
    return ;
  }
  handleNavBar = (val) => {
    // this.setState({ serviceUrl: 'https://intra.42.fr' })
    alert(val);
    return ;
  }
  openDialogSetting = () => {
    this.setState({ open: true });
  };
  handleClose = value => {
    this.setState({ value, open: false });
  };
  /*
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
  */
  render () {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={ themes }>
          <CssBaseline>
            <AppHeader />

            <ServiceScreen service={ this.state.serviceUrl } />
{/*
            <ConfirmationDialogRaw
              open={ this.state.open }
              onClose={ this.handleClose }
              value={ this.state.value }
            />
*/}
            <TabNavbar
              action={ this.handleNavBar }
            />
          </CssBaseline>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

/*
** ............................................................................
*/

class ConfirmationDialogRaw extends React.Component {
  radioGroup = null;

  constructor(props) {
    super(props);

    this.state.value = this.props.value;
  }

  state = {};

  // TODO
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }
  handleEntering = () => {
    // this.radioGroup.focus();
  };
  handleCancel = () => {
    this.props.onClose(this.props.value);
  };
  handleOk = () => {
    this.props.onClose(this.state.value);
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value, ...other } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">
          {/* TODO: Set the title here, instead of using the container */}
        </DialogTitle>
        <DialogContent>

          <ServicesContainer />

        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            { "Cancel" }
          </Button>
          <Button onClick={this.handleOk} color="primary">
            { "Save" }
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
};

export default RootContainer;
