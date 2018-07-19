import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDotCircle,
  faUserAstronaut,
  // faSlack,
  faChalkboardTeacher,
  faStore,
  faCoffee,
  faHome
} from '@fortawesome/free-solid-svg-icons'

import {
  faSlack,
} from '@fortawesome/free-brands-svg-icons'

class TabNavbar extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {
      value: 0
    };
    return ;
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <BottomNavigation
          value={ this.state.value }
          onChange={ this.handleChange }
          showLabels={ true }
          className={ this._classes.root }
        >
          <BottomNavigationAction
            disabled={ false }
            label="Home"
            icon={ <FontAwesomeIcon icon={ faDotCircle }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Intra42"
            icon={ <FontAwesomeIcon icon={ faUserAstronaut }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Slack"
            icon={ <FontAwesomeIcon icon={ faSlack }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Campus"
            icon={ <FontAwesomeIcon icon={ faChalkboardTeacher }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Grand Exchange"
            icon={ <FontAwesomeIcon icon={ faStore }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Cantina"
            icon={ <FontAwesomeIcon icon={ faCoffee }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Dorms"
            icon={ <FontAwesomeIcon icon={ faHome }/> }
          />
        </BottomNavigation>
      </div>
    );
  }
}

TabNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(TabNavbar);
