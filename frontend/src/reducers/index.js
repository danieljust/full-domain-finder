import {combineReducers} from 'redux';
import domains from '../features/domains/DomainReducers';
import users from '../features/users/UserReducers';

export default combineReducers({
  domains,
  users
});
