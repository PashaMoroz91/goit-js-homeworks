'use strict';

// const delay = ms => {
//   return new Promise(resolved => {
//     resolved(ms);
//   });
//   return Promise.resolve(ms);
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(1000).then(logger);
delay(1500).then(logger);
delay(2000).then(logger);
