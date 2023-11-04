import { formsEl } from './promo-form-tabs';
import { showAlert } from '../alert';
{
  //Checkbox
  const checkboxLabelEl = document.querySelector('.promo-form__label-checkbox');
  const checkboxInputEl = document.querySelector(
    '.promo-form__checkbox-input'
  ) as HTMLInputElement;

  const determineIsCheckedCheckbox = function () {
    if (!checkboxInputEl.checked) return;

    checkboxLabelEl.classList.add('promo-form__label-checkbox--active');
    console.log(checkboxInputEl.checked);
  };

  checkboxLabelEl.addEventListener('click', function (e) {
    e.preventDefault();
    checkboxInputEl.checked = !checkboxInputEl.checked;
    checkboxLabelEl.classList.toggle('promo-form__label-checkbox--active');
  });

  //Select
  const currentValueEl = document.querySelector('.promo-form__select-current')!;
  const listOfOptionsEl = document.querySelector('.promo-form__select-list')!;
  const inputEl = document.querySelector(
    '.promo-form__select-value'
  ) as HTMLInputElement;

  const determineDefaultValue = function () {
    for (const option of listOfOptionsEl.children) {
      if ((option as HTMLElement).dataset.default === undefined) continue;

      currentValueEl.textContent = option.textContent;
      inputEl.value = (option as HTMLElement).dataset.value;
      break;
    }
  };

  currentValueEl.addEventListener('click', function (e) {
    e.stopPropagation();
    listOfOptionsEl.classList.toggle('promo-form__select-list--active');
    currentValueEl.classList.toggle('promo-form__select-current--active');
  });

  listOfOptionsEl.addEventListener('click', function (e) {
    e.stopPropagation();
    if (!(e.target instanceof HTMLElement)) return;

    const option = e.target.closest('.promo-form__select-option');

    if (!(option instanceof HTMLElement)) return;

    const optionValue = option.dataset.value;
    const optionText = option.textContent;

    inputEl.value = optionValue;
    currentValueEl.textContent = optionText;

    listOfOptionsEl.classList.remove('promo-form__select-list--active');
    currentValueEl.classList.remove('promo-form__select-current--active');
  });

  document.addEventListener('click', function () {
    listOfOptionsEl.classList.remove('promo-form__select-list--active');
    currentValueEl.classList.remove('promo-form__select-current--active');
  });

  //Form

  const form = formsEl[1] as HTMLFormElement;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
    showAlert('On international form submit message');
    determineDefaultValue();
    determineIsCheckedCheckbox();
  });

  determineDefaultValue();
  determineIsCheckedCheckbox();
}
