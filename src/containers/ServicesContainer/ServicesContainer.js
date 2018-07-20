import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

class ServicesContainer extends React.Component {
  constructor (props) {
    super(props);
    this._classes = this.props.classes;
    this.state = {
      intra: true,
      slack: true,
      campus: true,
      shop42: true,
      bazaar: true,
      crowdFunding: true,
      cantina: true,
      dorms: true
    };
    return ;
  }
  handleChange = (name) => (event) => {
    // alert(name)
    this.setState({ [name]: event.target.checked });
    return ;
  }
  // ugly but works!
  render () {
    return (
      <React.Fragment>
        <Typography>
          <h2>{ "Select your services" }</h2>
        </Typography>
        <FormGroup component={ "fieldset" }>
          { /* Intra Toggle-Switch */ }
          <FormControlLabel
            label={ "Intra" }
            control=
            {
              <Switch
                checked={ this.state.intra }
                onChange={ this.handleChange('intra') }
                value={ 'intra' }
                color={ "primary" }
              />
            }
          />
          { /* Slack Toggle-Switch */ }
          <FormControlLabel
            label={ "Slack" }
            control=
            {
              <Switch
                checked={ this.state.slack }
                onChange={ this.handleChange('slack') }
                value={ 'slack' }
                color={ "primary" }
              />
            }
          />
          { /* Campus Toggle-Switch */ }
          <FormControlLabel
            label={ "Campus" }
            control=
            {
              <Switch
                checked={ this.state.campus }
                onChange={ this.handleChange('campus') }
                value={ 'campus' }
                color={ "primary" }
              />
            }
          />
          { /* Shop Toggle-Switch */ }
          <FormControlLabel
            label={ "Shop.42" }
            control=
            {
              <Switch
                checked={ this.state.shop42 }
                onChange={ this.handleChange('shop42') }
                value={ 'shop42' }
                color={ "primary" }
              />
            }
          />
          { /* Bazaar Toggle-Switch */ }
          <FormControlLabel
            label={ "Bazaar" }
            control=
            {
              <Switch
                checked={ this.state.bazaar }
                onChange={ this.handleChange('bazaar') }
                value={ 'bazaar' }
                color={ "primary" }
              />
            }
          />
          { /* CrowdFunding Toggle-Switch */ }
          <FormControlLabel
            label={ "Crowd Funding" }
            control=
            {
              <Switch
                checked={ this.state.crowdFunding }
                onChange={ this.handleChange('crowdFunding') }
                value={ 'crowdFunding' }
                color={ "primary" }
              />
            }
          />
          { /* Cantina Toggle-Switch */ }
          <FormControlLabel
            label={ "Cantina" }
            control=
            {
              <Switch
                checked={ this.state.cantina }
                onChange={ this.handleChange('cantina') }
                value={ 'cantina' }
                color={ "primary" }
              />
            }
          />
          { /* Dorms Toggle-Switch */ }
          <FormControlLabel
            label={ "Dorms" }
            control=
            {
              <Switch
                checked={ this.state.dorms }
                onChange={ this.handleChange('dorms') }
                value={ 'dorms' }
                color={ "primary" }
              />
            }
          />
        </FormGroup>
      </React.Fragment>
    );
  }
}

ServicesContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServicesContainer);
