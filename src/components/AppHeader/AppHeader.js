import React from 'react';
import styles from './styles';

class AppHeader extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <h1>{ "AppHeader" }</h1>
      </div>
    );
  }
}

TabNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AppHeader;
