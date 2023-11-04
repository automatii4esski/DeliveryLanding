import { formsEl } from './promo-form-tabs';
import { showAlert } from '../alert';
{
  //Radio Buttons
  const radioLabelsEl = document.querySelectorAll(
    '.promo-form__label-radio'
  ) as NodeListOf<HTMLLabelElement>;
  const radioInputsEl = document.querySelectorAll(
    '.promo-form__radio-input'
  ) as NodeListOf<HTMLInputElement>;
  let activeLabelEl: null | HTMLLabelElement = null;

  const determineCheckedRadio = function () {
    for (const input of radioInputsEl) {
      if (!input.checked) continue;

      const labelEl = input.closest(
        '.promo-form__label-radio'
      ) as HTMLLabelElement;
      labelEl.classList.add('promo-form__label-radio--active');
      activeLabelEl = labelEl;
      break;
    }
  };

  radioLabelsEl.forEach((label) =>
    label.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.add('promo-form__label-radio--active');
      const inputEl = this.querySelector(
        '.promo-form__radio-input'
      ) as HTMLInputElement;
      inputEl.checked = true;
      activeLabelEl?.classList.remove('promo-form__label-radio--active');
      activeLabelEl = this;
    })
  );

  //Form
  const form = formsEl[0] as HTMLFormElement;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    showAlert('On domestic form submit message');
    this.reset();
    activeLabelEl.classList.remove('promo-form__label-radio--active');
    determineCheckedRadio();
  });

  determineCheckedRadio();
}
