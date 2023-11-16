import { hideModal, showModal } from '../modal';
import { setOnHideModal } from '../state';

const menuBurgerButton = document.querySelector('.menu-burger');
const menuEl = document.querySelector('.menu');
let isActiveMenu = false;

const hideMenu = function () {
  menuBurgerButton.classList.remove('menu-burger--active');
  menuEl.classList.remove('menu--active');
  isActiveMenu = false;
};

menuBurgerButton.addEventListener('click', function () {
  menuBurgerButton.classList.toggle('menu-burger--active');
  menuEl.classList.toggle('menu--active');
  if (isActiveMenu) {
    hideModal();
  } else {
    showModal();
    setOnHideModal(hideMenu);
  }
  isActiveMenu = !isActiveMenu;
});
