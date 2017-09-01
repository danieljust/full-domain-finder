/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class TextArea extends React.Component {
  state = {
    name: 'Cat in the Hat',
    multiline: 'Controlled',
  };

  render() {
    const classes = this.props.classes;

    return (
      <form className={classes.container} noValidate>
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={event => this.setState({name: event.target.value})}
          margin="normal"
        />
      </form>
    );
  }
}

TextArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextArea);
