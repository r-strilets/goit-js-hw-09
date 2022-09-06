import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const someInput = document.querySelector('input[type="text"]');
const buttonStart = document.querySelector('[data-start]');
refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(someInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

buttonStart.addEventListener('click', onClickTimerBegin);
someInput.addEventListener('input', inputValue);
function inputValue(e) {
  if (new Date(e.target.value) < options.defaultDate) {
    alert('Please choose a date in the future');
    buttonStart.disabled = true;
  } else {
    buttonStart.disabled = false;
  }
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function onClickTimerBegin(e) {
  const selectedTime = new Date(someInput.value).getTime();
  let timeLeft = null;
  const interval = setInterval(() => {
    const currentDate = new Date().getTime();
    timeLeft = selectedTime - currentDate;
    if (timeLeft >= 0) {
      refs.days.innerHTML = addLeadingZero(convertMs(timeLeft).days);
      refs.hours.innerHTML = addLeadingZero(convertMs(timeLeft).hours);
      refs.minutes.innerHTML = addLeadingZero(convertMs(timeLeft).minutes);
      refs.seconds.innerHTML = addLeadingZero(convertMs(timeLeft).seconds);
    }
    // if (timeLeft <= 1) {
    //   clearInterval(interval);
    // }
  }, 1000);

  e.target.disabled = true;
}
