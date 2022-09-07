import Notiflix from 'notiflix';
const formSubmit = document.querySelector('.form');

const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

let position = null;

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}

formSubmit.addEventListener('submit', onClickSubmit);

function onClickSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = e.target.elements;

  for (let i = 1; i <= amount.value; i += 1) {
    position += 1;
    delay.value = Number(step.value) + Number(delay.value);
    createPromise(position, delay.value);
  }
  console.clear();
  position = 0;
  e.target.reset();
}
