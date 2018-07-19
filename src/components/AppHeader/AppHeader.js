import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class AppHeader extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this._title = this.props.title;
    this._logo = this.props.logo;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <AppBar
          position={ "static" }
          color={ "primary" }
        >
          <Toolbar>
            <p>{ "AppBar" }</p>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
