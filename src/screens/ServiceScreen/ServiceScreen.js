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
    this._service = this.props.service;
    this.state = {
      serviceUrl: 'https://intra.42.fr'
    };

    return ;
  }
  componentWillReceiveProps (val) {
    // this.setState({ serviceUrl: this._service })
    // alert(val.service);
    this._service = val.service;
  }
  /*

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

  */
  render () {
    return (
      <div className={ this._classes.root }>
        <div className={ this._classes.webviewContainer }>
        {/*
          <WebView
            className={ this._classes.webview }
            src={ this.state.serviceUrl }
          />
        */}

            {/* Hacks! */}
            {
              this._service === 'intra' ?
                <WebView
                  className={ this._classes.webview }
                  src={ 'https://intra.42.fr' }
                />
              :
                (null)
            }
            {
              this._service === 'slack' ?
                <WebView
                  className={ this._classes.webview }
                  src={ 'https://42siliconvalleyschool.slack.com' }
                />
              :
                (null)
            }
            {
              this._service === 'campus' ?
                <WebView
                  className={ this._classes.webview }
                  src={ 'https://campus.42.us.org' }
                />
              :
                (null)
            }
            {
              this._service === 'shop42' ?
                <WebView
                  className={ this._classes.webview }
                  src={ 'https://shop.42.us.org' }
                />
              :
                (null)
            }
            {
              this._service === 'cantina' ?
                <WebView
                  className={ this._classes.webview }
                  src={ 'https://cantina.42.us.org' }
                />
              :
                (null)
            }
            {
              this._service === 'nostromo-dorms' ?
                <WebView
                  className={ this._classes.webview }
                  src={ 'https://jraleman.com/nostromo-dorms' }
                />
              :
                (null)
            }
        </div>
      </div>
    );
  }
}

ServiceScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceScreen);
