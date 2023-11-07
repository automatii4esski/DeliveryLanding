import { currentUser } from '../state';

const buttonsWrapperEl = document.querySelector('.header__buttons');
const accountInfoWrapperEl = document.querySelector('.header__account');
const nicknameEl = accountInfoWrapperEl.querySelector(
  '.header__account-nickname'
);

export const renderHeaderActions = function () {
  if (currentUser) {
    accountInfoWrapperEl.classList.add('header__account--active');
    buttonsWrapperEl.classList.remove('header__buttons--active');
    nicknameEl.textContent = currentUser.nickname;
  } else {
    accountInfoWrapperEl.classList.remove('header__account--active');
    buttonsWrapperEl.classList.add('header__buttons--active');
  }
};

renderHeaderActions();
