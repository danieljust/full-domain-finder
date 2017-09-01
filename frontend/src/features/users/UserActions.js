import {createAction} from 'redux-actions';
import * as service from './UserService';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_END = 'LOGIN_USER_END';

export const loginUserStart = createAction(LOGIN_USER_START);
export const loginUserEnd = createAction(LOGIN_USER_END);

export function loginUser(user, password) {
  return dispatch => {
    dispatch(loginUserStart());
    if (service.loginUser(user, password)) {
      dispatch(loginUserEnd(user))
    } else {
      dispatch(loginUserEnd(new Error("Wrong pwd")))
    }
  }
}
