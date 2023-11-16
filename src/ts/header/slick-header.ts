const promoSection = document.querySelector('.promo');
const header = document.querySelector('.header');
const burgerMenuWrapperEl = document.querySelector('.menu-burger__wrapper');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) {
      header.classList.add('header--slick');
      burgerMenuWrapperEl.classList.add('menu-burger__wrapper--slick');
    } else {
      header.classList.remove('header--slick');
      burgerMenuWrapperEl.classList.remove('menu-burger__wrapper--slick');
    }
  });
});

observer.observe(promoSection);
