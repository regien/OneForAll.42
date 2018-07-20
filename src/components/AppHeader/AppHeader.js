import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'material-ui-search-bar';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import MicIcon from '@material-ui/icons/Mic';
import ChatIcon from '@material-ui/icons/Chat';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class AppHeader extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this._title = this.props.title;
    this._logo = this.props.logo;
    this.state = {
      searcbValue: null,
      newValue: null
    };
    return ;
  }
  handleSearch (val) {
    alert("You have searched for: \n" + val);
    return ;
  }
  handleChat () {
    alert("Hello there!")
    return ;
  }
  handleMic () {
    alert("1. 2. 3... Testing...")
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <AppBar
          position={ "static" }
          color={ "primary" }
        >
          <Toolbar style={{ justifyContent: 'space-between'}}>
            <SearchBar
              className={ this._classes.searchBar }
              value={ this.state.searchValue }
              onChange={(newValue) => this.setState({ searchValue: newValue })}
              onRequestSearch={() => this.handleSearch(this.state.searchValue)}
              classes= {{
                input: this._classes.input 
              }}
            >
              <CloseIcon color='white'  />
              <SearchIcon color='white'  />
            </SearchBar>
            <div className={ this._classes.btnContainer }>
              <IconButton
                className={ this._classes.btn }
                color="inherit"
                aria-label="Options"
              >
                <MicIcon />
              </IconButton>
              <IconButton
                className={ this._classes.btn }
                color="inherit"
                aria-label="Options"
              >
                <ChatIcon />
              </IconButton>
            </div>
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
