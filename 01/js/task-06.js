"use strict";
let total = 0;
let input;

do {
  input = prompt("Ввведите число");
  if (input !== null) {
    total += Number(input);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
