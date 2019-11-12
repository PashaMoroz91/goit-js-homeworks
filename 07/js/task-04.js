'use strict';
const counter = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

function increment() {
  counterValue += 1;
  return (counter.innerHTML = counterValue);
}

function decrement() {
  counterValue -= 1;
  return (counter.innerHTML = counterValue);
}

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
