import React from 'react';
import styles from './styles';

class LanguagesContainer extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <h1>{ "LanguagesContainer" }</h1>
      </div>
    );
  }
}

LanguagesContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LanguagesContainer;
