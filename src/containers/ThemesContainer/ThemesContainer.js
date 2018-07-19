import React from 'react';
import styles from './styles';

class ThemesContainer extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {};
    return ;
  }
  render () {
    return (
      <div className={ this._classes.root }>
        <h1>{ "ThemesContainer" }</h1>
      </div>
    );
  }
}

ThemesContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ThemesContainer;
