import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import * as actions from '../../features/users/UserActions';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


export class LoginButton extends React.Component {
  loginUser(pwd) {
    this.props.dispatch(actions.loginUser("test_user", "test"));
  }

  render() {
    return (<div>
      <Button raised
              color="primary"
              className={this.props.classes.button}
              onClick={this.loginUser}>
        Primary
      </Button>
    </div>)
  };
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(LoginButton);
