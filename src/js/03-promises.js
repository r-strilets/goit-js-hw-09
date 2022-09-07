const formSubmit = document.querySelector('.form');

const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

let position = null;

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(resp => resp);
    } else {
      reject(err => err);
    }
  });
  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

formSubmit.addEventListener('submit', onClickSubmit);

function onClickSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = e.target.elements;

  for (let i = 1; i <= amount.value; i += 1) {
    position += +step.value;

    createPromise(position, delay.value);
  }
  formSubmit.reset();
}
