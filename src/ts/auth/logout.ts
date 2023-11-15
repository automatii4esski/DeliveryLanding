import { setCurrentUser } from '../state';
import { renderHeaderActions } from './actions';

const logoutButtonEl = document.querySelector('.header__logout');

logoutButtonEl.addEventListener('click', function () {
  setCurrentUser(undefined);
  renderHeaderActions();
});
