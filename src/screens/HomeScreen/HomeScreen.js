import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

class HomeScreen extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>

      </div>
    );
  }
}

HomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeScreen);
