import './styles.css';

import CountdownTimer from './timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 20, 2021 18:00:00'),
});
timer.start();
