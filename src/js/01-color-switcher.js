const body = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timeOut = null;

buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStopClick);

function onButtonStartClick(e) {
  e.target.disabled = true;
  buttonStop.disabled = false;
  timeOut = setInterval(
    () => (body.style.backgroundColor = randomColor()),
    1000
  );
}

function onButtonStopClick(e) {
  e.target.disabled = true;
  buttonStart.disabled = false;
  clearInterval(timeOut);
}
