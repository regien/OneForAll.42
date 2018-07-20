import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';

class LanguagesContainer extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {
      value: 'en'
    };
    return ;
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    return ;
  }
  render () {
    return (
      <React.Fragment>
        <Typography>
          <h2>{ "Select a language" }</h2>
        </Typography>
        <FormControl
          component={ "fieldset" }
          required={ true }
          error={ false }
          className={ this._classes.formControl }
        >
          <RadioGroup
            aria-label={ "themes" }
            name={ "theme" }
            value={ this.state.value }
            onChange={ this.handleChange }
          >
            <FormControlLabel
              value={ "en" }
              control=
              {
                <Radio color={ "primary" } />
              }
              label={ "English" }
              disabled={ false }
            />
            <FormControlLabel
              value={ "fr" }
              control=
              {
                <Radio color={ "primary" } />
              }
              label={ "French" }
              disabled={ false }
            />
            <FormControlLabel
              value={ "es" }
              control=
              {
                <Radio color={ "primary" } />
              }
              label={ "Spanish" }
              disabled={ false }
            />
            <FormControlLabel
              value={ "de" }
              control=
              {
                <Radio color={ "primary" } />
              }
              label={ "German" }
              disabled={ false }
            />
            <FormControlLabel
              value={ "ru" }
              control=
              {
                <Radio color={ "primary" } />
              }
              label={ "Russian" }
              disabled={ false }
            />
          </RadioGroup>
        </FormControl>
      </React.Fragment>
    );
  }
}

LanguagesContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LanguagesContainer);
