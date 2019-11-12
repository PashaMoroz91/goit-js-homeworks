'use strict';
const input = document.querySelector('#validation-input');
const length = input.getAttribute('data-length');

const validationInput = function() {
  if (input.value.length === Number(length)) {
    input.classList.add('valid');
    input.classList.replace('invalid', 'valid');
  } else {
    input.classList.add('invalid');
    input.classList.replace('valid', 'invalid');
  }
};

input.addEventListener('blur', validationInput);
