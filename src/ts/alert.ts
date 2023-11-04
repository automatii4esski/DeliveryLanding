const alertEl = document.querySelector('.alert');

export const showAlert = function (text: string) {
  alertEl.classList.add('alert--active');
  alertEl.textContent = text;
  setTimeout(() => {
    alertEl.classList.remove('alert--active');
  }, 3000);
};
