const dummyDB = require('../../dummyDB');
const myInit = {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
};
export const loginUser = (user, pwd) =>
dummyDB.test_user === pwd;
