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

// icons
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

import FontAwesome from 'react-fontawesome';

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
      <FontAwesome name='rocket' />
      <p>{" as asas jas jasj asj j aj j sajasjasjjja jsj as jja "}</p>
        <BottomNavigation
          value={ this.state.value }
          onChange={ this.handleChange }
          showLabels={ true }
          className={ this._classes.root }
        >
          <BottomNavigationAction
            disabled={ false }
            label="Home"
            icon={ <PersonPinIcon /> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Intra42"
            icon={ <PersonPinIcon /> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Slack"
            icon={ <PersonPinIcon /> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Campus"
            icon={ <PersonPinIcon /> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Grand Exchange"
            icon={ <PersonPinIcon /> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Cantina"
            icon={ <PersonPinIcon /> }
          />
          <BottomNavigationAction
            disabled={ false }
            label="Dorms"
            icon={ <PersonPinIcon /> }
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
