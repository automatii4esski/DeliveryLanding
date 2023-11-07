const alertEl = document.querySelector('.alert');

export const showAlert = function (
  text: string,
  type: 'success' | 'fail' = 'success'
) {
  alertEl.classList.add('alert--active');
  alertEl.textContent = text;
  let typeClass = '';

  if (type === 'success') {
    alertEl.classList.add('alert--success');
    typeClass = 'alert--success';
  } else if (type === 'fail') {
    alertEl.classList.add('alert--fail');
    typeClass = 'alert--fail';
  }

  setTimeout(() => {
    alertEl.classList.remove('alert--active');
    alertEl.classList.remove(typeClass);
  }, 3000);
};
