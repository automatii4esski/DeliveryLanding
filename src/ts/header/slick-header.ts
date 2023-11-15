const promoSection = document.querySelector('.promo');
const header = document.querySelector('.header');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) {
      header.classList.add('header--slick');
    } else {
      header.classList.remove('header--slick');
    }
  });
});

observer.observe(promoSection);
