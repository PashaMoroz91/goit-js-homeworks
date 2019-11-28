/* Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, 
а принимала всего один параметр transaction и возвращала промис.*/

'use strict';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* До решения задачи работало так */
// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };

/* Сейчас работает так */
const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((success, error) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        success({ id: transaction.id, time: delay });
      } else {
        error(transaction.id);
      }
    }, delay);
  });
};

/* До решения задачи работало так */
// const logSuccess = (id, time ) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

/* Сейчас работает так */
const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/* До решения задачи работало так */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

/* Сейчас работает так */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
