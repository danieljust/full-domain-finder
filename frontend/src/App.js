import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import {connect} from 'react-redux';
import getComponent from './utils/getComponent';
import './App.css';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100) // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100)
//   }
// };

// const AuthButton = withRouter(({history}) => (
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!
//       <button onClick={() => {
//         fakeAuth.signout(() => history.push('/'))
//       }}>Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// ))
const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    props.user ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
    )
  )}/>
);

const Public = () => <h3>Public</h3>;

const Protected = () => <h3>Protected</h3>;

const App = () => (
  <div className="App">
    {/*<Route exact path="/"*/}
    {/*component={getComponent('mainPage')}*/}
    {/*onEnter={this.requireAuth}/>*/}
    <Route exact path="/login"
           component={getComponent('login')}/>
    <PrivateRoute exact path="/" component={getComponent('mainPage')}/>
    {/*<Route path="/find" component={getComponent('domainFinder')} />*/}
    {/* <Route path="/history" component={getComponent('comments')}/> */}
    {/*<Route path="/profile" component={getComponent('profile')} />*/}
    {/* <Route path="/jobs" component={getComponent('jobs')}/> */}
  </div>
);

export default connect(state => ({
  user: state.users.user,
  pending: state.users.pending
}))(App);


