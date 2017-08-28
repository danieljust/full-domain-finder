import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionExplore from 'material-ui/svg-icons/action/explore';
import ActionExit from 'material-ui/svg-icons/action/exit-to-app';
export default class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    title="Domain finder"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    // iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                </AppBar>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <List>
                        <ListItem
                            disabled={true}
                        ><Link to="/profile">

                            <Avatar
                                src="https://pp.userapi.com/c836630/v836630839/5f8ee/vW8wH4rArEo.jpg"
                                size={100}
                                style={{margin: 5}}
                            />
                        </Link>
                        </ListItem>
                        <Divider/>
                        <Link to="/find" style={{textDecoration: 'none'}}>
                            <ListItem
                                leftIcon={<ActionExplore/>}
                            >
                                Look for new
                            </ListItem>
                        </Link>
                        <Link to="/history" style={{textDecoration: 'none'}}>
                            <ListItem
                                leftIcon={<ActionGrade />}
                            >
                                Check history
                            </ListItem>
                        </Link>
                        <Link to="/history" style={{textDecoration: 'none'}}>
                            <ListItem
                                leftIcon={<ActionExit/>}
                            >
                                Logout
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
            </div>
        );
    }
}
