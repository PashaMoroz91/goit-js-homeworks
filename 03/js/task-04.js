"use strict";
const countTotalSalary = function(employee) {
  let total = 0;
  const arrSalary = Object.values(employee);
  for (let value of arrSalary) {
    total += value;
  }
  return total;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
);
