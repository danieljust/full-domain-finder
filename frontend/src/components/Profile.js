import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import ProfileSettings from './ProfileSettings';
const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export default class Profile extends React.Component {

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
                <div>
                    <Paper>
                        <Paper circle={true} style={{width: 100, height: 100}} zDepth={4}>
                            <Avatar
                                src="https://pp.userapi.com/c836630/v836630839/5f8ee/vW8wH4rArEo.jpg"
                                size={90}
                                style={{margin: 5}}
                            />
                        </Paper>
                        <ProfileSettings/>
                    </Paper>
                </div>
            </div>
        );
    }
}
