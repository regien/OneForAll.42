import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import WebView from 'react-electron-web-view'

class ServiceScreen extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
          <div className={ this._classes.webviewContainer }>
            <WebView
              className={ this._classes.webview }
              src="https://intra.42.fr/"
            />
          </div>
      </div>
    );
  }
}

ServiceScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceScreen);
