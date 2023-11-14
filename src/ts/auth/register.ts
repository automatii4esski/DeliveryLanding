import { showAlert } from '../alert';
import { hideModal, showModal } from '../modal';
import { usersData, setCurrentUser, setOnHideModal } from '../state';
import { RegisterFormElementsType } from '../types';
import { renderHeaderActions } from './header-actions';

{
  //Form
  const formEl = document.querySelector('.register-form') as HTMLFormElement;
  const confirmPasswordEl = (formEl.elements as RegisterFormElementsType)[
    'confirm-password'
  ];

  confirmPasswordEl.addEventListener('change', function () {
    this.setCustomValidity('');
  });

  const isFormValid = function () {
    const passwordEl = (formEl.elements as RegisterFormElementsType).password;
    const confirmPasswordEl = (formEl.elements as RegisterFormElementsType)[
      'confirm-password'
    ];

    if (passwordEl.value !== confirmPasswordEl.value) {
      confirmPasswordEl.setCustomValidity("Passwords Don't Match");
      confirmPasswordEl.reportValidity();
      return false;
    }

    return true;
  };

  const findUser = function (formData: FormData) {
    return usersData.find((user) => user.nickname === formData.get('nickname'));
  };

  const hideForm = function () {
    formEl.reset();
    formEl.classList.remove('register-form--active');
  };

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!isFormValid()) return;
    const formData = new FormData(this);
    const user = findUser(formData);
    if (user) {
      showAlert('This user already exist', 'fail');
      return;
    }

    const newUser = {
      id: Date.now(),
      nickname: formData.get('nickname') as string,
      password: formData.get('password') as string,
    };

    showAlert('Register success');
    hideModal();
    hideForm();
    setCurrentUser(newUser);
    renderHeaderActions();

    usersData.push(newUser);
  });
  //Button
  const registerButtonEl = document.querySelector('.header__register');

  registerButtonEl.addEventListener('click', function (e) {
    e.stopPropagation();
    showModal();
    formEl.classList.add('register-form--active');
    setOnHideModal(hideForm);
  });
}
