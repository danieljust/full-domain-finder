import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const divStyle = {
    'margin-top': 100,
    width: '50%',
    margin: "0 auto"
};
const paperStyle = {'margin-top': 100};
const myInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};
export default class DomainFinder extends React.Component {


    constructor(props) {
        super(props);
        this.state = {textFieldValue: ''};
    }

    sendSearchReq = event => {
        return fetch(`http://localhost:3000/domains?limit=${this.refs.myField.getValue()}`, myInit)
            .then(response => response.json())
            .then(result => console.log(result));
    };

    render() {
        return (
            <div >
                <div style={divStyle}>

                    <Paper style={paperStyle} zDepth={4}>
                        <TextField
                            type="number"
                            ref="myField"
                        />
                        <RaisedButton
                            onClick={this.sendSearchReq}>Text there</RaisedButton>
                    </Paper>
                </div>
            </div>
        );
    }
}
