function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

const colorChanger = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      bodyBGColorChanger();
    }, 1000);

    refs.start.disabled = true;
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.start.disabled = false;
  },
};

refs.start.addEventListener('click', () => {
  colorChanger.start();
});
refs.stop.addEventListener('click', () => {
  colorChanger.stop();
});

function bodyBGColorChanger() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

// refs.start.addEventListener('click', onClickStartColor);
// refs.stop.addEventListener('click', onClickStopColor);

// function onClickStartColor() {
//   refs.startBtn.disabled = true;
//   refs.stopBtn.disabled = false;

//   timerId = setTimeout(() => {
//     colorRandom = getRandomHexColor();
//     refs.bodyEl.style.background = colorRandom;
//   }, 1000);
// }

// function onClickStopColor() {
//   refs.startBtn.disabled = false;
//   refs.stopBtn.disabled = true;

//   clearInterval(timerId);
// }
