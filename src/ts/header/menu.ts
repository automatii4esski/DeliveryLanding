import { hideModal, showModal } from '../modal';
import { setOnHideModal } from '../state';

const menuBurgerButton = document.querySelector('.menu-burger');
const menuEl = document.querySelector('.menu');
const menuListEl = menuEl.querySelector('.menu__list') as HTMLElement;
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

menuListEl.addEventListener('click', function (e) {
  if (!(e.target instanceof HTMLElement)) return;

  const link = e.target.closest('.menu__item');

  if (!link) return;
  hideMenu();
  hideModal();
});
