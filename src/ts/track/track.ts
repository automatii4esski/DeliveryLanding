const trackAnswerWrapperEl = document.querySelector('.track__answer');
const trackAnswerText = trackAnswerWrapperEl.querySelector(
  '.track__answer-text'
);
const trackAnswerCloseButtonEl = trackAnswerWrapperEl.querySelector(
  '.track__answer-button'
);
const trackDescription = document.querySelector('.track__description');

const trackForm = document.querySelector('.track__form') as HTMLFormElement;

trackForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(trackForm);
  const trackId = formData.get('trackId');
  trackDescription.classList.add('track__description--hidden');
  trackAnswerWrapperEl.classList.remove('track__answer--hidden');
  trackAnswerText.textContent = `Your track status of order with id - ${trackId}`;
  trackForm.reset();
});

trackAnswerCloseButtonEl.addEventListener('click', function () {
  trackDescription.classList.remove('track__description--hidden');
  trackAnswerWrapperEl.classList.add('track__answer--hidden');
});
