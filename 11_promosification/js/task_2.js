/* Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
а принимала всего два параметра allUsers и userName и возвращала промис. */

'use strict';

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

/* До решения задачи работало так */
// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

/* Сейчас работает так */
const toggleUserState = (allUsers, userName) => {
  return new Promise(resolved => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolved(updatedUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);

/* До решения задачи работало так */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/* Сейчас работает так */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
