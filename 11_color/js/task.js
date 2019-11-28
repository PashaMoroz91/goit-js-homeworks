/* Есть массив цветов в hex-формате и кнопки Start и Stop.
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body 
на случайное значение из массива используя инлайн-стиль. 
При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval. */

'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('.js-body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', handleStartCLick);
refs.btnStop.addEventListener('click', handleStopCLick);

let timeId;

function handleStartCLick() {
  timeId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[randomColor];
    refs.btnStart.setAttribute('disabled', true);
  }, 1000);
}

function handleStopCLick() {
  clearInterval(timeId);
  refs.btnStart.removeAttribute('disabled');
}
