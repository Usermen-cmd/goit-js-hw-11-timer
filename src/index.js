import './styles.css';
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerRef = document.querySelector(selector);
    this.valueArrRef = this.timerRef.querySelectorAll('.value');
    this.targetDate = targetDate;
  }
  start() {
    const timerIntervalId = setInterval(() => {
      const timeLeft = this.targetDate.getTime() - Date.now();
      if (timeLeft <= 0) {
        this.stop(timerIntervalId);
        return;
      }
      this.transformTime(timeLeft);
    }, 1000);
  }

  transformTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.setTimer({ days, hours, mins, secs });
  }
  setTimer(obj) {
    this.valueArrRef.forEach(el => (el.textContent = obj[el.dataset.value]));
  }
  stop(id) {
    clearInterval(id);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 04, 2021 03:23:30'),
});
timer.start();
