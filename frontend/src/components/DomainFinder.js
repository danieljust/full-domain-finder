import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import * as actions from '../features/domains/DomainActions';
import Divider from 'material-ui/Divider';
import {DomainsList} from './DomainsList';

const divStyle = {
  'margin-top': 100,
  width: '50%',
  margin: "0 auto"
};
const paperStyle = {'margin-top': 100};

export class DomainFinder extends React.Component {
  sendSearchReq = event => {
    const count = this.refs.myField.getValue();
    this.props.dispatch(actions.fetchDomains(count));
  };

  render() {
    const {domains, pending} = this.props;
    return (
      <div >
        <div style={divStyle}>
          <Paper style={paperStyle} elevation={4}>
            <TextField
              type="number"
              ref="myField"
            />
            <Button
              raised
              color="accent"
              onClick={this.sendSearchReq}>Text there</Button>
          </Paper>
          <Divider/>
          <Paper elevation={1}>
            <DomainsList domains={domains}/>
          </Paper>
        </div>
      </div>
    );
  }
}
export default connect(state => ({
  domains: state.domains.domains,
  pending: state.domains.pending
}))(DomainFinder);
