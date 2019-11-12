'use strict';
const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
function changeFontSize() {
  text.style.fontSize = fontSize.value + 'px';
}

fontSize.addEventListener('input', changeFontSize);
