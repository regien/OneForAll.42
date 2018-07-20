import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/FormControl';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import styles from './styles';

// class LoginScreen extends React.Component {
//   constructor (props) {
//     super(props);
//     this._classes = this.props.classes;
//     this.state = {};
//     return ;
//   }
//   render () {
//     return (
//       <div className={ this._classes.root }>
//         <h1>{ "LoginScreen" }</h1>
//       </div>
//     );
//   }
// }

const LoginScreen = props => {
  const { classes } = props;

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={8} alignItems='flex-end'>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id='username'
              name='username'
              label='Username'
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={8} alignItems='flex-end'>
          <Grid item>
            <Lock />
          </Grid>
          <Grid item>
            <TextField
              id='password'
              name='password'
              label='Password'
              type='password'
            />
          </Grid>
        </Grid>
      </div>
      <Button variant='contained' color='primary' type='submit' >
        Login
      </Button>
    </div>
  );
};

LoginScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginScreen);
