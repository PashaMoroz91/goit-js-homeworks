'use strict';
import users from './users.js';

// task-1

const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));
