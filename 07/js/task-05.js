'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function addName(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (!nameInput.value.length) nameOutput.textContent = 'незнакомец';
}
nameInput.addEventListener('input', addName);
