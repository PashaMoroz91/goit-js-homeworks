/* Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. 
Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

Плагин ожидает фиксированную HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. 
Количество дней может состоять из более чем двух цифр.

Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
time - разница между targetDate и текущей датой.*/

'use strict';

export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.currentDate = Date.now();
    this.time = this.targetDate - this.currentDate;
    this.refs = {
      daysHolder: document.querySelector('span[data-value="days"]'),
      hoursHolder: document.querySelector('span[data-value="hours"]'),
      minsHolder: document.querySelector('span[data-value="mins"]'),
      secsHolder: document.querySelector('span[data-value="secs"]'),
    };
  }
  /* Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
  миллисекунд в одном дне (миллисекунды * секунды * минуты * часы) */
  getDays() {
    return Math.floor(this.time / (1000 * 60 * 60 * 24));
  }
  /* Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
  остатка % и делим его на количество миллисекунд в одном часе
  (1000 * 60 * 60 = миллисекунды * минуты * секунды) */
  getHours() {
    return Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  /* Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
  миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды) */
  getMins() {
    return Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
  }
  /* Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
  миллисекунд в одной секунде (1000) */
  getSecs() {
    return Math.floor((this.time % (1000 * 60)) / 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  startTimer() {
    const timerID = setInterval(() => {
      this.time = this.time - 1000;

      if (this.time < 0) {
        clearInterval(timerID);
        return;
      }

      this.renderTimer();
    }, 1000);
  }

  renderTimer() {
    this.refs.daysHolder.textContent = this.pad(this.getDays());
    this.refs.hoursHolder.textContent = this.pad(this.getHours());
    this.refs.minsHolder.textContent = this.pad(this.getMins());
    this.refs.secsHolder.textContent = this.pad(this.getSecs());
  }

  initTimer() {
    this.renderTimer();
    this.startTimer();
  }
}
