import { CountdownTimer } from './countdownTimer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2020, 1, 1'),
});

timer.init();
