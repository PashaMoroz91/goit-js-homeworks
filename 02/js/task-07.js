"use strict";
let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Ввведите число");
  if (input !== null) {
    numbers.push(Number(input));
  }
} while (input !== null);
if (numbers.length !== 0) {
  for (let number of numbers) {
    total += Number(number);
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
