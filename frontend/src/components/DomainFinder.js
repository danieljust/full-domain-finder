import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class DomainFinder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};

    }

    sendSearchReq = event => {
        console.log(event);
    };

    render() {
        return (
            <div>
                <TextField
                    hintText="Some field here"
                />
                <RaisedButton
                onClick={this.sendSearchReq}/>
            </div>
        );
    }
}
