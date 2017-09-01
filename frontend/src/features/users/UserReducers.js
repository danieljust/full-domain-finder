import {handleActions} from 'redux-actions';
import * as actions from './UserActions';

export default handleActions({
  [actions.loginUserStart]: (state, action) => ({
    ...state,
    pending: true,
    error: null
  }),
  [actions.loginUserEnd]: {
    next: (state, action) => ({...state, user: action.payload, pending: false}),
    throw: (state, action) => ({...state, pending: false, error: action.payload})
  }
}, {user: null, pending: false, error: null})
