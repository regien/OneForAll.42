import React from 'react';
import styles from './styles';

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
        <h1>{ "THomeScreen" }</h1>
      </div>
    );
  }
}

HomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default HomeScreen;
