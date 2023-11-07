import { showAlert } from '../alert';
import { hideModal, showModal } from '../modal';
import {
  usersData,
  currentUser,
  setCurrentUser,
  setOnHideModal,
} from '../state';
import { renderHeaderActions } from './header-actions';

{
  const findUser = function (formData: FormData) {
    return usersData.find(
      (user) =>
        user.nickname === formData.get('nickname') &&
        user.password === formData.get('password')
    );
  };

  //Form
  const formEl = document.querySelector('.login-form') as HTMLFormElement;

  const hideForm = function () {
    formEl.reset();
    formEl.classList.remove('login-form--active');
  };

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = findUser(new FormData(formEl));
    if (user) {
      showAlert('Login success');
      hideModal();
      hideForm();
      setCurrentUser(user);
      renderHeaderActions();
    } else {
      showAlert('Invalid name or password', 'fail');
    }
  });

  //Button
  const loginButtonEl = document.querySelector('.header__login');

  loginButtonEl.addEventListener('click', function (e) {
    e.stopPropagation();
    showModal();
    formEl.classList.add('login-form--active');
    setOnHideModal(hideForm);
    console.log(currentUser);
  });
}
