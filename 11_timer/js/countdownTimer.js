const CURRENT_TIME = new Date().getTime();

export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate.getTime();
    this.deltaTime = this.targetDate - CURRENT_TIME;
  }

  getDays() {
    const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
    return days;
  }

  getHourse() {
    const hours = Math.floor(
      (this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    return this.padTwoNamber(hours);
  }

  getMins() {
    const mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
    return this.padTwoNamber(mins);
  }

  getSecs() {
    const secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
    return this.padTwoNamber(secs);
  }

  padTwoNamber(value) {
    return String(value).padStart(2, '0');
  }

  renderTimer() {
    const template = `
    <div class="field">
    <span class="value" data-value="days">${this.getDays()}</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-value="hours">${this.getHourse()}</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-value="mins">${this.getMins()}</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-value="secs">${this.getSecs()}</span>
    <span class="label">Seconds</span>
  </div>
    `;

    this.selector.innerHTML = template;
  }

  startTimer() {
    const timer = setInterval(() => {
      this.deltaTime = this.deltaTime - 1000;
      this.renderTimer();
      if (this.deltaTime <= 0) {
        clearInterval(timer);
        return;
      }
    }, 1000);
    return timer;
  }

  init() {
    this.renderTimer();
    this.startTimer();
  }
}
