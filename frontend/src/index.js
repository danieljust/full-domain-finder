/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'typeface-roboto';
ReactDOM.render(
  <Provider store={configureStore({})}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
