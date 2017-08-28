import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DrawerUndockedExample from './components/Drawer';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getComponent from './utils/getComponent';
class App extends Component {

    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <div className="App">
                        <DrawerUndockedExample/>
                        {/*<Route path="/posts/:postId" component={PostDetailed}/>*/}
                        <Route path="/find" component={getComponent('domainFinder')}/>
                        {/*<Route path="/history" component={getComponent('comments')}/>*/}
                        <Route exact path="/" component={getComponent('mainPage')}/>
                        <Route path="/profile" component={getComponent('profile')}/>
                        {/*<Route path="/jobs" component={getComponent('jobs')}/>*/}
                    </div>
                </MuiThemeProvider>
            </Router>
        );

    }
}

export default connect()(App);
