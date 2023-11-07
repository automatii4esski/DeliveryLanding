import { onHideModal } from './state';

const modalEl = document.querySelector('.modal');
const modalContentEl = document.querySelector('.modal-content');

modalEl.addEventListener('click', function (e) {
  hideModal();
  onHideModal();
});

modalContentEl.addEventListener('click', function (e) {
  e.stopPropagation();
});

export const showModal = function () {
  modalEl.classList.add('modal--active');
};

export const hideModal = function () {
  modalEl.classList.remove('modal--active');
};
