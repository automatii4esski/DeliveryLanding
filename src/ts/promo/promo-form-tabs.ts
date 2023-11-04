export const formsEl = document.querySelector('.promo-form__content').children;
{
  const buttonsWrapperEl = document.querySelector('.promo-form__type-choice');
  const buttonsEl = buttonsWrapperEl.children;
  let currentIndex: number = 0;

  buttonsEl[currentIndex].classList.add('promo-form__type-button--active');
  formsEl[currentIndex].classList.add('promo-form__content-item--active');

  buttonsWrapperEl.addEventListener('click', function (e) {
    if (!(e.target instanceof HTMLElement)) return;

    const button = e.target.closest('.promo-form__type-button');

    if (!button) return;

    buttonsEl[currentIndex].classList.remove('promo-form__type-button--active');
    formsEl[currentIndex].classList.remove('promo-form__content-item--active');

    const index = [...buttonsEl].indexOf(button);
    button.classList.add('promo-form__type-button--active');
    formsEl[index].classList.add('promo-form__content-item--active');
    currentIndex = index;
  });
}
