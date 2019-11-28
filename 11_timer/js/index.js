'use strict';

import { CountdownTimer } from './timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 5, 2019'),
});

timer.init();
