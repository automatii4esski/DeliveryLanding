const miniItemsWrapperEl = document.querySelector('.promo-slider__mini-items');
const miniItemsEl = miniItemsWrapperEl.children;
const itemsWrapperEl = document.querySelector('.promo-slider__items-wrapper');
const itemsEl = itemsWrapperEl.children;
let currentIndex = 0;
const arrowControlsEl = document.querySelector('.promo-slider__controls');

itemsEl[currentIndex].classList.add('promo-slider__item--active');
miniItemsEl[currentIndex].classList.add('promo-slider__mini-item--active');

const changeActiveSlider = function (sliderIndex: number) {
  itemsEl[currentIndex].classList.remove('promo-slider__item--active');
  miniItemsEl[currentIndex].classList.remove('promo-slider__mini-item--active');
  currentIndex = sliderIndex;
  itemsEl[currentIndex].classList.add('promo-slider__item--active');
  miniItemsEl[currentIndex].classList.add('promo-slider__mini-item--active');
};

const onPrevClick = function () {
  currentIndex - 1 >= 0
    ? changeActiveSlider(currentIndex - 1)
    : changeActiveSlider(itemsEl.length - 1);
};

const onNextClick = function () {
  currentIndex + 1 < itemsEl.length
    ? changeActiveSlider(currentIndex + 1)
    : changeActiveSlider(0);
};

let interval = setInterval(function () {
  onNextClick();
}, 4000);

const resetInterval = function () {
  clearInterval(interval);
  interval = setInterval(function () {
    onNextClick();
  }, 4000);
};

miniItemsWrapperEl.addEventListener('click', function (e) {
  if (!(e.target instanceof HTMLElement)) return;
  const miniItem = e.target.closest('.promo-slider__mini-item');

  if (!(miniItem instanceof HTMLElement)) return;

  resetInterval();
  changeActiveSlider(Number(miniItem.dataset.index));
});

arrowControlsEl.addEventListener('click', function (e) {
  if (!(e.target instanceof HTMLElement)) return;
  const button = e.target.closest('.promo-slider__arrow');
  if (!button) return;
  if (button.classList.contains('promo-slider__arrow-left')) {
    onPrevClick();
  } else {
    onNextClick();
  }
  resetInterval();
});
