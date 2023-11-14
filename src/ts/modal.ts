import { onHideModal } from './state';

const modalEl = document.querySelector('.modal');
const modalContentEl = modalEl.querySelector('.modal-content');
const modalImgWrapper = modalEl.querySelector(
  '.modal__img-wrapper'
) as HTMLElement;
const modalImg = modalImgWrapper.querySelector(
  '.modal__img'
) as HTMLImageElement;

modalEl.addEventListener('click', function (e) {
  hideModal();
  onHideModal();
});

modalContentEl.addEventListener('click', function (e) {
  e.stopPropagation();
});

export const showModal = function () {
  modalEl.classList.add('modal--active');
  modalContentEl.classList.add('modal-content--active');
};

export const hideModal = function () {
  modalEl.classList.remove('modal--active');
  modalContentEl.classList.remove('modal-content--active');
};

export const showGalleryModal = function (imgPath: string) {
  modalEl.classList.add('modal--active');
  modalImgWrapper.classList.add('modal__img-wrapper--active');
  modalImg.src = imgPath;
};

export const hideGalleryModal = function () {
  modalEl.classList.remove('modal--active');
  modalImgWrapper.classList.remove('modal__img-wrapper--active');
};
