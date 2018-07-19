import React from 'react';
import styles from './styles';

class OnboardingScreen extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <h1>{ "OnboardingScreen" }</h1>
      </div>
    );
  }
}

OnboardingScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default OnboardingScreen;
