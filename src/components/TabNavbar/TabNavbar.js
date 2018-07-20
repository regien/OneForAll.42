import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDotCircle,
  faUserAstronaut,
  faChalkboardTeacher,
  faStore,
  faCoffee,
  faHome
} from '@fortawesome/free-solid-svg-icons'
import {
  faSlack,
} from '@fortawesome/free-brands-svg-icons'

class TabNavbar extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {
      value: 'home'
    };
    return ;
  }
  handleChange = (event, value) => {
    this.props.action(value);
    //this.setState({ value });
  }
  componentDidUpdate () {

  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={ this._classes.root }>
        <BottomNavigation
          value={ this.state.value }
          onChange={ this.handleChange }
          showLabels={ true }
          className={ this._classes.root }
        >
          <BottomNavigationAction
            disabled={ false }
            value={ "home" }
            icon={ <FontAwesomeIcon icon={ faDotCircle }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            value={ "intra" }
            label={ "Intra42" }
            showLabel={ value !== "home" ? true : false }
            icon={ <FontAwesomeIcon icon={ faUserAstronaut }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            value={ "slack" }
            label={ "Slack" }
            showLabel={ value !== "home" ? true : false }
            icon={ <FontAwesomeIcon icon={ faSlack }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            value={ "campus" }
            label={ "Campus" }
            showLabel={ value !== "home" ? true : false }
            icon={ <FontAwesomeIcon icon={ faChalkboardTeacher }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            value={ "e-commerce" }
            label={ "Grand Exchange" }
            showLabel={ value !== "home" ? true : false }
            icon={ <FontAwesomeIcon icon={ faStore }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            value={ "cantina" }
            label={ "Cantina" }
            showLabel={ value !== "home" ? true : false }
            icon={ <FontAwesomeIcon icon={ faCoffee }/> }
          />
          <BottomNavigationAction
            disabled={ false }
            value={ "dorms" }
            label={ "Dorms" }
            showLabel={ value !== "home" ? true : false }
            icon={ <FontAwesomeIcon icon={ faHome }/> }
          />
        </BottomNavigation>
      </div>
    );
  }
}

TabNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabNavbar);
