'use strict';

import { CountdownTimer } from './timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 24, 2019 6:08'),
});

timer.initTimer();
